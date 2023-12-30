import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const usersEntity = pgTable('users', {
  id: serial('id').primaryKey(),
  firstName: varchar('firstname' , { length: 256 }),
  lastName: varchar('lastname', { length: 256 }),
  createdAt : timestamp('created_at'),
  updatedAt: timestamp('updated_at')
});