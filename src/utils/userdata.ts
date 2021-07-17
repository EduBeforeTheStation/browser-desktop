import electron from "electron";
import path from "path";
import StormDB from 'stormdb';

export const userDataPath = (electron.app || electron.remote.app).getPath(
    'userData'
);

export const databasePath = path.resolve(userDataPath, "database.stormdb");
export const defaultSearchEngine = "https://duckduckgo.com/";

export interface VisitHistory {
    url: string,
    title: string
}
export interface SearchHistory {
    text: string,
    link: string
}


export type UrlConstructor = (query: string) => string;
export class Searcher {
    name: string
    keyword: Array<string>
    urlConstructor: UrlConstructor
    constructor(name: string, keyword: Array<string>, urlConstructor: UrlConstructor) {
        this.name = name;
        this.keyword = keyword;
        this.urlConstructor = urlConstructor;
    }
}
export const DefaultSearchers = {
    "DuckDuckGo": new Searcher("DuckDuckGo", ["duckduckgo.com", "ddg.gg"], (query: string) => {
        return `https://duckduckgo.com/?q=${query}`;
    }),
    "Google": new Searcher("Google", ["google.com"], (query: string) => {
        return `https://www.google.com/search?q=${query}`;
    })
}

export interface Settings {
    SearchEngine: Searcher,
    HttpAlert: boolean
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

    public GetSearchHistories(): Array<SearchHistory> {
        return this._db.get("history").value() as Array<SearchHistory>;
    }
    public AddSearchHistory(history: SearchHistory): boolean {
        try {
            this._db.get("history").push(history);
            return true;
        } catch {
            return false;
        }
    }
    public GetSearchHistory(id: number): SearchHistory {
        return this._db.get("history").get(id).value() as SearchHistory;
    }
    public SetSearchHistory(history: SearchHistory, id: number): boolean {
        try {
            this._db.get("history").set(id, history);
            return true;
        } catch {
            return false;
        }
    }

    public GetVisitHistories(): Array<VisitHistory> {
        return this._db.get("history").value() as Array<VisitHistory>;
    }
    public AddVisitHistory(history: VisitHistory): boolean {
        try {
            this._db.get("history").push(history);
            return true;
        } catch {
            return false;
        }
    }
    public GetVisitHistory(id: number): VisitHistory {
        return this._db.get("history").get(id).value() as VisitHistory;
    }
    public SetVisitHistory(history: VisitHistory, id: number): boolean {
        try {
            this._db.get("history").set(id, history);
            return true;
        } catch {
            return false;
        }
    }
}