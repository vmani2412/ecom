'use client'

import { useState } from "react";
import API_ENDPOINTS from "../utils/constants";
import Login from "../login/page";

export default function Register() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
        registerUser(formData).then((data) => {
            console.log("User registered:", data);
            alert
        })
    }

    async function registerUser(data: typeof formData) {
        const response = await fetch(API_ENDPOINTS.AUTH_REGISTER, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }

  return (
    <div className="flex gap-8 bg-gray-100 flex-direction-row">
      
      <div className="register-form flex flex-col basis-1/2 justify-center items-center p-8">   
      <div className="flex">
        <form
        action="/api/register"
        method="post"
        className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm space-y-5"
        onSubmit={handleSubmit}
    >
        <h2 className="text-2xl font-semibold text-gray-800 justify-center">Create an account</h2>

        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                First Name
            </label>
            <input
                id="first_name"
                name="first_name"
                type="text"
                required
                autoComplete="first_name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your first name"
                value={formData.first_name}
                onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
            />
        </div>

        <div>
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                Last Name
            </label>
            <input
                id="last_name"
                name="last_name"
                type="text"
                required
                autoComplete="last_name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your last name"
                value={formData.last_name}
                onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
            />
        </div>

        <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
            </label>
            <input
                id="username"
                name="username"
                type="text"
                required
                autoComplete="username"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
        </div>

        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
            </label>
            <input
                id="email"
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
            </label>
            <input
                id="password"
                name="password"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="At least 8 characters"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <p className="mt-1 text-xs text-gray-500">Use 8 or more characters with a mix of letters and numbers.</p>
        </div>

        <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm password
            </label>
            <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Repeat your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
            <p className="mt-1 text-xs text-gray-500">Make sure these match.</p>
        </div>

        <div className="pt-2">
            <button
                type="submit"
                className="w-full inline-flex justify-center items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                Register
            </button>
        </div>
    </form>
    </div>
    </div>
    <div className="login-section flex basis-1/2 p-8 items-center flex-col">
      <Login />
    </div>
    </div>
  );
}