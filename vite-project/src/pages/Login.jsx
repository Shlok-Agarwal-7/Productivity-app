import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiLock } from "react-icons/ci";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-gray-300">
      <form className="flex flex-col  bg-green-50 w-2/5 justify-center items-center rounded-2xl py-5 shadow-2xl hover:shadow-xl">
        <h1 className="text-2xl mb-3 font-bold">Login</h1>
        <div className="bg-green-100 rounded-xl p-2 flex w-2/5 justify-left items-center mb-3">
          <CgProfile className="text-gray-400 mr-1" />
          <input
            className="bg-green-100 outline-none text-sm flex-1"
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="bg-green-100 rounded-xl p-2 flex w-2/5 justify-left items-center mb-3">
          <CiLock className="text-gray-400 mr-1" />
          <input
            className="bg-green-100 outline-none text-sm flex-1"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-green-300 text-gray-800 rounded-2xl hover:bg-gray-100 hover:text-green-300 my-1 w-2/5"
          type="submit"
        >
          Login
        </button>
        <h4>or</h4>
        <Link
          to="/register"
          className="bg-green-300 text-gray-800 rounded-2xl hover:bg-gray-100 hover:text-green-300 my-1 w-2/5  flex items-center justify-center"
        >
          Create a Account
        </Link>
      </form>
    </div>
  );
};

export default Login;
