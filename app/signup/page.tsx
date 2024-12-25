"use client";

import axios from "axios"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="w-screen h-screen flex justify-center items-center">
        <ToastContainer position="top-center" />
        <div className="border p-6 rounded-lg shadow-lg">
            <input 
                type="text" 
                placeholder="Username" 
                className="mb-4 p-2 border rounded w-full text-black"
                onChange={e => setUsername(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Password" 
                className="mb-4 p-2 border rounded w-full text-black"
                onChange={e => setPassword(e.target.value)}
            />
            <button 
                className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-700"
                onClick={async () => {
                    try {
                        const response = await axios.post("http://localhost:3000/api/v1/signup", {
                            username,
                            password
                        });
                        toast.success("Signed up successfully!");
                    } catch (error: any) {
                        toast.error(error.response?.data?.message || "Something went wrong");
                    }
                }}
            >
                Sign up
            </button>
        </div>
    </div>
}