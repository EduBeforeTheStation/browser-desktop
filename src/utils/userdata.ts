import electron from "electron";
import path from "path";
import StormDB from 'stormdb';

export const userDataPath = (electron.app || electron.remote.app).getPath(
    'userData'
);

export const historyPath = path.resolve(userDataPath, "history.json");
export const configPath = path.resolve(userDataPath, "config.json");
export const databasePath = path.resolve(userDataPath, "database.stormdb");
export const defaultSearchEngine = "https://duckduckgo.com/";

export interface History {
    url: string,
    title: string
}

export class Database {
    _db: StormDB;

    constructor() {
        const engine = new StormDB.localFileEngine(databasePath);
        this._db = new StormDB(engine);
        this._db.default({
            history: []
        });
    }

    public Save(): boolean {
        try {
            this._db.save();
            return true;
        } catch {
            return false;
        }
    }

    public GetHistories(): Array<History> {
        return this._db.get("history").value() as Array<History>;
    }
    public AddHistory(history: History): boolean {
        try {
            this._db.get("history").push(history);
            return true;
        } catch {
            return false;
        }
    }
    public GetHistory(id: number): History {
        return this._db.get("history").get(id).value() as History;
    }
    public SetHistory(history: History, id: number): boolean {
        try {
            this._db.get("history").set(id, history);
            return true;
        } catch {
            return false;
        }
    }
}