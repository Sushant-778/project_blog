import { config } from "dotenv";
config()

// db class in singleton pattern
import {Database} from "./db.config";

// we can also do stg like
// import * as createTableQueries from "./dbTablesQueries.ts"
// and use as
// for query in Object.values(createTableQueries) and await pool.query(query)

import {
	createBlogTableQuery,
	createBlogVoteTableQuery,
	createCommentsTableQuery,
	createFollowersTableQuery,
	createRepliesTableQuery,
	createUserLinksTableQuery,
	createUserTableQuery,
} from "./dbTablesQueries";

// config variable
const dbInstance = Database.getInstance();
const pool = dbInstance.dbConnection;

export const initDatabase = async () => {
	const dbName = process.env.DB_NAME;
	const tableQueries = [
		createUserTableQuery,
		createUserLinksTableQuery,
		createFollowersTableQuery,
		createBlogTableQuery,
		createBlogVoteTableQuery,
		createCommentsTableQuery,
		createRepliesTableQuery
	];

	try {
		// pg_database vaneko PostgreSQL system table (existing db check garna)
		const result = await pool.query(
			`SELECT 1 FROM pg_database WHERE datname = $1`,
			[dbName]
		);

		console.log(result)


		if (result.rowCount === 0) {
			await pool.query(`CREATE DATABASE ${dbName}`);
			console.log(`Database '${dbName}' created.`);
		} else {
			console.log(`Database '${dbName}' already exists.`);
		}
	} catch (error) {
		// process.exit(1);
	}

	try {
		for (const createTableQuery of tableQueries) {
			await pool.query(createTableQuery);
		}
		console.log("Tables are created which didn't exist");

	} catch (error) {
		console.error("Error creating tables:", error);
	}

	// seeding is done directly on index.ts
	// try {
	// 	await seedingDatabase();
	// } catch (error) {
	// 	console.log(error)
	// }
};