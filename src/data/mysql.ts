import dotenv from "dotenv";
import mysql2 from "mysql2";

dotenv.config();

export const corsOptions = {
    origin:  process.env.ORIGIN,
    methods: process.env.METHODS,
    allowedHeaders: process.env.ALLOWHEADERS
};

export const db = mysql2.createConnection({
    host:  process.env.MYSQL_HOST,
    user:  process.env.MYSQL_USER,
    password:  process.env.MYSQL_PASSWORD,
    database:  process.env.MYSQL_DATABASE,
}); 