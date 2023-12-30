import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import type { UserModel } from "../model/users";
import { usersEntity } from "../entities/users";

export class UserService {
  private db: PostgresJsDatabase;
  constructor(db: PostgresJsDatabase) {
    this.db = db;
  }

  async get(): Promise<UserModel[]> {
    const _users = await this.db.select().from(usersEntity);
    var users: UserModel[] = new Array(_users.length);
    for (var u of _users) {
      let user: UserModel = {
        ID: u.id,
        Firstname: u.firstName,
        Lastname: u.lastName,
      };
      users.push(user);
    }
    return users;
  }
}
