import { ipcRenderer } from "electron";

ipcRenderer.send('get-engine');

ipcRenderer.on('get-engine', (event, data) => {

});