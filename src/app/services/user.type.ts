export interface User {
  id?: number;
  realm?: string;
  username?: string;
  email: string;
  emailVerified?: boolean;
  password: string;
}
