import React, {useEffect, useState} from 'react'
import {auth, googleAuthProvider} from "./firebase/firebase-config";
import { useNavigate } from 'react-router-dom';
//import UserAuth from './firebase/AuthContext'; 
import {GoogleButton} from "react-google-button";
import { UserAuth } from "./firebase/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";


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
        <h1>Login</h1>
        <GoogleButton onClick={handleGoogleSignIn} />
        <h2>Or Sign in with Email</h2>
        <form onSubmit={handleEmailSignIn}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        <button type="submit">Sign In</button>
        </form>
        <button onClick={handleSignUp}>Sign Up</button>
    </div>
  )
}

export default Login