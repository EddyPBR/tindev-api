import { Router } from "express";

import { HelloWorldController } from "@controllers/HelloWorldController";

const helloWorld = new HelloWorldController();

const router = Router();

router.get("/", helloWorld.index);

export { router };
