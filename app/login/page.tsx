'use client'

import { useEffect, useState } from "react";
import API_ENDPOINTS from "../utils/constants";
import API from "../utils/axios";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Login() {

  const { user, accessToken, setUser } = useAuth();
  const router = useRouter();
  console.log("Auth Context - User:", user);
  console.log("Auth Context - Access Token:", accessToken);
  

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    /*const response = await fetch(API_ENDPOINTS.AUTH_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });*/
    
      const response = await API.post(API_ENDPOINTS.AUTH_LOGIN, JSON.stringify(formData), {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Login response:", response.data);

      if (response.data) {
        localStorage.setItem("access_token", response.data.access_token);
        setUser(true);
        console.log("Login successful:", response.data);
        router.push("/dashboard");
      }else {
        console.log(  "Login failed");
      }
  
   }

   useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return (
    <div className="flex login-form flex-col justify-center w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm space-y-5">
        <h2 className="flex justify-center text-2xl font-semibold text-gray-800">Login Page</h2>
        <form className="flex flex-col" action="/api/login" method="post" onSubmit={handleSubmit}>
           <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
            </label>
            <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
        </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Password
            </label>
            <input
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
        </div>
          <div className="pt-2">
            <button
                type="submit"
                className="w-full inline-flex justify-center items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                Login
            </button>
        </div>
        </form>
    </div>
  );
}