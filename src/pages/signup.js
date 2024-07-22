import React, { useState } from 'react';
import techImage from '../assets/tech.jpg';
import { useNavigate } from 'react-router-dom';
import { auth, UserRef } from '../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc } from 'firebase/firestore';

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('user');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    specialization: ''
  });
  const [loading, setLoading] = useState(false);

  const signupUser = async (email, password, firstname, lastname, role) => {
    setLoading(true);
    try {
      if (true) {
        await createUserWithEmailAndPassword(auth, email, password);
        await addDoc(UserRef, {
          id: Math.ceil(Math.random() * 100000),
          email: email,
          firstname: firstname,
          lastname: lastname,
          role: role,
          createdAt: new Date()
        });
        console.log("Success in creating user");
        navigate("/login");
      } else {
        console.log("Failure in creating user");
      }
    } catch (error) {
      console.error("Error creating User", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTabClick = (role) => {
    setRole(role);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === 'counselor' && !formData.email.endsWith('@knust.edu.gh')) {
      alert('Counselor email must end with @knust.edu.gh');
      return;
    }
    signupUser(formData.email, formData.password, formData.firstName, formData.lastName, role);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        <img src={techImage} alt="KNUST" className="w-1/2 object-cover" />
        <div className="w-1/2 p-8 flex flex-col justify-center items-center">
          <h2 className="mb-6 text-2xl font-bold">Campus Calm</h2>
          <div className="flex mb-6 w-full">
            <div
              className={`flex-1 p-2 text-center cursor-pointer ${role === 'user' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
              onClick={() => handleTabClick('user')}
            >
              User
            </div>
            <div
              className={`flex-1 p-2 text-center cursor-pointer ${role === 'counselor' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
              onClick={() => handleTabClick('counselor')}
            >
              Counselor
            </div>
          </div>
          <form className="w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="p-4 mb-4 border rounded w-full"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="p-4 mb-4 border rounded w-full"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="p-4 mb-4 border rounded w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="p-4 mb-4 border rounded w-full"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {role === 'counselor' && (
              <input
                type="text"
                id="specialization"
                placeholder="Specialization"
                className="p-4 mb-4 border rounded w-full"
                value={formData.specialization}
                onChange={handleChange}
              />
            )}
            <button type="submit" className="p-4 bg-green-500 text-white rounded w-full hover:bg-green-600">
              {loading ? "Loading..." : "Signup"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
