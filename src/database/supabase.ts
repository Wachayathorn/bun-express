import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export class Supabase {
  private connectionString: string;

  constructor(connectionString: string) {
      this.connectionString = connectionString;
  }

  initPostgres(): PostgresJsDatabase {
    const client = postgres(this.connectionString, { prepare: false });
    return drizzle(client);
  }
}
