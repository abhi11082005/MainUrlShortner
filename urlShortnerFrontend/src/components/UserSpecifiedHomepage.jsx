import React, { useEffect, useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

const UserSpecifiedHomepage = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching URLs...");
        const res = await axios.get("http://localhost:5000/url", {
          withCredentials: true,
          headers: { "Content-Type": "application/json" }  // Ensure correct headers
      });
      
        console.log("hattak",res.data)
        setResponse(res.data);
      } catch (error) {
        console.error("Error fetching URLs:", error);
      }
    };

    fetchData();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/url/add");
  };
  const deleteHandler = async(_id) => {
    console.log(_id)
    const response = await axios.delete(`http://localhost:5000/url/${_id}`,{withCredentials:true})
    
    .catch((error)=>{
      console.error(error)
    })
    if(response.status===200){
      setResponse((prev)=>({
        ...prev,
        urls: prev.urls.filter((url) => url._id !== _id),
      }))
    }
  }
console.log(response)
  const urls = response?.urls;

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white p-8">
      <h1 className="text-center text-4xl font-bold text-yellow-400 drop-shadow-md mb-8">
        Welcome to the URL Shortener Home Page
      </h1>

      <ul className="max-w-2xl mx-auto space-y-4">
        {urls && urls.length > 0 ? (
          urls.map((url, index) => (
            <li
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg flex justify-between items-center"
            >
              {/* <div className="flex flex-row"> */}
              <div className="flex flex-row">
                <label className="text-green-400 font-bold mr-2">
                  Original URL:
                </label>
                <div className="w-[374px]">
                  {url.url}</div>
              </div>
              
              <a
                
                href={url.url[0]==='h'? url.url : `http://${url.url}` }
                target="_blank"
                rel="noopener noreferrer"
                className=" text-blue-400 font-bold hover:text-teal-400 transition"
              >
                {url.shortner}
              </a>
            
              <button
                onClick={()=>{deleteHandler(url._id)}}
                className="mx-4 px-3 py-1 text-sm  text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-600 hover:scale-105 transition-transform"
              >Delete</button>
              {/* </div> */}
            </li>
          ))
        ) : (
          <p className="text-center text-gray-400">No URLs found.</p>
        )}
      </ul>

      <form onSubmit={submitHandler} className="text-center mt-8">
        <button className="px-6 py-3 text-lg font-bold text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-600 hover:scale-105 transition-transform">
          Add New URL
        </button>
      </form>
    </div>
  );
};

export default UserSpecifiedHomepage;
