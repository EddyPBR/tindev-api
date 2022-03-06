import type { Request, Response, NextFunction } from "express";
import { AppException } from "@exceptions/AppException";

function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (error instanceof AppException) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  return response.status(500).json({
    message: "internal server error",
  });
}

export { errorHandler };
