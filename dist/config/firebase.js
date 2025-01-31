"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.auth = exports.dbAdmin = exports.authAdmin = exports.admin = void 0;
const firebaseAdmin_1 = require("./firebaseAdmin");
Object.defineProperty(exports, "admin", { enumerable: true, get: function () { return firebaseAdmin_1.admin; } });
Object.defineProperty(exports, "authAdmin", { enumerable: true, get: function () { return firebaseAdmin_1.authAdmin; } });
Object.defineProperty(exports, "dbAdmin", { enumerable: true, get: function () { return firebaseAdmin_1.dbAdmin; } });
const firebaseClient_1 = require("./firebaseClient");
Object.defineProperty(exports, "db", { enumerable: true, get: function () { return firebaseClient_1.db; } });
Object.defineProperty(exports, "auth", { enumerable: true, get: function () { return firebaseClient_1.auth; } });
