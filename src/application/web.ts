import express from 'express';
import { authRouter } from '../route/authRoutes';
import errorMiddleware from '../middleware/errorMiddleware';

export const web = express();
web.use(express.json());

web.get('/', (req, res) => {
  res.send('Hello, Vercel!');
});

web.use(authRouter);
web.use(errorMiddleware);
