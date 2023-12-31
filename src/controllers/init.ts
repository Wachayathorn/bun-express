import { postgresDatabaseName, postgresHost, postgresPassword, postgresPort, postgresUser } from "../config/env";
import { Supabase } from "../database/supabase";
import { UserService } from "../services/users";

// Connection postgres
const supabase = new Supabase(postgresHost , postgresDatabaseName , postgresPort , postgresUser , postgresPassword);
const postgresDB = supabase.initPostgres();

// New service
export const userService = new UserService(postgresDB);
