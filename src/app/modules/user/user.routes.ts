import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.post("/", UserController.createUser);
router.get("/", UserController.getAllUser);
router.get("/:id", UserController.getUserById);

export const UserRouter = router