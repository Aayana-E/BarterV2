import React from 'react'
import { AboutLink, AllContainer, LeftContainer, LoginButton, Logo, LogoLink, RightContainer} from '../styles/toolbar'
import logo from '../photos/barterlogo.png'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoggedIn = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
      
      // Redirect to the home page
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };
  
  return (
    <AllContainer>

      <LeftContainer>
             <LogoLink to="/">
                <Logo src={logo}></Logo>
            </LogoLink>

            <AboutLink to="/map">Map</AboutLink>
            <AboutLink to="/items">Items</AboutLink>
            <AboutLink to="/chat">Chat</AboutLink>


      </LeftContainer>
                                                            <RightContainer>
          <LoginButton onClick={logout}>Sign Out</LoginButton>
        
                                                            </RightContainer>

    </AllContainer>
  )
}

export default LoggedIn