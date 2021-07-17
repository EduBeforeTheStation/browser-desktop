import { ipcRenderer } from "electron";

export function Quit() {
    ipcRenderer.send('quit');
}