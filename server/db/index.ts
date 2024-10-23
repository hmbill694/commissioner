import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL_NOT_PROVIDED_IN_ENVIRONMENT")
}

const conn = globalForDb.conn ?? postgres(process.env.DATABASE_URL);
if (process.env.NODE_ENV !== "production") globalForDb.conn = conn;

export const db = drizzle(conn, { schema });