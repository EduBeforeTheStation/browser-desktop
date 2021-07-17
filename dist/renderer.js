"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var closeApp = function () {
    electron_1.ipcRenderer.send('quit');
};
