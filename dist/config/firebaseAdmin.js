"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAdmin = exports.dbAdmin = exports.admin = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
exports.admin = firebase_admin_1.default;
const path = '/home/anggri/Documents/hire-idn-test-firebase-adminsdk-9tlgb-d907f80740.json';
const serviceAccount = require(path);
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
});
const dbAdmin = firebase_admin_1.default.firestore();
exports.dbAdmin = dbAdmin;
const authAdmin = firebase_admin_1.default.auth();
exports.authAdmin = authAdmin;
