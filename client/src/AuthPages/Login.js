import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";
import AuthFooter from "./AuthFooter";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [registered, setRegistered] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      alert(response.data.message);
      setRegistered(true);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setValidationErrors(error.response.data);
        console.log("error.response.data is: ", error.response.data);
      }
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e);
  };

  // if (registered) {
  //   return <Navigate to="/" />;
  // }
  return (
    <div>
      <div className="flex flex-col items-center pt-8 pb-10 justify-center bg-red-100">
        <div className="max-w-lg w-full p-10 bg-white rounded-xl shadow-lg">
          <div className="flex flex-col items-center">
            <img src="/images/Header/logo.png" className="w-auto h-12" alt="" />
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
              Log in to your CNN account
            </h2>
            <div className="text-sm mt-2">
              <Link
                to="/register"
                className="font-medium text-black hover:text-gray-700">
                Don't have an account?{" "}
                <span className="underline">Sign Up</span>
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
                  value={email}
                  onChange={handleEmailChange}
                  onKeyDown={() => {
                    setValidationErrors(false);
                  }}
                />
              </div>
              <div className="mb-4 relative">
                {/* <label htmlFor="email-address sr-only"> Email Address</label> */}
                <input
                  type={showPassword ? "text" : "password"}
                  id="Password"
                  name="Password"
                  autoComplete="password"
                  required
                  className="text-gray-900 border border-gray-800 rounded block w-full p-3 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={() => {
                    setValidationErrors(false);
                  }}
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer z-20"
                  onClick={togglePasswordVisibility}>
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </span>
              </div>
            </div>

            {validationErrors && (
              <div className="text-red-600">
                {Object.keys(validationErrors).map((key) => {
                  if (typeof validationErrors[key] === "object") {
                    return Object.values(validationErrors[key]).map((error) => (
                      <p className="mb-2 text-sm" key={error}>
                        {error}
                      </p>
                    ));
                  }
                  return (
                    <p className="mb-2 text-sm" key={key}>
                      {validationErrors[key]}
                    </p>
                  );
                })}
              </div>
            )}
            <div className=" mb-3">
              {" "}
              <Link to="/forgot-password">Forgot Password</Link>
            </div>

            <div>
              <button
                type="submit"
                className=" w-full flex justify-center py-3 px-4 border border-transparent text-md font-bold rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none">
                Sign In
              </button>
            </div>
            {/* <div className="flex items-center justify-between mt-2 mb-2">
              <div className="flex text-sm items-center">
                <p className="text-xs text-black-600 hover:text-black-500">
                  To opt-out at any time, see options available here.
                </p>
              </div>
            </div> */}
          </form>
        </div>
      </div>
      <AuthFooter />
    </div>
  );
}

export default Login;
