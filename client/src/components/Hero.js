import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <motion.h1 
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to ProSolver
      </motion.h1>
      <p className="mt-4 text-lg text-gray-400">Master DSA with step-by-step explanations.</p>
      
      <Link to="/get-started">
        <motion.button 
          className="mt-6 px-6 py-3 bg-green-400 text-black rounded-lg hover:bg-green-500 transition-all"
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.button>
      </Link>
    </div>
  );
};

export default Hero;
