import { Request, Response } from "express";
import { AvailableDeveloperService } from "@services/AvailableDeveloperService";
import { FindDeveloperByUserService } from "@services/FindDeveloperByUserService";

class AvailableDeveloperController {
  async handle(request: Request, response: Response) {
    const username = request.headers.username as string;

    const findDeveloperByUserService = new FindDeveloperByUserService().execute;

    const developerExists = await findDeveloperByUserService({
      username: username,
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
