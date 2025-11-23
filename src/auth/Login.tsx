// src/auth/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import login from "../assets/images/login.png";
import "../styles.css"; // For redirect after login

const Login = () => {
  const [email, setEmail] = useState(""); // Track email input
  const [password, setPassword] = useState(""); // Track password input
  const [error, setError] = useState(""); // Error message on failed login
  const navigate = useNavigate(); // For redirecting after successful login

  // Handle login form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Example: Replace this with actual login logic (API call, validation, etc.)
      console.log('Logged in:', { email, password });
      // Navigate to the feed/dashboard page on successful login
      navigate('/dashboard');
    } catch (err) {
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side: Image */}
      <div className="w-2/3  flex items-center justify-center relative p-4">
        <img src={login} alt="Login Illustration" className="max-w-full h-auto object-cover" />
      </div>

      {/* Right Side: Login Form */}
      <div className="w-1/3 bg-white p-8 flex flex-col justify-center items-center space-y-6">
        <div className="max-w-sm w-full mx-auto">
          {/* Logo */}
          <div className="text-center mb-6">
            <img src="assets/images/logo.svg" alt="Logo" className="mx-auto mb-4" />
            <p className="text-xl font-semibold">Welcome back</p>
            <h4 className="text-2xl font-bold mb-6">Login to your account</h4>
          </div>

          {/* Google Sign-in Button */}
          <button className="w-full bg-blue-500 text-white py-3 mb-6 flex justify-center items-center rounded-md shadow-md hover:bg-blue-600">
            <img src="assets/images/google.svg" alt="Google" className="mr-2" />
            <span>Or sign-in with Google</span>
          </button>

          <div className="text-center mb-6">Or</div>

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center mb-4">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm">Remember me</label>
            </div>

            {/* Error Message */}
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

            {/* Submit Button */}
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md shadow-md hover:bg-blue-700">
              Login Now
            </button>
          </form>

          {/* Create New Account Link */}
          <div className="mt-6 text-center">
            <p className="text-sm">
              Don't have an account?{' '}
              <a href="/register" className="text-blue-600 font-semibold hover:text-blue-700">Create New Account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
