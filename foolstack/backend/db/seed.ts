// import { QueryResult } from "pg";
// import { Database } from "./db.config";

// // gettin db pool
// const pool = Database.getInstance().dbConnection;

// export const seedingDatabase = async () => {
// 	try {
// 		// Insert users
// 		const usersResult: QueryResult<{ id: string; username: string }> =
// 			await pool.query(`
// 				INSERT INTO users (username, email, user_rating)
// 				VALUES 
// 					('alice', 'alice@example.com', 4),
// 					('bob', 'bob@example.com', 3),
// 					('charlie', 'charlie@example.com', 5)
// 				RETURNING id, username;
// 			`);

// 		const userMap = Object.fromEntries(
// 			usersResult.rows.map((row) => [row.username, row.id])
// 		);

// 		// Insert user links
// 		await pool.query(`
// 			INSERT INTO user_links (user_id, platform, url)
// 			VALUES 
// 				('${userMap.alice}', 'Facebook', 'https://fb.com/alice'),
// 				('${userMap.bob}', 'Github', 'https://github.com/bob');
// 		`);

// 		// Insert blogs
// 		const blogResult: QueryResult<{ id: string }> = await pool.query(`
// 			INSERT INTO blogs (author_id, author_name, title, blog_image_url, description, upvotes, downvotes)
// 			VALUES 
// 				('${userMap.alice}', 'alice', 'Alice Blog 1', 'https://dd', 'This is Alice’s first blog', 3, 1),
// 				('${userMap.bob}', 'bob', 'Bob Blog', 'https://aa', 'This is Bob’s blog', 5, 2)
// 			RETURNING id;
// 		`);

// 		const blogId1 = blogResult.rows[0].id;

// 		// Insert followers
// 		await pool.query(`
// 			INSERT INTO followers (user_id, follower_id)
// 			VALUES 
// 				('${userMap.alice}', '${userMap.bob}'),
// 				('${userMap.alice}', '${userMap.charlie}');
// 		`);

// 		// Insert comments
// 		const commentResult: QueryResult<{ id: string }> = await pool.query(`
// 			INSERT INTO comments (blog_id, user_id, comment)
// 			VALUES 
// 				('${blogId1}', '${userMap.bob}', 'Great blog Alice!'),
// 				('${blogId1}', '${userMap.charlie}', 'Thanks for the insights.')
// 			RETURNING id;
// 		`);

// 		const [comment1, comment2] = commentResult.rows;

// 		// Insert replies (no replier_name)
// 		await pool.query(`
// 			INSERT INTO replies (comment_id, replier_id, reply_message)
// 			VALUES 
// 				('${comment1.id}', '${userMap.alice}', 'Thanks Bob!'),
// 				('${comment2.id}', '${userMap.alice}', 'Glad it helped Charlie.');
// 		`);

// 		console.log("✅ Database seeded successfully.");
// 	} catch (error) {
// 		console.error("❌ Error seeding database:", error);
// 	}
// };



import { QueryResult } from "pg";
import { Database } from "./db.config";

// gettin db pool
const pool = Database.getInstance().dbConnection;

export const seedingDatabase = async () => {
	try {
		// Insert users
		const usersResult: QueryResult<{ id: string; username: string }> =
			await pool.query(`
				INSERT INTO users (username, email, user_rating)
				VALUES 
					('alice', 'alice@example.com', 4),
					('bob', 'bob@example.com', 3),
					('charlie', 'charlie@example.com', 5)
				ON CONFLICT (email) DO NOTHING
				RETURNING id, username;
			`);

		// If users already exist, fetch them manually
		let userMap: Record<string, string> = {};
		if (usersResult.rows.length === 0) {
			const allUsers = await pool.query(`SELECT id, username FROM users`);
			userMap = Object.fromEntries(allUsers.rows.map(row => [row.username, row.id]));
		} else {
			userMap = Object.fromEntries(usersResult.rows.map(row => [row.username, row.id]));
		}

		// Insert user links (user_id + platform is unique)
		await pool.query(`
			INSERT INTO user_links (user_id, platform, url)
			VALUES 
				('${userMap.alice}', 'Facebook', 'https://fb.com/alice'),
				('${userMap.bob}', 'Github', 'https://github.com/bob')
			ON CONFLICT (user_id, platform) DO NOTHING;
		`);

		// Insert blogs (author_id + title unique constraint recommended to prevent duplicates)
		const blogResult: QueryResult<{ id: string }> = await pool.query(`
			INSERT INTO blogs (author_id, author_name, title, blog_image_url, description, upvotes, downvotes)
			VALUES 
				('${userMap.alice}', 'alice', 'Alice Blog 1', 'https://dd', 'This is Alice’s first blog', 3, 1),
				('${userMap.bob}', 'bob', 'Bob Blog', 'https://aa', 'This is Bob’s blog', 5, 2)
			ON CONFLICT DO NOTHING
			RETURNING id;
		`);

		const blogId1 = blogResult.rows[0]?.id || (
			await pool.query(`SELECT id FROM blogs WHERE title = 'Alice Blog 1'`)
		).rows[0].id;

		// Insert followers
		await pool.query(`
			INSERT INTO followers (user_id, follower_id)
			VALUES 
				('${userMap.alice}', '${userMap.bob}'),
				('${userMap.alice}', '${userMap.charlie}')
			ON CONFLICT DO NOTHING;
		`);

		// Insert comments
		const commentResult: QueryResult<{ id: string }> = await pool.query(`
			INSERT INTO comments (blog_id, user_id, comment)
			VALUES 
				('${blogId1}', '${userMap.bob}', 'Great blog Alice!'),
				('${blogId1}', '${userMap.charlie}', 'Thanks for the insights.')
			ON CONFLICT DO NOTHING
			RETURNING id;
		`);

		const [comment1, comment2] = commentResult.rows.length
			? commentResult.rows
			: (
					await pool.query(`
						SELECT id FROM comments WHERE blog_id = '${blogId1}' ORDER BY created_at LIMIT 2
					`)
			  ).rows;

		// Insert replies (no conflict constraint, so check manually or ignore duplicates)
		await pool.query(`
			INSERT INTO replies (comment_id, replier_id, reply_message)
			VALUES 
				('${comment1.id}', '${userMap.alice}', 'Thanks Bob!'),
				('${comment2.id}', '${userMap.alice}', 'Glad it helped Charlie.');
		`);

		console.log("✅ Database seeded successfully.");
	} catch (error) {
		console.error("❌ Error seeding database:", error);
	}
};
