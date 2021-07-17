"use strict";
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var electron_2 = __importDefault(require("electron"));
window.addEventListener("DOMContentLoaded", function () {
    console.log("DOM");
    var quit_btn = document.getElementById('quit-btn');
    quit_btn === null || quit_btn === void 0 ? void 0 : quit_btn.addEventListener('click', function () {
        if (confirm('really quit?')) {
            electron_1.ipcRenderer.send('quit');
        }
    });
});
window.addEventListener("DOMContentLoaded", function () {
    console.log(electron_2.default);
    electron_1.remote.getCurrentWindow().title = document.title;
});
