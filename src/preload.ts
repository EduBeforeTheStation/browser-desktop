// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import { ipcRenderer } from "electron";

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM");
  const quit_btn = document.getElementById('quit-btn');
  quit_btn?.addEventListener('click', () => {
    if (confirm('really quit?')) {
      ipcRenderer.send('quit');
    }
  });
});