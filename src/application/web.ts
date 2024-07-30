import express from 'express';
import { authRouter } from '../route/authRoutes';
import errorMiddleware from '../middleware/errorMiddleware';

export const web = express();
web.use(express.json());
web.use(authRouter);
web.use(errorMiddleware);
