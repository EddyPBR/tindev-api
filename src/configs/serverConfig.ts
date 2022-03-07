import dotenv from "dotenv";
import type { ServerConfig } from "@@types/configs/ServerConfig";

dotenv.config({
  path: process.env.NODE_ENV
    ? `.env.${process.env.NODE_ENV}`
    : ".env.development",
});

const serverConfig = {
  PREFIX: process.env.PREFIX,
  PORT: Number(process.env.PORT),
  HOSTNAME: process.env.HOSTNAME,
} as ServerConfig;

export { serverConfig };
