import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "./firebase/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebase-config";
import PreLoggedIn from './PreLoggedIn';
import { HeroSubText, HomeBack } from '../styles/homestyle';
import { InputContainer, Input, Label, Underline, StyledButton } from '../styles/loginstyle'; // import styled components


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
      <HomeBack>
          <HeroSubText>Sign Up</HeroSubText>
      <form onSubmit={handleSignUp}>
      <InputContainer>
          <Input type="email" id="input" value={email} onChange={handleEmailChange} required />
          <Label for="input">Email</Label>
          <Underline />
        </InputContainer>
        <InputContainer>
          <Input type="password" id="input" value={password} onChange={handlePasswordChange} required />
          <Label for="input">Password</Label>
          <Underline />
        </InputContainer>
        <StyledButton type="submit">Sign Up</StyledButton>
      </form>
      </HomeBack>
    </div>
  );
};

export default Signup;
