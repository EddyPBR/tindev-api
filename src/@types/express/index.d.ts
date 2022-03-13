import type { Developer, Dislike, Like } from "@prisma/client";

export declare global {
  namespace Express {
    interface Request {
      developer: Developer & {
        likes: Like[];
        dislikes: Dislike[];
      };
    }
  }
}
