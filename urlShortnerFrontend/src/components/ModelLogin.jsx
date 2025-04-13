import { useState } from "react";

export default function ModalLogin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-100">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-500 text-white px-6 py-2 rounded hover:opacity-80"
      >
        Login
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-black w-96 p-6 rounded-lg shadow-lg relative animate-scale">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-4 text-xl text-gray-600 hover:text-red-500"
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
            <svg xmlns="https://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 40 48" aria-hidden="true" jsname="jjf7Ff"><path fill="#4285F4" d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"></path><path fill="#34A853" d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"></path><path fill="#FABB05" d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"></path><path fill="#E94235" d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"></path></svg>
            </div>
            <div>
              <label className="block font-semibold">Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mt-4">
              <label className="block font-semibold">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" className="mr-2" />
              <span>Remember me</span>
            </div>
            <button className="w-full bg-green-500 text-white py-2 mt-4 rounded hover:opacity-80">
              Login
            </button>
            <div className="mt-4 flex justify-between text-sm">
              <button onClick={() => setIsOpen(false)} className="text-red-500 hover:underline">
                Cancel
              </button>
              <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}