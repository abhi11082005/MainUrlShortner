import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const UserSpecifiedHomepage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [response, setResponse] = useState("");

  // Fetch URL data
  // useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("hello what is errror")
        const res = await axios.get("http://localhost:5000/url")
        .catch((error)=>{"here is error here here"})
        setResponse(res.data); // Store only the response data
      } catch (error) {
        console.error("Error fetching URLs:", error);
      }
    };

    fetchData();
  // }, []); // Run once on component mount

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    navigate("/url/add");
  };

  const urls = response?.urls; // Extract URLs safely

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
              <div>
                <label className="text-green-400 font-bold mr-2">
                  Original URL:
                </label>
                <span>{url.url}</span>
              </div>
              <a
                href={`/url/${url.shortner}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-bold hover:text-teal-400 transition"
              >
                {url.shortner}
              </a>
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
