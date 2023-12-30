import { postgresConnectionString } from "../config/env";
import { Supabase } from "../database/supabase";
import { UserService } from "../services/users";

// Connection postgres
const supabase = new Supabase(postgresConnectionString !== undefined ? postgresConnectionString : '');
const postgresDB = supabase.initPostgres();

// New service
export const userService = new UserService(postgresDB);
