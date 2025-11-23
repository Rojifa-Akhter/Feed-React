import axios from "axios";
import type { Post } from "../types/Post"; 
import type { Login } from "../types/Login"; 
import type { Register } from "../types/Register"; 

const App_URL = "http://127.0.0.1:8000/api"; // Base URL for your backend

// Fetching posts (GET request)
export const PostService = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>(`${App_URL}/feeds`); // GET request to fetch posts
    return response.data; // Return the post data
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

// Login user (POST request)
export const LoginUser = async (email: string, password: string): Promise<Login> => {
  try {
    const response = await axios.post<Login>(`${App_URL}/login`, { email, password }); // POST request for login
    return response.data; // Return the login response (e.g., token or user data)
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// Register user (POST request)
export const RegisterUser = async (name: string, email: string, password: string): Promise<Register> => {
  try {
    const response = await axios.post<Register>(`${App_URL}/register`, { name, email, password }); // POST request for register
    return response.data; // Return the register response (e.g., success message or user data)
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
