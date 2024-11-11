"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const forgotPasswordHandler = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/forgotpassword", { email });
      console.log("Password reset link has been sent to your email!");
      router.push("/login");
    } catch (error) {
        console.log(error);
        
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-gray-200">
  <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
    {loading ? (
      "Processing"
    ) : (
      <>
        <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
        <hr className="mb-4" />
        <form
          onSubmit={forgotPasswordHandler}
          className="flex flex-col w-full"
        >
          <label htmlFor="email" className="mb-2 text-lg">
            Email
          </label>
          <input
            className="w-full p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <button className="w-full p-2 bg-black text-white rounded-lg mb-4 hover:bg-orange-600 focus:outline-none">
            Send Email
          </button>
        </form>
        <p className="text-center">
          Back to{" "}
          <Link href="/login" className="underline cursor-pointer text-blue-500">
            Login
          </Link>
        </p>
      </>
    )}
  </div>
</div>

  );
};

export default ForgotPasswordPage;