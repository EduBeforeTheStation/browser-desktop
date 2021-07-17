"use strict";
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
window.addEventListener("DOMContentLoaded", function () {
    console.log("DOM");
    var quit_btn = document.getElementById('quit-btn');
    quit_btn === null || quit_btn === void 0 ? void 0 : quit_btn.addEventListener('click', function () {
        alert('really quit?');
        electron_1.ipcRenderer.send('quit');
    });
});
