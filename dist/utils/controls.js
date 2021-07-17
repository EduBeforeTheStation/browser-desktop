"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quit = void 0;
var electron_1 = require("electron");
function Quit() {
    electron_1.ipcRenderer.send('quit');
}
exports.Quit = Quit;
