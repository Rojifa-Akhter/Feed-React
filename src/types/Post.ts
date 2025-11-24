export interface User{
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    image: string;

}
export interface Post{
    id: number;
    title: string;
    image: string;
    visibility: string;
    created_at : string;
    user: User;

}