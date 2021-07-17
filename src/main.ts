import { app, BrowserWindow, ipcMain, protocol, session, IpcMainEvent } from "electron";
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
      nodeIntegration: true,
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
//const updater = new Updater();
//app.on('ready', updater.onReady);

ipcMain.on('quit', (event, args) => {
  app.quit();
});

ipcMain.on('fetchTab', (event, args) => {
  event.reply('fetchTab', null);
});

import * as userdata from './utils/userdata';
const userDataBase = new userdata.Database();

console.log(userdata.userDataPath);

import WebSocket from "ws";
import EventEmitter from "events";

class WebSoc extends EventEmitter {
  wss: WebSocket.Server
  ws: WebSocket | undefined
  constructor(port: number) {
    super();
    this.wss = new WebSocket.Server({ port: port });
    this.wss.on("connection", ws => {
      this.ws = ws;
      ws.on("message", (recv) => {
        const { channel, data } = JSON.parse(recv.toString());
        this.emit(channel, data);
      });
    });
  }
  send(channel: string, data: any){
    this.ws?.send(JSON.stringify({
      channel: channel,
      data: data
    }));
  }
}

const socket = new WebSoc(3030);
socket.on('select-engine', (select: "DuckDuckGo" | "Google") => {
  console.log(select);
  const settings: userdata.Settings = userDataBase.GetSettings();
  settings.SearchEngine = userdata.DefaultSearchers[select];
  userDataBase.SetSettings(settings);
  userDataBase.Save();
});

socket.on('settings', () => {
  const settings: userdata.Settings = userDataBase.GetSettings();
  socket.send('settings', settings);
});

socket.on('visithistory', () => {
  const histories: Array<userdata.VisitHistory> = userDataBase.GetVisitHistories();
  socket.send('visithistory', histories);
});

/*

console.log(data.select);
    const settings: userdata.Settings = userDataBase.GetSettings();
    settings.SearchEngine = userdata.DefaultSearchers[data.select];
    userDataBase.SetSettings(settings);
    userDataBase.Save();
ipcMain.on('select-engine', (event, select: "DuckDuckGo" | "Google") => {
});

ipcMain.on('settings', (event: IpcMainEvent) => {
  const settings: userdata.Settings = userDataBase.GetSettings();
  event.reply('settings', settings);
});
*/