import dotenv from 'dotenv';
dotenv.config();

export const postgresHost  = process.env.POSTGRES_HOST;
export const postgresDatabaseName  = process.env.POSTGRES_DATABASE_NAME;
export const postgresPort  = process.env.POSTGRES_PORT;
export const postgresUser  = process.env.POSTGRES_USER;
export const postgresPassword  = process.env.POSTGRES_PASSWORD;

