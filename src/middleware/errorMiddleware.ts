import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import ErrorResponse from '../error/errorResponse';

const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ZodError) {
    res.status(400).json({
      errors: `Validation Error: ${JSON.stringify(error)}`,
    });
  } else if (error instanceof ErrorResponse) {
    res.status(error.status).json({
      errors: error.message,
    });
  } else {
    res.status(500).json({
      errors: error.message,
    });
  }
};

export default errorMiddleware;
