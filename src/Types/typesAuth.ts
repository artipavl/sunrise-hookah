export interface ICredentials {
  email: string;
  password: string;
}

export interface ICredentialsSignUp {
  name: string;
  email: string;
  password: string;
}

export interface IAuth {
  token: String;
  user: {
    name: string;
    email: string;
    token: string;
  };
}

export type Admin = {
  email: string;
  name: string;
  admin: string;
  id: string;
};