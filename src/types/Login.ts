export interface Login{
    id: number;
    email: string;
    password: string;
    access_token: string;
    image: string |null;
    user: User;

}
export interface User{
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    image: string |null;

}