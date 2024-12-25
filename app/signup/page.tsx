"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

export default function Signup() {
  const router = useRouter();
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const username = (form.elements.namedItem('username') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    try {
      await axios.post("http://localhost:3000/api/v1/signup", {
        username,
        password
      });
      router.push('/signin');
    } catch (error) {
      toast.error('Signup failed');
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border p-6 rounded-lg shadow-lg bg-white">
        <form onSubmit={handleSignup}>
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
            Sign up
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/signin" className="text-blue-500 hover:text-blue-700">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}