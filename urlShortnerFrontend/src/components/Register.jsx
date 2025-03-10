import React from "react";
import { useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { use } from "react";

const RegisterPage = () => {
  const navigate=useNavigate();
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response = await axios.post("http://localhost:5000/user/register", {
      name,
      email,
      password
    })

    .catch((error)=>{
      console.log(error,"error occur in the frontend")
    })
    
    console.log(response)
    if(response.status===200){
      navigate("/login")
  }
    else{
      alert("regist ration failed")
    }
  }
  
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 p-8 text-white">
      <h1 className="text-4xl font-bold text-yellow-400 drop-shadow-md mb-8">
        Register Page
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full"
      >
        <label htmlFor="name" className="text-green-400 font-semibold">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          required
          className="w-full p-2 mb-4 border border-blue-400 rounded text-white-900 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400"
        />
        
        <label htmlFor="email" className="text-green-400 font-semibold">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          required
          className="w-full p-2 mb-4 border border-blue-400 rounded text-white-900 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400"
        />

        <label htmlFor="password" className="text-green-400 font-semibold">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          required
          className="w-full p-2 mb-6 border border-blue-400 rounded text-white-900 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400"
        />

        <button
          type="submit"
          className="w-full py-2 text-lg font-bold text-white bg-red-500 rounded shadow-lg hover:bg-red-600 hover:scale-105 transition-transform"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;