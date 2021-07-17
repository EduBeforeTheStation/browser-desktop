"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Updater = void 0;
var electron_1 = require("electron");
var electron_updater_1 = require("electron-updater");
var Updater = /** @class */ (function () {
    function Updater() {
        var _this = this;
        electron_updater_1.autoUpdater.on("checking-for-update", function () {
            return _this.sendStatusToWindow("Checking for update...");
        });
        electron_updater_1.autoUpdater.on("update-available", function () {
            var _a;
            _this.sendStatusToWindow("Update available.");
            (_a = _this.updateWin) === null || _a === void 0 ? void 0 : _a.show();
        });
        electron_updater_1.autoUpdater.on("update-not-available", function () {
            var _a;
            _this.sendStatusToWindow("Update not available.");
            (_a = _this.updateWin) === null || _a === void 0 ? void 0 : _a.close();
        });
        electron_updater_1.autoUpdater.on("error", function (err) {
            var _a;
            _this.sendStatusToWindow("Error in auto-updater. " + err);
            (_a = _this.updateWin) === null || _a === void 0 ? void 0 : _a.show();
        });
        electron_updater_1.autoUpdater.on("download-progress", function (progressObj) {
            var log_message = "Download speed: " + progressObj.bytesPerSecond;
            log_message = log_message + " - Downloaded " + progressObj.percent + "%";
            log_message = log_message + " (" + progressObj.transferred + "/" + progressObj.total + ")";
            _this.sendStatusToWindow(log_message);
        });
        electron_updater_1.autoUpdater.on("update-downloaded", function () {
            _this.sendStatusToWindow("Update downloaded");
            if (!_this.updateWin)
                return;
            var option = {
                type: "question",
                buttons: ["업데이트", "취소"],
                defaultId: 0,
                title: "electron-updater",
                message: "업데이트가 있습니다. 프로그램을 업데이트 하시겠습니까?",
            };
            var btnIndex = electron_1.dialog.showMessageBoxSync(_this.updateWin, option);
            if (btnIndex === 0) {
                electron_updater_1.autoUpdater.quitAndInstall();
            }
        });
    }
    Updater.prototype.createDefaultUpdateWindow = function () {
        var _this = this;
        this.updateWin = new electron_1.BrowserWindow({
            backgroundColor: "#eeeeee",
            webPreferences: { nodeIntegration: true, contextIsolation: false },
            show: false
        });
        this.updateWin.on("closed", function () {
            _this.updateWin = undefined;
        });
        this.updateWin.loadURL("file://" + __dirname + "/public/updater.html#v" + electron_1.app.getVersion());
        return this.updateWin;
    };
    Updater.prototype.sendStatusToWindow = function (text) {
        var _a, _b;
        if ((_a = this.updateWin) === null || _a === void 0 ? void 0 : _a.webContents)
            (_b = this.updateWin) === null || _b === void 0 ? void 0 : _b.webContents.send("message", text);
    };
    return Updater;
}());
exports.Updater = Updater;
