import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Home from "./components/Home";
import Login from "./components/Login";

//import ItemEntryContainer from "./components/items/ItemEntryContainer";
import { AuthContextProvider } from "./components/firebase/AuthContext";
import Map from "./components/Map";
import Signup from './components/Signup';

import ItemEntryContainer from "./components/items/ItemEntryContainer";
import About from "./components/About";


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
        </Routes>

        </AuthContextProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/additem" element={<ItemEntryContainer />} />
          <Route path="/about" element={<About/>} />

        </Routes>

      </div>
    </>
  );
}

export default App;
