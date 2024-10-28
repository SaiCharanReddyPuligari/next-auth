"use client"
import axios from "axios";
import Link from "next/link";
import React, {useEffect, useState} from "react";

export default function VerifyEmailPage() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async()=>{
        try {
           await axios.post('/api/users/verifyemail',{token});
           setVerified(true);
        } catch (error:any) {
            setError(true);
            console.log(error.response.data);
            
        }
    }

    useEffect(()=>{
         const urlToken = window.location.search.split("=")[1];
         setToken(urlToken || "");
    },[])

    useEffect(()=>{
        if(token.length > 0){
            verifyUserEmail();
        }
    },[token]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full flex flex-col items-center space-y-6">
        <h1 className="text-3xl font-semibold text-gray-800">Verify Email</h1>

        <h2 className="text-sm p-2 bg-orange-200 text-orange-800 rounded-md inline-block text-center font-medium">
          {token ? `Token: ${token}` : "No Token"}
        </h2>

        {/* Verified Section */}
        {verified && (
          <div className="text-center space-y-8 p-4 border border-green-200 rounded-md bg-green-100">
            <h2 className="text-xl font-semibold text-green-600">Email Verified</h2>
            <Link href="/login" className="text-white rounded underline p-2 bg-black">
              Login
            </Link>
          </div>
        )}

        {/* Error Section */}
        {error && (
          <div className="text-center space-y-4 p-4 border border-red-200 rounded-md bg-red-50">
            <h2 className="text-xl font-semibold text-red-600">Error</h2>
          </div>
        )}
      </div>
    </div>
    )
}
