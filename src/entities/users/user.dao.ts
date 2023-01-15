import { createUserInterface, User } from "@ash/shared";

export interface userDAO {
  signup(email: string): Promise<User>;
  signin(email: string): Promise<User | undefined>;
  auth(user: createUserInterface): Promise<User>;
  getUserById(id: string): Promise<User | undefined>;
}
