export interface User {
  id: string;
  username: string;
  email: string;
  steamId: string;
  inGameUsername: string;
  karma: number;
  googleId: string;
  active: true;
  createdAt: string;
  updatedAt: string;
}

export interface createUserInterface {
  googleId: string;
  name: string;
  email: string | undefined;
  username: string | undefined;
}
