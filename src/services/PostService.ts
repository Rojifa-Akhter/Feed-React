import axios from "axios";
import type { Post } from "../types/Post"; 
import type { Login } from "../types/Login"; 
import type { Register } from "../types/Register"; 

const App_URL = "http://127.0.0.1:8000/api"; 

export const PostService = async (): Promise<Post[]> => {
  try {
    const token = localStorage.getItem('access_token');

    const response = await axios.get<Post[]>(`${App_URL}/feeds`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    return response.data; 
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const LoginUser = async (email: string, password: string): Promise<Login> => {
  try {
    const response = await axios.post<Login>(`${App_URL}/login`, { email, password });
    
    localStorage.setItem('access_token', response.data.access_token);
    
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const RegisterUser = async (firstName: string, lastName: string, email: string, password: string): Promise<Register> => {
  try {
    const response = await axios.post<Register>(`${App_URL}/register`, { first_name: firstName, last_name: lastName, email, password });
    
    localStorage.setItem('access_token', response.data.access_token);
    
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
