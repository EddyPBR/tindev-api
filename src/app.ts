import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import { corsConfig } from "@configs/corsConfig";
import { router } from "@routes/router";
import { errorHandler } from "@middlewares/errorHandler";

const app = express();

app.use(cors(corsConfig));

app.use(json());

app.use(router);

app.use(errorHandler);

export { app };
