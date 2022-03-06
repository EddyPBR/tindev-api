import dotenv from "dotenv";
import type { AppConfig } from "@@types/configs/AppConfig";

dotenv.config({
  path: process.env.NODE_ENV
    ? `.env.${process.env.NODE_ENV}`
    : ".env.development",
});

const appConfig = {
  PREFIX: process.env.PREFIX,
  PORT: Number(process.env.PORT),
  HOSTNAME: process.env.HOSTNAME,
} as AppConfig;

export { appConfig };
