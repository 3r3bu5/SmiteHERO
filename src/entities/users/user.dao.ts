import { User } from "../../../shared/user";

export interface userDAO {
  signup(email: string): Promise<User>;
  signin(email: string): Promise<User | undefined>;
}
