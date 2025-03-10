import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URLShortener = () => {
  const navigate=useNavigate()
  const [url,setUrl] = useState('')
  const submitHandler = async(e)=>{
    e.preventDefault()
    const response=await axios.get("http://localhost:5000/url/add",{url:url})
    .catch((error)=>{console.log(error)})
    
    if(response?.status===200 ){
      navigate("/url")
    }
    else{
      alert("not navigate")
    }


  }
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 p-8 text-white">
      <h1 className="text-4xl font-bold text-yellow-400 drop-shadow-md mb-8">
        URL Shortener
      </h1>
      <form
        onSubmit={submitHandler}
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full"
      >
        <label htmlFor="url" className="text-green-400 font-semibold">
          URL
        </label>
        <input
          id="url"
          name="url"
          type="text"
          placeholder="Enter your URL"
          value={url}
          onChange={(e)=>{setUrl(e.target.value)}}
          required
          className="w-full p-2 mb-6 border border-blue-400 rounded text-gray-900 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400"
        />

        <button
          type="submit"
          className="w-full py-2 text-lg font-bold text-white bg-red-500 rounded shadow-lg hover:bg-red-600 hover:scale-105 transition-transform"
        >
          Shorten URL
        </button>
      </form>
    </div>
  );
};

export default URLShortener;
