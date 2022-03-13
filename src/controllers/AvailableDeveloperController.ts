import { Request, Response } from "express";
import { AvailableDeveloperService } from "@services/AvailableDeveloperService";
import { FindDeveloperByIdService } from "@services/FindDeveloperByIdService";

class AvailableDeveloperController {
  async handle(request: Request, response: Response) {
    const id = request.headers.id as string;

    const findDeveloperByIdService = new FindDeveloperByIdService().execute;

    const developerExists = await findDeveloperByIdService({
      developerId: id,
    });

    if (!developerExists) {
      return response.status(403).json({ message: "user not authenticated!" });
    }

    const availableDeveloperService = new AvailableDeveloperService().execute;

    const developers = await availableDeveloperService({
      developerId: developerExists.id,
      likes: developerExists.likes.map((like) => like.developerId),
      dislikes: developerExists.likes.map((dislike) => dislike.developerId),
    });

    return response.json(developers);
  }
}

export { AvailableDeveloperController };
