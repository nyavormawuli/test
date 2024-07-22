import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../src/pages/landingPage';
import LoginPage from '../src/pages/login';
import MainPage from '../src/pages/mainpage'; // Ensure this component is created
import SignupPage from '../src/pages/signup'; // Ensure this component is created
import { UserContextProvider } from './services/userContext';

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;

