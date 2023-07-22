export interface ICredentials {
    name?: string;
    password?: string;
}

export interface IAuth {
    token: String;
    user: {
        name: string;
        email: string;
        token: string;
    };
}