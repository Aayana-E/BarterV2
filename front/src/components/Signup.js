import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "./firebase/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebase-config";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login'); // Navigate to login after successful signup
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
