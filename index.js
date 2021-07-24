"use strict";
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanUp = exports.addCleanUpFunction = exports.redis = exports.mongo = exports.getKeys = void 0;
var getKeys_1 = __importDefault(require("./getKeys"));
exports.getKeys = getKeys_1.default;
var mongo_1 = __importDefault(require("./mongo"));
exports.mongo = mongo_1.default;
var redis_1 = __importDefault(require("./redis"));
exports.redis = redis_1.default;
var cleanUp_1 = __importStar(require("./cleanUp"));
exports.addCleanUpFunction = cleanUp_1.default;
Object.defineProperty(exports, "cleanUp", { enumerable: true, get: function () { return cleanUp_1.cleanUp; } });
