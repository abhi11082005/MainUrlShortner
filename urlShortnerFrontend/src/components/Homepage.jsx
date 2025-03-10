const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white">
      <h1 className="text-4xl font-bold text-yellow-500 mb-10 shadow-md">
        Welcome to URL Shortener
      </h1>
      <div className="flex flex-col space-y-6">
        <a href="/register">
          <button className="w-52 py-3 bg-red-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-red-700 shadow-xl">
            Register
          </button>
        </a>
        <a href="/login">
          <button className="w-52 py-3 bg-blue-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-700 shadow-xl">
            Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
