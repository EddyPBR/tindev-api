import { prismaClient } from "@databases/prisma";
import type { AvailableDeveloperServiceParams } from "@@types/services/AvailableDeveloperServiceParams";

class AvailableDeveloperService {
  async execute({
    developerId,
    likes,
    dislikes,
  }: AvailableDeveloperServiceParams) {
    const developers = await prismaClient.developer.findMany({
      where: {
        NOT: {
          id: developerId,
        },
        likes: {
          every: {
            developerId: {
              notIn: likes,
            },
          },
        },
        dislikes: {
          every: {
            developerId: {
              notIn: dislikes,
            },
          },
        },
      },
      include: {
        likes: true,
        dislikes: true,
      },
    });

    return developers;
  }
}

export { AvailableDeveloperService };
