import { Request, Response } from "express";
import { AvailableDeveloperService } from "@services/AvailableDeveloperService";

class AvailableDeveloperController {
  async handle(request: Request, response: Response) {
    const developer = request.developer;

    const availableDeveloperService = new AvailableDeveloperService().execute;

    const developers = await availableDeveloperService({
      developerId: developer.id,
      likes: developer.likes.map((like) => like.developerId),
      dislikes: developer.likes.map((dislike) => dislike.developerId),
    });

    return response.json(developers);
  }
}

export { AvailableDeveloperController };
