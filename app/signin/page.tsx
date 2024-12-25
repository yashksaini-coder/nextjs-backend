"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

export default function Signin() {
  const router = useRouter();
  const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const username = (form.elements.namedItem('username') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    try {
      await axios.post("http://localhost:3000/api/v1/signin", {
        username,
        password
      });
      router.push('/todos');
    } catch (error) {
      toast.error('Signin failed');
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border p-6 rounded-lg shadow-lg bg-white">
        <form onSubmit={handleSignin}>
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="mb-4 p-2 border rounded w-full text-black"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="mb-4 p-2 border rounded w-full text-black"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/signup" className="text-blue-500 hover:text-blue-700">
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}