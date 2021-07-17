"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
var electron_1 = require("electron");
var closeApp = function () {
    electron_1.ipcRenderer.send('quit');
};
window.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded");
    return;
});
