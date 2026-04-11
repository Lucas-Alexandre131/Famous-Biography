import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

export const sequelize = new Sequelize(process.env.DATABASE || '', process.env.USER || '', process.env.DB_PASSWORD || '', {
  host: 'localhost', // database host (for now, using localhost)
  dialect: 'mysql',
});