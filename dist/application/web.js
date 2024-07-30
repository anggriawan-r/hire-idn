"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.web = void 0;
const express_1 = __importDefault(require("express"));
const authRoutes_1 = require("../route/authRoutes");
const errorMiddleware_1 = __importDefault(require("../middleware/errorMiddleware"));
exports.web = (0, express_1.default)();
exports.web.use(express_1.default.json());
exports.web.get('/', (req, res) => {
    res.send('Hello, Vercel!');
});
exports.web.use(authRoutes_1.authRouter);
exports.web.use(errorMiddleware_1.default);
