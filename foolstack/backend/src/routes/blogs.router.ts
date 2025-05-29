import {Router} from "express";
import {
	createBlog,
	createComment,
	getIndividualBlog,
	getLatestBlogs,
	getTrendingBlogs,
} from "../controllers/blogsController.controller";
import upload from "../../middleware/upload";

const router = Router();

/**
 * @current_route   /blogs
 */

router.post("/", upload.single("blog_cover_img") ,createBlog);
router.get("/", getLatestBlogs);
router.get("/trending", getTrendingBlogs);
router.get('/:blogId', getIndividualBlog)
router.post('/:blogId/comment', createComment)

export default router;
