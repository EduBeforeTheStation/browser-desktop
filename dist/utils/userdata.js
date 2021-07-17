"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.defaultSearchEngine = exports.databasePath = exports.configPath = exports.historyPath = exports.userDataPath = void 0;
var electron_1 = __importDefault(require("electron"));
var path_1 = __importDefault(require("path"));
var stormdb_1 = __importDefault(require("stormdb"));
exports.userDataPath = (electron_1.default.app || electron_1.default.remote.app).getPath('userData');
exports.historyPath = path_1.default.resolve(exports.userDataPath, "history.json");
exports.configPath = path_1.default.resolve(exports.userDataPath, "config.json");
exports.databasePath = path_1.default.resolve(exports.userDataPath, "database.stormdb");
exports.defaultSearchEngine = "https://duckduckgo.com/";
var Database = /** @class */ (function () {
    function Database() {
        var engine = new stormdb_1.default.localFileEngine(exports.databasePath);
        this._db = new stormdb_1.default(engine);
        this._db.default({
            history: []
        });
    }
    Database.prototype.Save = function () {
        try {
            this._db.save();
            return true;
        }
        catch (_a) {
            return false;
        }
    };
    Database.prototype.GetHistories = function () {
        return this._db.get("history").value();
    };
    Database.prototype.AddHistory = function (history) {
        try {
            this._db.get("history").push(history);
            return true;
        }
        catch (_a) {
            return false;
        }
    };
    Database.prototype.GetHistory = function (id) {
        return this._db.get("history").get(id).value();
    };
    Database.prototype.SetHistory = function (history, id) {
        try {
            this._db.get("history").set(id, history);
            return true;
        }
        catch (_a) {
            return false;
        }
    };
    return Database;
}());
exports.Database = Database;
