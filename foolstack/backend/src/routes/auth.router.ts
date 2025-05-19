import { Router } from "express";
import { createUserController, getUserController, updateLinksController } from "../controllers/authController.controller";

const router = Router()


router.get("/", getUserController)
router.post("/", createUserController)
router.put("/", updateLinksController)


export default router;