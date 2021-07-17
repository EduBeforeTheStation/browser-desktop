// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
import { ipcRenderer } from "electron";

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM");
  const menu_btns = document.getElementsByClassName('tab_menu_button');
  for (const btn of Array.from(menu_btns)){
    btn.addEventListener('click', () => {
      alert('really quit?');
      ipcRenderer.send('quit');
    });
  }
});
