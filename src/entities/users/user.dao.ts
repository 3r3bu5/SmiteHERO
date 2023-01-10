import { createUserInterface, User } from "../../../shared/user";
import { UserDocument } from "./user.model";

export interface userDAO {
  signup(email: string): Promise<User>;
  signin(email: string): Promise<User | undefined>;
  auth(user: createUserInterface): Promise<UserDocument>;
  getUserById(id: string): Promise<UserDocument | undefined>;
}
