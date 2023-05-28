import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
//import ItemEntryContainer from "./components/items/ItemEntryContainer";
import { AuthContextProvider } from "./components/firebase/AuthContext";
import Map from "./components/Map";
import Signup from './components/Signup';
import ChatPage from './components/chat';

function App() {
  return (
    <>
      <div>
        <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<Map/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/chat" element={<ChatPage/>} />
        </Routes>

        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
