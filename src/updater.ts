import { app, BrowserWindow, dialog } from 'electron';
import { autoUpdater as updater } from "electron-updater";

export class Updater {
    updateWin: BrowserWindow | undefined;
    constructor() {
        console.log("create!!!!");
        updater.on("checking-for-update", () =>
            this.sendStatusToWindow("Checking for update..."));
        updater.on("update-available", () => {
            this.sendStatusToWindow("Update available.");
            this.updateWin?.show();
        });
        updater.on("update-not-available", () => {
            this.sendStatusToWindow("Update not available.");
            this.updateWin?.close();
        });
        updater.on("error", (err) => {
            this.sendStatusToWindow("Error in auto-updater. " + err);
            this.updateWin?.show();
        });
        updater.on("download-progress", (progressObj) => {
            let log_message = "Download speed: " + progressObj.bytesPerSecond;
            log_message = log_message + " - Downloaded " + progressObj.percent + "%";
            log_message = log_message + " (" + progressObj.transferred + "/" + progressObj.total + ")";
            this.sendStatusToWindow(log_message);
        });
        updater.on("update-downloaded", () => {
            this.sendStatusToWindow("Update downloaded");
            if (!this.updateWin) return;

            const option = {
                type: "question",
                buttons: ["업데이트", "취소"],
                defaultId: 0,
                title: "electron-updater",
                message: "업데이트가 있습니다. 프로그램을 업데이트 하시겠습니까?",
            };
            const btnIndex = dialog.showMessageBoxSync(this.updateWin, option);

            if (btnIndex === 0) {
                updater.quitAndInstall();
            }
        });
    }
    createDefaultUpdateWindow(): BrowserWindow {
        this.updateWin = new BrowserWindow({
            backgroundColor: "#eeeeee",
            webPreferences: { nodeIntegration: true, contextIsolation: false },
            show: false
        });

        this.updateWin.on("closed", () => {
            this.updateWin = undefined;
        });
        this.updateWin.loadURL(`file://${__dirname}/public/updater.html#v${app.getVersion()}`);
        return this.updateWin;
    }
    sendStatusToWindow(text: string): void {
        if (this.updateWin?.webContents)
            this.updateWin?.webContents.send("message", text);
    }
    onReady(): void {
        this.updateWin = new BrowserWindow({
            backgroundColor: "#eeeeee",
            webPreferences: { nodeIntegration: true, contextIsolation: false },
            show: false
        });

        this.updateWin.on("closed", () => {
            this.updateWin = undefined;
        });
        this.updateWin.loadURL(`file://${__dirname}/../public/updater.html#v${app.getVersion()}`);
        updater.checkForUpdates();
    }
}