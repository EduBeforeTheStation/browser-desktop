import { ipcRenderer } from "electron"
const closeApp = () => {
    ipcRenderer.send('quit');
};


export {}