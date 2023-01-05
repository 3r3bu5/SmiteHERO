import { User } from "./user";

export interface userDAO {
  signup(email: string): Promise<User>;
  signin(email: string): Promise<User | undefined>;
}
