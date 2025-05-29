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

	// console.log(description);

	const result: QueryResult<{id: string}> = await pool.query(
		`
         INSERT INTO blogs (title, description, author_id, author_name, blog_image_url)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id;`,
		[title, description, author_id, author_name, blogCoverImgUrl]
	);

	return result;
};

const getIndividualBlogExec = async (blogId: string) => {
	try {
		const result = await pool.query(
			`WITH selected_blog AS (
			SELECT * FROM blogs WHERE id = $1
			),
			top_comments AS (
			SELECT * FROM comments
			WHERE blog_id = $1
			ORDER BY created_at DESC
			LIMIT 5
			),
			comment_replies AS (
			SELECT * FROM replies
			WHERE comment_id IN (SELECT id FROM top_comments)
			)
			SELECT 
			sb.id,
			sb.author_id,
			sb.author_name,
			sb.title,
			sb.blog_image_url,
			sb.description,
			sb.created_at,
			sb.updated_at,
			sb.upvotes,
			sb.downvotes,
			json_agg(
				json_build_object(
				'id', c.id,
				'comment', c.comment,
				'created_at', c.created_at,
				'user', json_build_object(
					'id', u.id,
					'name', u.username,
					'image', u.user_img_src
				),
				'replies', (
					SELECT json_agg(
					json_build_object(
						'id', r.id,
						'reply_message', r.reply_message,
						'created_at', r.created_at,
						'replier', json_build_object(
						'id', ru.id,
						'name', ru.username,
						'image', ru.user_img_src
						)
					)
					)
					FROM comment_replies r
					JOIN users ru ON ru.id = r.replier_id
					WHERE r.comment_id = c.id
				)
				)
			) AS comments
			FROM selected_blog sb
			LEFT JOIN top_comments c ON sb.id = c.blog_id
			LEFT JOIN users u ON u.id = c.user_id
			GROUP BY 
			sb.id, sb.author_id, sb.author_name, sb.title, sb.blog_image_url,
			sb.description, sb.created_at, sb.updated_at, sb.upvotes, sb.downvotes;
`,
			[blogId]
		);

		const blogData = result.rows[0];
		return blogData;
	} catch (error) {
		throw error;
	}
};

const createCommentExec = async (
	commenterId: string,
	blogId: string,
	comment: string
) => {
	try {
		const result: QueryResult<{id: string}> = await pool.query(`
			INSERT INTO comments (blog_id, user_id, comment)
			VALUES ($1, $2, $3)
			RETURNING *;`,
		[blogId, commenterId, comment]
		);

		// console.log(result)

		const commentId = result.rows[0].id;
		// console.log(commentId);

		return commentId;
	} catch (error) {
		console.log(error)
		throw error;
	}
};

export {createBlogExec, getIndividualBlogExec, createCommentExec};
