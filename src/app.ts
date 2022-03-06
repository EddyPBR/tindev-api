import express, { json } from "express";
import { router } from "@routes/router";
import cors from "cors";
import { corsConfig } from "@configs/corsConfig";

const app = express();

app.use(cors(corsConfig));

app.use(json());

app.use(router);

export { app };
