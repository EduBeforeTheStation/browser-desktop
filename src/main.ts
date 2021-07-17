import { app, BrowserWindow, ipcMain, protocol, session } from "electron";
import * as path from "path";
import * as isDev from 'electron-is-dev';

let mainWindow: BrowserWindow;
function createWindow() {
  session.defaultSession.clearStorageData();

  protocol.registerFileProtocol('haos', (request, callback) => {
    const url = request.url.substr(`haos://`.length);
    callback({ path: path.normalize(`${__dirname}/${url}`) });
  });
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "/preload.js"),
      devTools: isDev,
      nodeIntegration: false,
      webviewTag: true
    },
    width: 1280,
    frame: false,
  });

  // and load the index.html of the app.
  mainWindow.loadURL(isDev ? `http://localhost:3000` : `file://${path.join(__dirname, "../build/index.html")}`);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  app.quit();
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

import { Updater } from "./updater";
const updater = new Updater();
app.on('ready', updater.onReady);

ipcMain.on('quit', (event, args) => {
  app.quit();
});

ipcMain.on('fetchTab', (event, args) => {
  event.reply('fetchTab', null);
});