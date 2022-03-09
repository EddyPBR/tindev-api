import { Request, Response } from "express";
import { FindDeveloperByUserService } from "@services/FindDeveloperByUserService";
import { CreateDeveloperService } from "@services/CreateDeveloperService";
import type { CreateDeveloperControllerBody } from "@@types/controllers/CreateDeveloperControllerBody";
import { getGithubUserRequest } from "@requests/getGithubUserRequest";

class CreateDeveloperController {
  async handle(request: Request, response: Response) {
    const { username }: CreateDeveloperControllerBody = request.body;

    const findDeveloperByUserService = new FindDeveloperByUserService().execute;
    const createDeveloperService = new CreateDeveloperService().execute;

    const userExists = await findDeveloperByUserService({ username });

    if (userExists) {
      return response.status(200).json({ message: "usuário já cadastrado" });
    }

    const { data: user } = await getGithubUserRequest(username);

    if(!user) {
      return response.status(404).json({ message: "usuário não encontrado!" });
    }

    const developer = await createDeveloperService({
      user: username,
      name: user.name,
      bio: user.bio,
      avatar_url: user.avatar_url,
    });

    return response.status(200).json(developer);
  }
}

export { CreateDeveloperController };
