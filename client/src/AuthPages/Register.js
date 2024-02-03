import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState("");
  const handleSubmit = (e) => {
    console.log(e);
  };
  const handleEmailChange = (e) => {
    console.log(e);
  };
  return (
    <div className="flex items-start pt-8 pb-10 justify-center bg-red-100">
      <div className="max-w-lg w-full p-10 bg-white rounded-xl shadow-lg">
        <div className="flex flex-col items-center">
          <img src="/images/Header/logo.png" className="w-auto h-12" alt="" />
          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
            Create your CNN account
          </h2>
          <div className="text-sm mt-2">
            <Link
              to="/login"
              className="font-medium text-black hover:text-gray-700">
              Already have an account? <span>Sign In</span>
            </Link>
          </div>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              {/* <label htmlFor="email-address sr-only"> Email Address</label> */}
              <input
                type="email"
                id="email-address"
                name="email"
                autoComplete="email"
                required
                className="text-gray-900 border border-gray-800 rounded block w-full p-3 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email Address"
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-4">
              {/* <label htmlFor="email-address sr-only"> Email Address</label> */}
              <input
                type="password"
                id="Password"
                name="Password"
                autoComplete="password"
                required
                className="text-gray-900 border border-gray-800 rounded block w-full p-3 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handleEmailChange}
              />
              <span>
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
