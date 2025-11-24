export interface User{
    id: number;
    first_name: string;
    email: string;

}
export interface Post{
    id: number;
    title: string;
    image: string;
    visibility: string;
    user: User;

}