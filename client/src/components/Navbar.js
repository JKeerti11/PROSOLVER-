import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 fixed w-full top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-400">ProSolver</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-green-400">Home</Link></li>
          <li><Link to="/dashboard" className="hover:text-green-400">Dashboard</Link></li>
          <li><Link to="/chatbot" className="hover:text-green-400">Chatbot</Link></li>
          <li><Link to="/study-planner" className="hover:text-green-400">Study Planner</Link></li>
          <li><Link to="/login" className="hover:text-green-400">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
