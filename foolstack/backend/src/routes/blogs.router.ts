import {Router} from "express";
import {
	createBlog,
	getLatestBlogs,
	getTrendingBlogs,
} from "../controllers/blogsController.controller";
import upload from "../../middleware/upload";

const router = Router();

router.post("/", upload.single("blog_cover_img") ,createBlog);
router.get("/", getLatestBlogs);
router.get("/trending", getTrendingBlogs);

export default router;
