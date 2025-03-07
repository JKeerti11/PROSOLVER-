import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between">
        <h1 className="text-xl font-bold text-indigo-600">ProSolver</h1>
        <ul className="flex gap-6">
          <li><a href="/" className="text-gray-700 hover:text-indigo-600">Home</a></li>
          <li><a href="/dashboard" className="text-gray-700 hover:text-indigo-600">Dashboard</a></li>
          <li><a href="/chatbot" className="text-gray-700 hover:text-indigo-600">Chatbot</a></li>
          <li><a href="/study-planner" className="text-gray-700 hover:text-indigo-600">Study Planner</a></li>
          <li><a href="/login" className="text-gray-700 hover:text-indigo-600">Login</a></li>
          <li><a href="/register" className="text-gray-700 hover:text-indigo-600">Register</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="text-center mt-16">
        <h2 className="text-4xl font-bold text-gray-800">Welcome to ProSolver</h2>
        <p className="text-gray-600 mt-2">Learn DSA concepts step by step!</p>
        <a href="/dashboard" className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-all">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Home;
