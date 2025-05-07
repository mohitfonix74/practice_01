import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff } from "lucide-react"; // Icon for eye toggle

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁️ toggle
  const { login } = useAuth();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z][a-zA-Z0-9._]*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  
  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
    return regex.test(password);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Invalid email format ❌");
      return;
    }

    if (!validatePassword(password)) {
      toast.error(
        "Password must be 8+ characters, include upper/lowercase, number, and special character 🔐"
      );
      return;
    }

    try {
      await axios.post("https://68188b385a4b07b9d1cfa5c6.mockapi.io/api/v1/user", {
        email,
        password,
      });
      toast.success("Registration Successful 🎉");

      localStorage.setItem("token", "mock_token");
      localStorage.setItem("isLoggedIn", "true");
      login();

      setTimeout(() => navigate("/profile"), 2000);
    } catch (err) {
      toast.error("Registration Failed 😢");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-indigo-900 flex items-center justify-center relative px-4">
      <Toaster position="top-center" />

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-400 opacity-20 rounded-full blur-3xl animate-pulse delay-200"></div>

      <motion.form
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onSubmit={handleRegister}
        className="bg-white/90 p-5 sm:p-10 backdrop-blur-md shadow-2xl rounded-2xl w-full max-w-md z-10"
      >
        <h2 className="text-3xl font-bold text-center text-black pb-5">
          Register to CRM
        </h2>

        <div className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field with Eye Toggle */}
          <div>
            <label className="block text-gray-700 mb-1 font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-indigo-600"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Must be 8+ chars, incl. uppercase, number & special character
            </p>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-primary w-full tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-md"
          >
            Register
          </button>
        </div>

        <p className="text-center mt-6 text-sm text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 underline font-semibold">
            Login
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Register;
