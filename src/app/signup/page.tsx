"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios, { Axios } from "axios";

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
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
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
        <div className=" bg-green-400 flex flex-col items-center justify-center min-h-screen py-2 space-y-3">
            <h1>{loading ? "Processing": "Signup"}</h1>
            <hr />
            
            <label htmlFor="username" className="py-3">Username</label>
            <input 
            className="p-4 rounded-lg focus:outline-none hover:border-white hover:bg-black hover:text-white"
            id="username"
            type="text"
            value={user.username}
            onChange={(e)=> setUser({...user, username: e.target.value})}
            placeholder="username"
            />
            
           
            <label htmlFor="email" className="py-3">Email</label>
            <input 
            className="p-4 border-gray-500 rounded-lg focus:outline-none focus:border-gray-600 hover:bg-black hover:text-white"
            id="email"
            type="email"
            value={user.email}
            onChange={(e)=> setUser({...user, email: e.target.value})}
            placeholder="email"
            />
           
           
            <label htmlFor="password" className="py-3">Password</label>
            <input 
            className="p-4 border-gray-500 rounded-lg focus:outline-none focus:border-gray-600 hover:bg-black hover:text-white"
            id="password"
            type="password"
            value={user.password}
            onChange={(e)=> setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            className="p-4 rounded-lg focus:outline-none hover:border-gray-600 hover:bg-black hover:text-white"
            onClick={onSignup}
            >{buttonDisabled ? "No Signup": "Signup"}</button>
            <Link href="/login">Visit login Page</Link>
        </div>
    )
}