import { githubApi } from "@libs/githubApi";
import { AppException } from "@exceptions/AppException";
import type { GithubUser } from "@@types/requests/GithubUser";

const getGithubUserRequest = async (username: string) => {
  try {
    return await githubApi.get<GithubUser>(`/users/${username}`);
  } catch (error: any) {
    throw new AppException(
      400,
      "falha ao buscar desenvolvedor no Github",
      error.message,
    );
  }
};

export { getGithubUserRequest };
