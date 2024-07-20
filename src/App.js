import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './pages/landingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={LandingPage} />
      </Routes>
    </Router>
  );
}

export default App;
