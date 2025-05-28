import { Pool } from "pg";

// Singleton Implementation
export class Database {
    private static instance: Database;
    private dbPool: Pool;

    // private constructor makes instance of class from outside impossible
    private constructor(){
        this.dbPool = new Pool({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            database: process.env.DB_NAME || "postgres"
        })  
        console.log("Db Pool Created")
    }

    public static getInstance = (): Database =>{
        if (!Database.instance){
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public get dbConnection() : Pool {
        return this.dbPool;
    }
}