"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var getKeys_1 = require("../getKeys");
var properties = [
    'stripe_api_key',
    'stripe_startup',
    'stripe_agency',
    'stripe_enterprise',
    'stripe_startup_yearly',
    'stripe_agency_yearly',
    'stripe_enterprise_yearly',
    'cognito_pool_id',
    'mongo_uri',
    'redis_uri',
    'api_gateway_usage_plan',
    'api_gateway_stage',
    'api_gateway_id',
];
describe('getKeys utility', function () {
    var keys;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getKeys_1.fetchKeys()];
                case 1:
                    keys = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test('should return dev secrets by default', function () {
        expect(getKeys_1.getSecretId()).toBe('dev_secrets');
    });
    test('should return dev secrets if false is provided', function () {
        expect(getKeys_1.getSecretId(false)).toBe('dev_secrets');
    });
    test('should return prod secrets if true is provided', function () {
        expect(getKeys_1.getSecretId(true)).toBe('prod_secrets');
    });
    test('keys should be an object', function () {
        expect(keys instanceof Object).toBe(true);
    });
    var _loop_1 = function (property) {
        test("keys should contain " + property, function () {
            expect(keys).toHaveProperty(property);
        });
    };
    for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
        var property = properties_1[_i];
        _loop_1(property);
    }
});
