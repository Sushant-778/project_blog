import {QueryResult} from "pg";
import {Database} from "./db.config";
import {CreateBlogI, userI} from "../src/interfaces";
// gettin db pool
const pool = Database.getInstance().dbConnection;

const createBlogExec = async (
	blogData: CreateBlogI & {blogCoverImgUrl: string}
) => {
	const {title, description, author_id, author_name, blogCoverImgUrl} =
		blogData;

    console.log(description)

	const result = await pool.query(
		`
         INSERT INTO blogs (title, description, author_id, author_name, blog_image_url)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;`,
		[title, description, author_id, author_name, blogCoverImgUrl]
	);

    return result;
};

export {createBlogExec};
