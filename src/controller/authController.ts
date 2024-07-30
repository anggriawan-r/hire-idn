import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../service/authService';

export class AuthController {
  static async signUp(req: Request, res: Response, next: NextFunction) {
    const { email, password, name } = req.body;

    try {
      const user = await AuthService.signUp(email, password, name);

      res.status(201).json({ data: user });
    } catch (error) {
      next(error);
    }
  }

  static async signIn(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    try {
      const token = await AuthService.signIn(email, password);
      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}
