"use client";

import axios from "axios";

export default function Signin() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border p-6 rounded-lg shadow-lg bg-white">
        <input
          type="text"
          placeholder="Username"
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border rounded w-full"
        />
        <button
          onClick={() => {
            axios.post("http://localhost:3000/api/v1/signin");
          }}
          className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-700"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}