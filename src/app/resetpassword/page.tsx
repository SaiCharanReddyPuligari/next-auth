"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const restPasswordHandler = async () => {
    try {
      if (token.length > 0) {
        setLoading(true);
        await axios.put("/api/users/resetpassword", {
          token,
          newPassword,
          confirmNewPassword,
        });
        console.log("Password changed successfully!");
        router.push("/login");
      }
    } catch (error) {
        console.log(error);
        
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-gray-200">
  <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
    {loading ? (
      "Processing"
    ) : (
      <>
        <h1 className="text-3xl font-bold mb-4">Reset Password</h1>
        <hr className="mb-4" />
        <form onSubmit={restPasswordHandler} className="flex flex-col w-full">
          <label htmlFor="password" className="mb-2 text-lg">
            New Password
          </label>
          <input
            className="w-full p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            type="password"
            id="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
          />
          <label htmlFor="confirmPassword" className="mb-2 text-lg">
            Confirm Password
          </label>
          <input
            className="w-full p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            type="password"
            id="confirmPassword"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          <button className="w-full p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none">
            Reset Password
          </button>
        </form>
      </>
    )}
  </div>
</div>

  );
};

export default ResetPasswordPage;