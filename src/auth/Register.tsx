// src/auth/Register.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import register from "../assets/images/registration.png";
import shadowImage1 from "../assets/images/dark_shape2.svg";
import shadowImage2 from "../assets/images/shape1.png";
import logo from "../assets/images/logo.svg";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    navigate("/feed");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-full h-270 bg-gray-100 flex items-center justify-center relative">

        <div className="absolute top-[-3px] left-0 w-1/3">
          <img src={shadowImage2} className="w-42 h-130" alt="" />
        </div>

        <div className="absolute top-[300px] left-20">
          <img src={register} className="w-200 h-150" alt="Register Illustration" />
        </div>

        <div className="absolute top-[-120px] right-5">
          <img src={shadowImage1} className="w-125 h-125" alt="" />
        </div>

        <div className="w-95 bg-white h-210 p-8 flex flex-col absolute right-25 top-31 bottom-0 rounded-lg shadow z-50">
          <div className="max-w-sm w-full mx-auto">

            <div className="text-center mb-6">
              <img src={logo} alt="Logo" className="mx-auto h-9 mb-4" />
              <p className="text-md opacity-70">Get Started Now</p>
              <h4 className="text-2xl font-semibold mb-10">Registration</h4>
            </div>

            <button className="w-full py-3 mb-6 flex justify-center items-center rounded-md border border-gray-200">
              <FcGoogle className="w-5 h-5" />
              <span className="pl-2 font-semibold opacity-80">Registration with Google</span>
            </button>

            <div className="text-center mb-6 text-gray-400">
              <span className="mx-2">-</span> Or <span className="mx-2">-</span>
            </div>

            <form onSubmit={handleRegister}>

              <div className="mb-4">
                <label className="block text-md text-gray-500 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-100 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300"
                />
              </div>

              <div className="mb-4">
                <label className="block text-md text-gray-500 font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-100 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300"
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <label className="block text-md text-gray-500 font-semibold mb-2">
                  Repeate Password
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-3 border border-gray-100 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300"
                />
              </div>
              <div className="flex items-center mb-4">
                <input type="radio" id="remember" className="mr-2 accent-blue-600" />
                <label htmlFor="remember" className="text-sm">I agree to terms & conditions</label>
            </div>

              {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-blue-400 text-white font-semibold py-3 rounded-md mt-3"
              >
                Login now
              </button>
            </form>

            {/* Have account? */}
            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <a href="/login" className="text-blue-400">Login Now</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom right shape */}
        <div className="absolute bottom-0 right-0">
          <img src={shadowImage1} className="w-[280] h-130" alt="" />
        </div>

      </div>
    </div>
  );
};

export default Register;
