"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = exports.mongo = exports.getKeys = void 0;
var getKeys_1 = __importDefault(require("./getKeys"));
exports.getKeys = getKeys_1.default;
var mongo_1 = require("./mongo");
Object.defineProperty(exports, "mongo", { enumerable: true, get: function () { return mongo_1.mongo; } });
var redis_1 = require("./redis");
Object.defineProperty(exports, "redis", { enumerable: true, get: function () { return redis_1.redis; } });
