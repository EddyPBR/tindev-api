import { Router } from "express";
import { AvailableDeveloperController } from "@controllers/AvailableDeveloperController";
import { CreateDeveloperController } from "@controllers/CreateDeveloperController";
import { ensureAuthenticated } from "@middlewares/ensureAuthenticated";

const router = Router();

router.get("/developers", ensureAuthenticated, new AvailableDeveloperController().handle);
router.post("/developers", new CreateDeveloperController().handle);

export { router };
