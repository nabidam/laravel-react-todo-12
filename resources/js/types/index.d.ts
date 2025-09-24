export interface Auth {
    user: User;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    [key: string]: unknown;
}

export interface Todo {
    id: number;
    todo: string;
    done: boolean;
    created_at: string;
}
