import {Request, Response} from "express";
import {CreateBlogI, ServerResponse} from "../interfaces";
import {uploadBlogCoverImgFile} from "../../db/photoUpload";
import {createBlogExec} from "../../db/dbBlogQueries";

export const createBlog = async (
	req: Request<{}, {}, CreateBlogI>,
	res: Response<ServerResponse<null>>
) => {
	const {author_id, author_name, title, description} = req.body;
    // console.log(description)

	try {
		if (req.file) {
			const blogCoverImgUrl = await uploadBlogCoverImgFile(req.file);

			const result = await createBlogExec({
				author_id,
				author_name,
				title,
				description,
				blogCoverImgUrl,
			});

            // console.log(result)

			res.json({
				status: 200,
				message: "Successfully created blog",
			});
		}
	} catch (error) {
        console.log(error)
        res.json({
            status: 400,
            message: "Failed creating blog"
        })
    }
};

export const getLatestBlogs = async (req: Request, res: Response) => {
	res.json({
		message: "latest",
	});
};
export const getTrendingBlogs = async (req: Request, res: Response) => {
	res.json({
		message: "trendings",
	});
};
