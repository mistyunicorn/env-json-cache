import * as NodeCache from "node-cache";

class EnvCache {
    private myCache = new NodeCache();
    private log: any = console;

    constructor() {
        const env = process.env
        for (let key of Object.keys(env)) {
            this.myCache.set(key, env[key])
        }
    }
    loadJson(data, log = console) {
        try {
            let jsonData
            this.log = log
            if (typeof data == "string") jsonData = JSON.parse(data)
            else jsonData = data
            for (let key of Object.keys(jsonData)) {
                this.myCache.set(key, jsonData[key])
            }
        } catch (e) {
            this.log.info("Json parse error" + e)
        }
    }

    set(key: string, value: string | object | boolean | number) {
        this.myCache.set(key, value)
    }
    get(key: string, defaultValue: string | object | boolean | number) {
        return this.myCache.get(key) ? this.myCache.get(key) : defaultValue
    }
    getKeys() {
        return this.myCache.keys()
    }
    delete(key: string) {
        this.myCache.del(key)
    }
    has(key: string) {
        return this.myCache.has(key)
    }
}

module.exports = new EnvCache()