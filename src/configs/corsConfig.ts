import dotenv from "dotenv";
import type { CorsConfig } from "@@types/configs/CorsConfig";

dotenv.config({
  path: process.env.NODE_ENV
    ? `.env.${process.env.NODE_ENV}`
    : ".env.development",
});

const corsConfig = {
  origin: process.env.WEB_CLIENT,
  credentials: false,
  methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
} as CorsConfig;

export { corsConfig };
