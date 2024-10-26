"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function SignupPage(){
    const [user, setUser] = React.useState({
        email:"",
        password:"",
        username:"",
    })

    const onSignup = async ()=>{

    }
    return (
        <div className=" bg-green-400 flex flex-col items-center justify-center min-h-screen py-2 space-y-3">
            <h1>Signup</h1>
            <hr />
            
            <label htmlFor="username" className="py-3">Username</label>
            <input 
            className="p-4 border-gray-500 rounded-lg focus:outline-none focus:border-gray-600 hover:bg-black hover:text-white"
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
            >Signup Here</button>
            <Link href="/login">Visit login Page</Link>
        </div>
    )
}