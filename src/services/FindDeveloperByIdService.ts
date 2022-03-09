import { prismaClient } from "@databases/prisma";
import type { FindDeveloperByIdParams } from "@@types/services/FindDeveloperByIdParams";

class FindDeveloperByIdService {
  async execute({ developerId }: FindDeveloperByIdParams) {
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
  }
}

export { FindDeveloperByIdService };
