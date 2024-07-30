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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const firebase_1 = require("../config/firebase");
const auth_1 = require("firebase/auth");
const firestore_1 = require("firebase/firestore");
const errorResponse_1 = __importDefault(require("../error/errorResponse"));
class AuthService {
    static signUp(email, password, name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userCredential = yield (0, auth_1.createUserWithEmailAndPassword)(firebase_1.auth, email, password);
                const user = userCredential.user;
                if (user) {
                    yield (0, auth_1.updateProfile)(user, { displayName: name });
                    const userData = {
                        userId: user.uid,
                        name: name,
                        email: user.email,
                    };
                    yield (0, firestore_1.setDoc)((0, firestore_1.doc)(firebase_1.db, 'users', user.uid), userData);
                    yield (0, auth_1.sendEmailVerification)(user);
                    return userData;
                }
                else {
                    throw new errorResponse_1.default(500, 'Sign up failed');
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new errorResponse_1.default(400, error.message);
                }
            }
        });
    }
    static signIn(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userCredential = yield (0, auth_1.signInWithEmailAndPassword)(firebase_1.auth, email, password);
                const user = userCredential.user;
                if (user) {
                    if (user.emailVerified) {
                        return yield user.getIdToken();
                    }
                    else {
                        throw new errorResponse_1.default(403, 'Email not verified. Please verify your email.');
                    }
                }
                else {
                    throw new errorResponse_1.default(500, 'Login failed');
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new errorResponse_1.default(400, error.message);
                }
            }
        });
    }
}
exports.AuthService = AuthService;
