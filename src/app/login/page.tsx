"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage(){
    const router = useRouter()
    const [user, setUser] = React.useState({
        email:"",
        password:"",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async ()=>{
         try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login Success", response.data);
            router.push("/profile");
            
         } catch (error: unknown) {
            if (error instanceof Error) {
                console.log("Login failed", error.message);
            } else {
                console.log("Login failed with an unknown error");
            }
        }
         finally{
            setLoading(false);
         }
    }
    useEffect(()=>{
         if(user.email.length > 0 && user.password.length >0){
            setButtonDisabled(false);
         }
         else{
            setButtonDisabled(true);
         }
    },[user]);
    return (
      <div className="flex min-h-screen">
      {/* Left Side (60%) */}
      <div className="w-3/5 bg-gray-100 flex items-center justify-center p-8">
        <p className="text-center text-black font-bold text-lg px-10">
        For the login page, I used MongoDB for password authentication, securely storing and verifying user credentials. Additionally, I added a Forgot Password feature in MongoDB, allowing users to reset their passwords if needed. Upon clicking the Forgot Password link, users receive an email to reset their password, enhancing user experience and security. This method ensures login processes are both user-friendly and robust, providing reliable access control.
        </p>
      </div>

      {/* Right Side (40%) - Login Section */}
      <div className="w-2/5 bg-white flex flex-col items-center justify-center py-10 space-y-6">
  <h1 className="text-3xl font-semibold px-4 py-2 bg-[#37ae92] text-black rounded-lg border-2  border-b-4 border-r-4 duration-200 border-black ">{loading ? "Processing..." : "Login"}</h1>
  <hr className="border-gray-300 w-3/4" />

  <div className="w-3/4 space-y-6">
    {/* Email Input */}
    <label htmlFor="email" className="block text-black font-medium">
      Email
    </label>
    <input
      id="email"
      type="email"
      value={user.email}
      onChange={(e) => setUser({ ...user, email: e.target.value })}
      placeholder="Enter your email"
      className="w-full p-4 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pastel-blue hover:bg-gray-100"
    />

    {/* Password Input */}
    <label htmlFor="password" className="block text-black font-medium">
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

    {/* Login Button */}
    <button
      onClick={onLogin}
      className="w-full p-4 rounded-lg bg-pastel-blue text-gray-50 font-semibold bg-black focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-opacity-50"
    >
      {buttonDisabled ? "No Login" : "Login"}
    </button>

    {/* Link to Signup */}
    <Link href="/signup" className="text-pastel-blue hover:underline block text-center">
      New to the website? Visit Signup Page
    </Link>
    <p className="mt-3">
            <Link href="/forgotpassword" className="underline cursor-pointer">
              Forgot Password
            </Link>
          </p>
  </div>
</div>
    </div>
    )
}