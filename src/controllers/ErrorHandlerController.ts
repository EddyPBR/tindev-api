import { Request, Response } from "express";
import { AppException } from "@exceptions/AppException";

class ErrorHandlerController {
  index(request: Request, response: Response) {
    throw new AppException(400, "trigger error controller");

    return response
      .status(200)
      .json({ message: "Error handler controller it not okay" });
  }
}

export { ErrorHandlerController };
