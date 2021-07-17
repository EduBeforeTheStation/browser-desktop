import electron from "electron";
import EventEmitter from "events";
import fs from "fs/promises"
import path from "path";

export const userDataPath = (electron.app || electron.remote.app).getPath(
    'userData'
);

export const configPath = path.resolve(userDataPath, "config.json")

export const defaultSearchEngine = "https://duckduckgo.com/";

export class Config extends EventEmitter {
    
}