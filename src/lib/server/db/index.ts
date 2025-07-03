import { drizzle } from 'drizzle-orm/node-postgres';
import schema from './schema';
import { env } from '$env/dynamic/private';
import { Pool } from 'pg';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

console.log(process.env.DATABASE_URL);

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});
export const db = drizzle({ client: pool, schema });