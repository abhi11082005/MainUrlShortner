import React,{useState} from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const submitHandler=async(e)=>{
    e.preventDefault()
    const response= await axios.post("http://localhost:5000/user/login",{
      email,password
    },{credentials: "include"},)
    .catch((error)=>{
      console.log(error)
    })
    console.log(response)
    
    if(response?.status===200 ){
      
      navigate("/url")
    }
    else{
      alert("loggedIn failed")
    }
  }
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 p-8 text-white">
      <h1 className="text-4xl font-bold text-yellow-400 drop-shadow-md mb-8">
        Login Page
      </h1>
      <form
        onSubmit={submitHandler}
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full"
      >
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
          className="w-full p-2 mb-4 border border-blue-400 rounded text-gray-900 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400"
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
          className="w-full p-2 mb-6 border border-blue-400 rounded text-gray-900 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400"
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

export default LoginPage;
