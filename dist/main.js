"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = __importStar(require("path"));
var isDev = __importStar(require("electron-is-dev"));
var mainWindow;
function createWindow() {
    electron_1.protocol.registerFileProtocol('haos', function (request, callback) {
        var url = request.url.substr("haos://".length);
        callback({ path: path.normalize(__dirname + "/" + url) });
    });
    // Create the browser window.
    mainWindow = new electron_1.BrowserWindow({
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            devTools: isDev,
            webviewTag: true,
            nodeIntegration: true,
            contextIsolation: true
        },
        width: 1280,
        frame: false,
    });
    // and load the index.html of the app.
    mainWindow.loadURL(isDev ? "http://localhost:3000" : "file://" + path.join(__dirname, "../build/index.html"));
    mainWindow.webContents.on('will-navigate', function (event, url) {
        // url이 https인지 검사하고 http일시 경고 전송
    });
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on("ready", function () {
    createWindow();
    electron_1.app.on("activate", function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
var updater_1 = require("./updater");
new updater_1.Updater();
electron_1.ipcMain.on('quit', function (event, args) {
    electron_1.app.quit();
});
electron_1.ipcMain.on('fetchTab', function (event, args) {
    event.reply('fetchTab', null);
});
