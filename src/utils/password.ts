import { machineIdSync } from 'node-machine-id';
import crpyto from 'crypto';
import CryptoJS, { AES, SHA256 } from 'crypto-js';

/*

*/

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
