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
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <h2
            className="p-3 rounded bg-green-500"
            >{data=== 'nothing' ? "Nothing": 
                <Link href={`/profile/${data}`}>
                    {data}
                    </Link>}</h2>
            <hr />
            <button
            onClick={logout}
            className="bg-black mt-4 text-white font-bold py-2 px-4 rounded"
            >Logout</button>
            <button
            onClick={getUserDetails}
            className="bg-green-500 mt-4 text-white font-bold py-2 px-4 rounded"
            >GetCurrentUserDetails</button>
        </div>
    )
}