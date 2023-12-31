import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export class Supabase {
  private host: string;
  private dbName: string;
  private port: string
  private username: string
  private password:string

  constructor(host : string , dbName : string, port: string , username:string ,password:string) {
    this.host = host
    this.dbName = dbName
    this.port = port
    this.username = username
    this.password = password
  }

  initPostgres(): PostgresJsDatabase {
    const password = encodeURIComponent(this.password);
    const client = postgres(`postgresql://${this.username}:${password}@${this.host}:${this.port}/${this.dbName}`, { prepare: false })
    return drizzle(client);
  }
}
