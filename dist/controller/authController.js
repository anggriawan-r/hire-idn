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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const authService_1 = require("../service/authService");
class AuthController {
    static signUp(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, name } = req.body;
            try {
                const user = yield authService_1.AuthService.signUp(email, password, name);
                res.status(201).json({ data: user });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static signIn(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                const token = yield authService_1.AuthService.signIn(email, password);
                res.status(200).json({ token });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.AuthController = AuthController;
