import { machineIdSync } from 'node-machine-id';
import crpyto from 'crypto';
import CryptoJS, { AES, SHA256 } from 'crypto-js';
import StormDB from 'stormdb';
import { userDataPath } from './userdata';
import path from 'path';
import { EventEmitter } from 'stream';

/*

*/

const databasePath = path.resolve(userDataPath, "password.stormdb");
const machineID = machineIdSync();

export function shakeKey(password: string): string {
    const key = password + machineID;
    const hashkey = SHA256(key);
    return hashkey.toString();
}

export function encrypt(password: string, key: string): string {
    const encrypted = AES.encrypt(password, key).toString();
    return encrypted;
}

export function decrypt(encrypted: string, key: string): string {
    const plain = AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);
    return plain;
}

export default class Database extends EventEmitter {
    _db!: StormDB;
    _onerror: boolean;

    constructor() {
        super();
        this._onerror = false;
        const engine = new StormDB.localFileEngine(databasePath, {
            serialize: (data: never) => {
                // encrypt and serialize data
                return encrypt(JSON.stringify(data), machineID);
            },
            deserialize: (data: string) => {
                // decrypt and deserialize data
                const decrypted = decrypt(data, machineID);
                console.log(decrypted);
                if (!decrypted && data) {
                    this.emit('incorrect');
                    this._onerror = true;
                }
                return JSON.parse(decrypted);
            }
        });
        if (this._onerror) return;
        this._db = new StormDB(engine);
        this._db.default({});
    }
    public async Save(): Promise<boolean> {
        try {
            if (this._onerror) throw "An error occurred while decrypting the database.";
            await this._db.save();
            return true;
        } catch {
            return false;
        }
    }
    public SetPassword(domain: string, encrypted: string): boolean {
        try {
            if (this._onerror) throw "An error occurred while decrypting the database.";
            this._db.set(domain, encrypted);
            return true;
        } catch {
            return false;
        }
    }
    public GetPassword(domain: string): string | boolean {
        try {
            if (this._onerror) throw "An error occurred while decrypting the database.";
            return this._db.get(domain).value() as unknown as string;
        } catch {
            return false;
        }
    }
    public SetDecrypted(domain: string, value: string, passphrase: string): string | boolean {
        try {
            if (this._onerror) throw "An error occurred while decrypting the database.";
            this._db.set(domain, encrypt(value, shakeKey(passphrase)));
            return true;
        } catch {
            return false;
        }
    }
    public GetDecrypted(domain: string, passphrase: string): string | boolean {
        try {
            if (this._onerror) throw "An error occurred while decrypting the database.";
            const encrypted = this._db.get(domain).value() as unknown as string;
            return decrypt(encrypted, shakeKey(passphrase));
        } catch {
            return false;
        }
    }
}