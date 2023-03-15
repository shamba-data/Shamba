var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _cacheDir, _cacheFile, _cache, _logLevel, _toAbsolutePath, toAbsolutePath_fn;
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { debug, warn } from "../utils/logger.js";
const CACHE_FILE = `cache.json`;
class ImageCache {
  constructor(dir, logLevel) {
    __privateAdd(this, _toAbsolutePath);
    __privateAdd(this, _cacheDir, void 0);
    __privateAdd(this, _cacheFile, void 0);
    __privateAdd(this, _cache, {});
    __privateAdd(this, _logLevel, void 0);
    __privateSet(this, _logLevel, logLevel);
    __privateSet(this, _cacheDir, dir);
    __privateSet(this, _cacheFile, __privateMethod(this, _toAbsolutePath, toAbsolutePath_fn).call(this, CACHE_FILE));
  }
  async init() {
    try {
      const str = await fs.readFile(__privateGet(this, _cacheFile), "utf-8");
      __privateSet(this, _cache, JSON.parse(str));
    } catch {
      debug({ message: "no cache file found", level: __privateGet(this, _logLevel) });
    }
  }
  async finalize() {
    try {
      await fs.mkdir(path.dirname(fileURLToPath(__privateGet(this, _cacheFile))), { recursive: true });
      await fs.writeFile(__privateGet(this, _cacheFile), JSON.stringify(__privateGet(this, _cache)));
    } catch {
      warn({ message: "could not save the cache file", level: __privateGet(this, _logLevel) });
    }
  }
  async get(file) {
    if (!this.has(file)) {
      return void 0;
    }
    try {
      const filepath = __privateMethod(this, _toAbsolutePath, toAbsolutePath_fn).call(this, file);
      return await fs.readFile(filepath);
    } catch {
      warn({ message: `could not load cached file for "${file}"`, level: __privateGet(this, _logLevel) });
      return void 0;
    }
  }
  async set(file, buffer, opts) {
    try {
      const filepath = __privateMethod(this, _toAbsolutePath, toAbsolutePath_fn).call(this, file);
      await fs.mkdir(path.dirname(fileURLToPath(filepath)), { recursive: true });
      await fs.writeFile(filepath, buffer);
      __privateGet(this, _cache)[file] = opts;
    } catch {
      warn({ message: `could not save cached copy of "${file}"`, level: __privateGet(this, _logLevel) });
    }
  }
  has(file) {
    if (!(file in __privateGet(this, _cache))) {
      return false;
    }
    const { expires } = __privateGet(this, _cache)[file];
    return expires > Date.now();
  }
}
_cacheDir = new WeakMap();
_cacheFile = new WeakMap();
_cache = new WeakMap();
_logLevel = new WeakMap();
_toAbsolutePath = new WeakSet();
toAbsolutePath_fn = function(file) {
  return new URL(path.join(__privateGet(this, _cacheDir).toString(), file));
};
export {
  ImageCache
};
