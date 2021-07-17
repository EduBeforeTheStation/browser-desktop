// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
import { ipcRenderer } from "electron"
const closeApp = () => {
    ipcRenderer.send('quit');
};

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded");
  return;
});
