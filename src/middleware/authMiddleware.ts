import { Request, Response, NextFunction } from 'express';
import { authAdmin } from '../config/firebaseAdmin';

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    const decodedToken = await authAdmin.verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(400).send('Invalid token.');
  }
};

export default authMiddleware;
