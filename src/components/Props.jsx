import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCar, FaBan } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

const Props = (props) => {
  const [isVerify, setIsVerify] = useState(null);
  const [userName, setUserName] = useState(null);
  const [age, setAge] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      // Simulate lazy loading
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);

      const inputName = prompt("Enter your name:");
      setUserName(inputName || props.name || "Guest");

      const inputAge = prompt("Enter your age:");
      const parsedAge = parseInt(inputAge);
      setAge(parsedAge);

      setIsVerify(!isNaN(parsedAge) && parsedAge >= 18);
    };

    init();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-700 text-white">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="text-6xl"
        >
          <ImSpinner2 />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-20 flex items-center justify-center bg-gradient-to-br from-sky-900 to-purple-950 text-white px-4">
      <div className="bg-white/10 backdrop-blur-xl shadow-2xl p-8 rounded-2xl max-w-md w-full text-center border border-white/20">
        <h1 className="text-3xl font-bold mb-2">👋 Welcome, {userName}!</h1>
        <p className="mb-4 text-lg">
          You're visiting from{" "}
          <span className="font-semibold text-yellow-300">
            {props.city || "Unknown City"}
          </span>
        </p>

        {isVerify === null ? (
          <p className="text-white">Verifying...</p>
        ) : isVerify ? (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-green-500/10 border border-green-400 rounded-lg p-5 mt-4"
          >
            <FaCar className="text-green-400 text-5xl mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-green-100">
              ✅ You are eligible to drive, {userName}!
            </h2>
            <p className="text-green-200 mt-1">Age: {age}</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-red-500/10 border border-red-400 rounded-lg p-5 mt-4"
          >
            <FaBan className="text-red-400 text-5xl mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-red-100">
              🚫 Sorry {userName}, you're not eligible to drive.
            </h2>
            <p className="text-red-200 mt-1">
              Age must be 18 or above. Entered: {age || "Invalid"}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Props;
