import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Home from "./components/Home";
import Login from "./components/Login";
import ItemEntryContainer from "./components/items/ItemEntryContainer";
import Navbar from "./components/Navbar";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const signOut = () => {
    setSignedIn(false);
  };
  return (
    <>
      <div>
        <Navbar signedIn={signedIn} signOut={signOut} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/additem" element={<ItemEntryContainer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
