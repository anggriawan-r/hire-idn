"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const errorResponse_1 = __importDefault(require("../error/errorResponse"));
const errorMiddleware = (error, req, res, next) => {
    if (error instanceof zod_1.ZodError) {
        res.status(400).json({
            errors: `Validation Error: ${JSON.stringify(error)}`,
        });
    }
    else if (error instanceof errorResponse_1.default) {
        res.status(error.status).json({
            errors: error.message,
        });
    }
    else {
        res.status(500).json({
            errors: error.message,
        });
    }
};
exports.default = errorMiddleware;
