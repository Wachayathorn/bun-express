import dotenv from 'dotenv';
dotenv.config();

export const postgresConnectionString = process.env.DATABASE_URL;
