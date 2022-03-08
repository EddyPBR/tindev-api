import { prismaClient } from "@databases/prisma";
import type { CreateDeveloperServiceParams } from "@@types/services/CreateDeveloperServiceParams";
import { AppException } from "@exceptions/AppException";

class CreateDeveloperService {
  async execute({ user, name, bio, avatar_url }: CreateDeveloperServiceParams) {
    try {
      const developer = await prismaClient.developer.create({
        data: {
          user,
          name,
          bio,
          avatar_url,
        },
      });

      return developer;
    } catch (error: any) {
      throw new AppException(
        400,
        "falha ao cadastrar desenvolvedor",
        error.message,
      );
    }
  }
}

export { CreateDeveloperService };
