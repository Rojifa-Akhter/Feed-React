// src/auth/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from "../assets/images/login.png"; 
import shadowImage1 from "../assets/images/dark_shape2.svg"; 
import shadowImage2 from "../assets/images/shape1.png";
import logo from "../assets/images/logo.svg";
import { FcGoogle } from "react-icons/fc";
import "../styles.css"; 

const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      console.log('Logged in:', { email, password });
      navigate('/feed');
    } catch (err) {
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-full h-221 bg-gray-100 flex items-center justify-center">
        <div className="absolute top-[-60px] left-0 w-1/3">
          <img src={shadowImage2} alt="Shadow Image 2" className="w-40 h-120" />
        </div>
        
        <div className="absolute top-[160px] left-30">
          <img src={login} alt="Login Image" className="w-140 h-130" />
        </div>
        
        <div className="absolute top-[-120px] right-5">
          <img src={shadowImage1} alt="Shadow Image 1" className="w-125 h-125" />
        </div>
        <div className="w-95 bg-white h-175 p-8 flex flex-col  absolute  right-30 bottom-0 top-25 rounded-lg z-50">
            <div className="max-w-sm w-full mx-auto">
            <div className="text-center mb-6">
                <img src={logo} alt="Logo" className="mx-auto h-7 mb-4" />
                <p className="text-md opacity-70">Welcome back</p>
                <h4 className="text-2xl font-semibold mb-10">Login to your account</h4>
            </div>

            <button className="w-full py-3 mb-6 flex justify-center items-center rounded-md border-1 border-gray-200">
                <FcGoogle className='w-5 h-5'/>
                <span className='pl-2 font-semibold text-md opacity-80'>Or sign-in with Google</span>
            </button>


            <div className="text-center mb-6">
            <span className="mx-2">-</span> Or <span className="mx-2">-</span>
            </div>

            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label className="block text-md font-semibold mb-2 text-gray-500">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full p-3 border border-gray-100 rounded-md 
                        focus:outline-none focus:ring-0 focus:border-gray-300"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    </div>

                    <div className="mb-4">
                    <label className="block text-md text-gray-500 font-semibold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full p-3 border border-gray-100 rounded-md
                        focus:outline-none focus:ring-0 focus:border-gray-300"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </div>


                <div className="flex items-center mb-4">
                <input type="radio" id="remember" className="mr-2 accent-blue-600" />
                <label htmlFor="remember" className="text-sm">Remember me</label>
                <a href="" className='text-blue-400 text-sm pl-25'>Forgot password</a>
                </div>

                {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

                <button type="submit" className="w-full bg-blue-400 text-white font-semibold py-3 rounded-md mt-5">
                Login Now
                </button>
            </form>

            <div className="mt-13 text-center mb-4">
                <p className="text-sm text-gray-500">
                Dont have an account?{' '}
                <a href="/register" className="text-blue-400">Create New Account</a>
                </p>
            </div>
            </div>
        </div>

        <div className="absolute top-130 bottom-10 right-45">
          <img src={shadowImage1} alt="Shadow Image 1" className="w-100 h-90" />
        </div>
      </div>

      
    </div>
  );
};

export default Login;
