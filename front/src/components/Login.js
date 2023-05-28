import React, {useEffect, useState} from 'react'
import {auth, googleAuthProvider} from "./firebase/firebase-config";
import { useNavigate } from 'react-router-dom';
//import UserAuth from './firebase/AuthContext'; 
import {GoogleButton} from "react-google-button";
import { UserAuth } from "./firebase/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoggedIn from './LoggedIn'
import PreLoggedIn from './PreLoggedIn';
import { HeroText, HomeBack, HeroSubText} from '../styles/homestyle';
import styled from 'styled-components';
import { InputContainer, Input, Label, Underline, StyledButton } from '../styles/loginstyle'; // import styled components

const GoogleButtonWrapper = styled.div`
  margin-top: 20px; 
  margin-bottom: 25px;
  justify-content: center;
  align-items: center;
`;
const Login = () => {

  //Email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  //Google signin
  const {googleSignIn, user} = UserAuth();
  const navigate = useNavigate()
  const handleGoogleSignIn = async() =>{
      try {
          await googleSignIn()
         
      } catch (error) {
          console.log(error)
      }
  };
  useEffect(()=>{
      if (user != null) {
          navigate('/map');
        }
  }, [user]);

  //email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = () => {
    navigate("/signup"); 
  };

  return (
    <div>        

      <HomeBack>
        <HeroSubText>Login</HeroSubText>

        <GoogleButtonWrapper>
          <GoogleButton onClick={handleGoogleSignIn} />
        </GoogleButtonWrapper>

        <GoogleButtonWrapper>            
          <HeroSubText>Sign In With Email</HeroSubText>
        </GoogleButtonWrapper>

        <form onSubmit={handleEmailSignIn}>
      <GoogleButtonWrapper>
        <InputContainer>
          <Input type="email" id="input" value={email} onChange={handleEmailChange} required />
          <Label for="input">Email</Label>
          <Underline />
        </InputContainer>
      </GoogleButtonWrapper>
      <GoogleButtonWrapper>
        <InputContainer>
          <Input type="password" id="input" value={password} onChange={handlePasswordChange} required />
          <Label for="input">Password</Label>
          <Underline />
        </InputContainer>
      </GoogleButtonWrapper>


{/* BUTTONS */}

      <GoogleButtonWrapper>
        <StyledButton type="submit">Sign In</StyledButton> 
      </GoogleButtonWrapper>
    </form>
        <StyledButton onClick={handleSignUp}>Sign Up</StyledButton>
      </HomeBack>
    </div>
  )
}

export default Login

