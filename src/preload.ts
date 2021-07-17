// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import { ipcRenderer, IpcRenderer } from "electron";

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM");
<<<<<<< HEAD
  const menu_btns = document.getElementsByClassName('quit_btn');
  for (const btn of Array.from(menu_btns)){
    btn.addEventListener('click', () => {
      alert('really quit?');
=======
  const quit_btn = document.getElementById('quit-btn');
  quit_btn?.addEventListener('click', () => {
    if (confirm('really quit?')) {
>>>>>>> db95e6469e75bc9545f4545a6037316de13c953e
      ipcRenderer.send('quit');
    }
  });
});
