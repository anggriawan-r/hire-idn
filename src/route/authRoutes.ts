import { Router } from 'express';
import { AuthController } from '../controller/authController';

export const authRouter = Router();

authRouter.post('/signup', AuthController.signUp);
authRouter.post('/signin', AuthController.signIn);
