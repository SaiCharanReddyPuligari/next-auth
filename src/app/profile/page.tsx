"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage(){
    const router = useRouter();
    const [data, setData] = useState("nothing")
    const logout = async() =>{
        try {
            const response = await axios.get('/api/users/logout');
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
            
        }
    }
    const getUserDetails = async ()=>{
        const res= await axios.get('/api/users/me');
        console.log(res.data);
        setData(res.data.data._id);
        //use UseEffect to load details of the user
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Card Container */}
      <div className="bg-gray-300 rounded-lg shadow-md p-8 max-w-md w-full flex flex-col items-center space-y-6">
        
        {/* Title */}
        <h1 className="text-3xl font-semibold text-black">Profile</h1>
        
        <hr className="w-full border-gray-300" />

        {/* Profile Data */}
        <h2 className="p-3 rounded bg-green-200 text-green-800 font-medium w-full text-center">
          {data === "nothing" ? (
            "Nothing"
          ) : (
            <Link href={`/profile/${data}`}>
              UserId : { data}
            </Link>
          )}
        </h2>

        <hr className="w-full border-gray-300" />

        {/* Action Buttons */}
        <button
          onClick={logout}
          className="bg-black text-white font-bold py-2 px-4 rounded w-full shadow-md hover:bg-gray-700 transition-all"
        >
          Logout
        </button>
        <button
          onClick={getUserDetails}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded w-full shadow-md hover:bg-green-600 transition-all"
        >
          Get Current User Details
        </button>
      </div>
    </div>
    )
}