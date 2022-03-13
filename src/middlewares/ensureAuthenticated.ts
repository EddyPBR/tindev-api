import type { Request, Response, NextFunction } from "express";
import { FindDeveloperByIdService } from "@services/FindDeveloperByIdService";
import { AppException } from "@exceptions/AppException";

const ensureAuthenticated = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id } = request.headers;

  if (!id || id instanceof Array || id === "") {
    return response.status(403).json({ message: "usuário não autenticado" });
  }

  const findDeveloperByIdService = new FindDeveloperByIdService().execute;

  try {
    const developerExists = await findDeveloperByIdService({
      developerId: id,
    });

    if (!developerExists) {
      return response.status(403).json({ message: "usuário não autenticado" });
    }

    request.developer = developerExists;

    next();
  } catch (error: any) {
    if (error instanceof AppException) {
      response.status(403).json({ message: "usuário não autenticado" });
    }

    throw new AppException(400, "erro indefinido", error.message);
  }
};

export { ensureAuthenticated };
