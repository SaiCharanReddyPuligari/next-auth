"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage(){
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
            
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log("Signup failed", error.message);
            } else {
                console.log("Signup failed with an unknown error");
            }
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);
    return (
        <div className="flex min-h-screen">
        {/* Left Side (60%) */}
        <div className="w-3/5 bg-green-600 flex items-center justify-center p-8">
          <p className="text-center text-white font-bold text-lg px-10">
          In web development, token-based authentication is a common method for handling user sign-in. When a user logs in, the server verifies their credentials such as username and password and, if valid, generates a token, often in JSON Web Token JWT format. This token is then sent to the users client e.g., browser and stored, usually in local storage or as an HTTP-only cookie.
          </p>
        </div>
  
        {/* Right Side (40%) - Signup Section */}
        <div className="w-2/5 bg-green-500 flex flex-col items-center justify-center py-10 space-y-6">
          <h1 className="text-3xl font-semibold text-gray-800">{loading ? "Processing..." : "Signup"}</h1>
          <hr className="border-gray-300 w-3/4" />
  
          <div className="w-3/4 space-y-6">
            {/* Username Input */}
            <label htmlFor="username" className="block text-gray-700 font-medium">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Enter your username"
              className="w-full p-4 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pastel-blue hover:bg-gray-100"
            />
  
            {/* Email Input */}
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            {/* <p>Works for valid emails only, you can visit <a  className = "hover:underline font-bold" href="https://dropmail.me/en/"> DropMail</a> to get a temporary email</p> */}
            <input
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your email"
              className="w-full p-4 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pastel-blue hover:bg-gray-100"
            />
  
            {/* Password Input */}
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter your password"
              className="w-full p-4 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pastel-blue hover:bg-gray-100"
            />
  
            {/* Signup Button */}
            <button
              onClick={onSignup}
              className="w-full p-4 bg-black rounded-lg bg-pastel-blue text-gray-50 font-semibold hover:bg-pastel-dark-blue focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-opacity-50"
            >
              {buttonDisabled ? "No Signup" : "Signup"}
            </button>
  
            {/* Link to Login */}
            <Link href="/login" className="text-pastel-blue hover:underline block text-center">
              Visit Login Page
            </Link>
          </div>
        </div>
      </div>
    )
}