import {Router} from "express";
import {
	// createUserController,
	getUserController,
	googleLoginController,
	updateLinksController,
} from "../controllers/authController.controller";

const router = Router();

router.get("/", getUserController);
// router.post("/", createUserController);
router.put("/", updateLinksController);
router.get("/google", googleLoginController);

export default router;
