import { env } from "@/config/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  schema: ["./src/database/schemas/user.ts"],
  out: "./src/database/schemas/migrations",
});
