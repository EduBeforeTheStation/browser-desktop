"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = exports.shakeKey = void 0;
var node_machine_id_1 = require("node-machine-id");
var crypto_js_1 = __importStar(require("crypto-js"));
var stormdb_1 = __importDefault(require("stormdb"));
var userdata_1 = require("./userdata");
var path_1 = __importDefault(require("path"));
var stream_1 = require("stream");
/*

*/
var databasePath = path_1.default.resolve(userdata_1.userDataPath, "password.stormdb");
var machineID = node_machine_id_1.machineIdSync();
function shakeKey(password) {
    var key = password + machineID;
    var hashkey = crypto_js_1.SHA256(key);
    return hashkey.toString();
}
exports.shakeKey = shakeKey;
function encrypt(password, key) {
    var encrypted = crypto_js_1.AES.encrypt(password, key).toString();
    return encrypted;
}
exports.encrypt = encrypt;
function decrypt(encrypted, key) {
    var plain = crypto_js_1.AES.decrypt(encrypted, key).toString(crypto_js_1.default.enc.Utf8);
    return plain;
}
exports.decrypt = decrypt;
var Database = /** @class */ (function (_super) {
    __extends(Database, _super);
    function Database() {
        var _this = _super.call(this) || this;
        _this._onerror = false;
        var engine = new stormdb_1.default.localFileEngine(databasePath, {
            serialize: function (data) {
                // encrypt and serialize data
                return encrypt(JSON.stringify(data), machineID);
            },
            deserialize: function (data) {
                // decrypt and deserialize data
                var decrypted = decrypt(data, machineID);
                console.log(decrypted);
                if (!decrypted && data) {
                    _this.emit('incorrect');
                    _this._onerror = true;
                }
                return JSON.parse(decrypted);
            }
        });
        if (_this._onerror)
            return _this;
        _this._db = new stormdb_1.default(engine);
        _this._db.default({});
        return _this;
    }
    Database.prototype.Save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        if (this._onerror)
                            throw "An error occurred while decrypting the database.";
                        return [4 /*yield*/, this._db.save()];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, true];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Database.prototype.SetPassword = function (domain, encrypted) {
        try {
            if (this._onerror)
                throw "An error occurred while decrypting the database.";
            this._db.set(domain, encrypted);
            return true;
        }
        catch (_a) {
            return false;
        }
    };
    Database.prototype.GetPassword = function (domain) {
        try {
            if (this._onerror)
                throw "An error occurred while decrypting the database.";
            return this._db.get(domain).value();
        }
        catch (_a) {
            return false;
        }
    };
    Database.prototype.SetDecrypted = function (domain, value, passphrase) {
        try {
            if (this._onerror)
                throw "An error occurred while decrypting the database.";
            this._db.set(domain, encrypt(value, shakeKey(passphrase)));
            return true;
        }
        catch (_a) {
            return false;
        }
    };
    Database.prototype.GetDecrypted = function (domain, passphrase) {
        try {
            if (this._onerror)
                throw "An error occurred while decrypting the database.";
            var encrypted = this._db.get(domain).value();
            return decrypt(encrypted, shakeKey(passphrase));
        }
        catch (_a) {
            return false;
        }
    };
    return Database;
}(stream_1.EventEmitter));
exports.default = Database;
