import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/admin/dashboard");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full px-8 py-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-200 mb-6">
          Login
        </h2>
        <form onSubmit={formSubmitHandler}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-400 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 w-full text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-400 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              required
              type="password"
              id="password"
              className="bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 w-full text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
