import { prismaClient } from "@databases/prisma";
import type { FindDeveloperByIdParams } from "@@types/services/FindDeveloperByIdParams";
import { AppException } from "@exceptions/AppException";

class FindDeveloperByIdService {
  async execute({ developerId }: FindDeveloperByIdParams) {
    try {
      const developer = await prismaClient.developer.findUnique({
        where: {
          id: developerId,
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

export { FindDeveloperByIdService };
