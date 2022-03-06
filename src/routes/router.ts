import { Router } from "express";

import { HelloWorldController } from "@controllers/HelloWorldController";
import { ErrorHandlerController } from "@controllers/ErrorHandlerController";

const helloWorld = new HelloWorldController();
const errorController = new ErrorHandlerController();

const router = Router();

router.get("/", helloWorld.index);
router.get("/error", errorController.index);

export { router };
