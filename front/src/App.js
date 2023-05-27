import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <>
      <div>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        
      </div>
    </>
  );
}

export default App;
