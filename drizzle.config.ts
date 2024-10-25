import { type Config } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
    throw new Error("Missing dabase environment variable")
}

export default {
  schema: "./server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    "url": process.env.DATABASE_URL
  }
} satisfies Config;