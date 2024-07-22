// src/LoginPage.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useNavigate } from 'react-router-dom';
import  tech  from '../assets/tech.jpg'

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
      navigate("/mainpage"); // Adjust path as needed
    } catch (error) {
      alert('Error logging in: ' + error.message);
    }
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      alert('Password reset link sent');
      setIsModalOpen(false);
    } catch (error) {
      alert('Error sending password reset email: ' + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="flex w-full max-w-4xl bg-white shadow-lg">
        <div className="flex-1 overflow-hidden relative">
          <img
            src= {tech}
            alt="KNUST"
            className="w-full h-full object-cover transform scale-125"
          />
        </div>
        <div className="flex-1 p-10 flex flex-col justify-center">
          <h1 className="text-3xl text-center text-green-800 mb-6">CampusCalm</h1>
          <form onSubmit={handleLoginSubmit} className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mb-4 p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <label htmlFor="password" className="mb-1 text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mb-4 p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <button  className="mb-4 text-right text-green-800" onClick={() => setIsModalOpen(true)}>Forgot password?</button>
            
            <button type="submit" className="py-2 bg-green-800 text-white rounded hover:bg-green-900">LOGIN</button>
            
            <p className="text-center mt-4 text-gray-700">
              Not registered? <button onClick={() => navigate('/signup')} className="text-green-800 hover:underline">Sign up</button>
            </p>
          </form>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <button
              className="text-gray-600 text-xl font-bold float-right"
              onClick={() => setIsModalOpen(false)}
            >&times;</button>
            <h2 className="text-2xl mb-4">Forgot Password</h2>
            <form onSubmit={handleForgotPasswordSubmit} className="flex flex-col">
              <label htmlFor="resetEmail" className="mb-1 text-gray-700">Enter your email</label>
              <input
                type="email"
                id="resetEmail"
                name="resetEmail"
                required
                className="mb-4 p-2 border rounded"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
              <button type="submit" className="py-2 bg-green-800 text-white rounded hover:bg-green-900">Reset Password</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
