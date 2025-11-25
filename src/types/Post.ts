export interface User{
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    image: string;

}
export interface Comment {
    id: number;
    user_id: number;
    comment: string;
    parent_id?: number | null;
    created_at: string;
    user: User;
}
export interface Like{
    id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    
}
export interface Post{
    id: number;
    title: string;
    image: string;
    visibility: string;
    created_at : string;
    user: User;
    comments: Comment[];
    likes: Like[];

}