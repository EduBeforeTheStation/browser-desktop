"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
var electron_1 = require("electron");
window.addEventListener("DOMContentLoaded", function () {
    console.log("DOM");
    var menu_btns = document.getElementsByClassName('tab_menu_button');
    for (var _i = 0, _a = Array.from(menu_btns); _i < _a.length; _i++) {
        var btn = _a[_i];
        btn.addEventListener('click', function () {
            alert('really quit?');
            electron_1.ipcRenderer.send('quit');
        });
    }
});
