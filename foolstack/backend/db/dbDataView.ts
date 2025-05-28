import { Database } from "./db.config";

const pool = Database.getInstance().dbConnection;

export const viewAllDataFromDb = async () => {
	try {
		const users = await pool.query(`SELECT * FROM users`);
		const blogs = await pool.query(`SELECT * FROM blogs`);
		const comments = await pool.query(`SELECT * FROM comments`);
		const replies = await pool.query(`SELECT * FROM replies`);
		const blogVotes = await pool.query(`SELECT * FROM blog_votes`);
		const userLinks = await pool.query(`SELECT * FROM user_links`);
		const followers = await pool.query(`SELECT * FROM followers`);

		console.log("📋 Users:", users.rows);
		console.log("📝 Blogs:", blogs.rows);
		console.log("💬 Comments:", comments.rows);
		console.log("↩️ Replies:", replies.rows);
		console.log("👍 Blog Votes:", blogVotes.rows);
		console.log("🔗 User Links:", userLinks.rows);
		console.log("👥 Followers:", followers.rows);
	} catch (err) {
		console.error("Error viewing data:", err);
	}
};
