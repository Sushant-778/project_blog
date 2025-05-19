import { Router } from "express"
import { getLatestBlogs, getTrendingBlogs } from "../controllers/blogsController.controller";

const router = Router();

router.get("/", getLatestBlogs)
router.get("/trending", getTrendingBlogs)




export default router;