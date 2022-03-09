import { Router } from "express";
import { AvailableDeveloperController } from "@controllers/AvailableDeveloperController";
import { CreateDeveloperController } from "@controllers/CreateDeveloperController";

const router = Router();

router.get("/developers", new AvailableDeveloperController().handle);
router.post("/developers", new CreateDeveloperController().handle);

export { router };
