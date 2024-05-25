import * as NodeCache from "node-cache";
import * as fs from "fs"
import * as path from "path"

class EnvCache {
    private myCache = new NodeCache();
    private log: any = console;

    constructor() {
        const env = process.env
        for (let key of Object.keys(env)) {
            this.myCache.set(key, env[key])
        }
    }

    loadJson(data, log?) {
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

    loadJsonFile(file: string, log?) {
        try {
            if (!fs.existsSync(file)) {
                this.log.info(`File not exist ${file}`)
                return
            }
            if (!(path.extname(file) == ".json")) {
                this.log.info(`Accepted file type is json recived ${path.extname(file)}`)
                return
            }
            let data = fs.readFileSync(file, 'utf8')
            let jsonData = JSON.parse(data.toString());
            for (var _i = 0, _a = Object.keys(jsonData); _i < _a.length; _i++) {
                var key = _a[_i];
                this.myCache.set(key, jsonData[key]);
            }
        } catch (e) {
            this.log.info("Unexpected error while caching keys from json file" + e)
        }
    }

    set(key: string, value: string | object | boolean | number, ttl: number = undefined) {
        return this.myCache.set(key, value, ttl)
    }
    get(key: string, defaultValue: string | object | boolean | number) {
        return this.myCache.get(key) ? this.myCache.get(key) : defaultValue
    }
    getKeys() {
        return this.myCache.keys()
    }
    delete(key: string) {
        return this.myCache.del(key)
    }
    has(key: string) {
        return this.myCache.has(key)
    }
}

module.exports = new EnvCache()