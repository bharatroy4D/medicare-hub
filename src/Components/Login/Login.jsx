import React, { useState } from 'react';
import { FaUserMd, FaLock } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    console.log('Login submitted:', formData);
  };

  return (
    <div className="min-h-screen mt-4 lg:mt-10 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8 space-y-8">
        <div className="text-center">
          <FaUserMd className="text-blue-600 text-4xl mx-auto mb-2" />
          <h2 className="text-2xl font-bold text-gray-800">Doctor Login</h2>
          <p className="text-sm text-gray-500">Enter your credentials to access the dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              <FaUserMd className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="doctor@example.com"
                className="w-full py-2 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full py-2 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-lg font-medium transition-all duration-200"
          >
            Login
          </button>
        </form>

        <div className="text-center text-sm text-gray-500">
          Forgot password? <a href="#" className="text-blue-600 hover:underline">Reset here</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
