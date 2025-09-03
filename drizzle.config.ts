import { defineConfig } from "drizzle-kit";

// Use a default database URL for development if none provided
const databaseUrl = process.env.DATABASE_URL || "postgresql://localhost:5432/tempdb";

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});
