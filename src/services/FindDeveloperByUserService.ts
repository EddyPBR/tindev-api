import { prismaClient } from "@databases/prisma";
import { AppException } from "@exceptions/AppException";
import type { FindDeveloperByUserServiceParams } from "@@types/services/FindDeveloperByUserServiceParams";

class FindDeveloperByUserService {
  async execute({ username }: FindDeveloperByUserServiceParams) {
    try {
      const developer = await prismaClient.developer.findUnique({
        where: {
          user: username,
        },
        include: {
          likes: true,
          dislikes: true,
        },
      });

      return developer;
    } catch (error: any) {
      throw new AppException(
        400,
        "falha ao encontrar desenvolvedor",
        error.message,
      );
    }
  }
}

export { FindDeveloperByUserService };
