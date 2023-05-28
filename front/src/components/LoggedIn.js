import React from 'react'
import { AboutLink, AllContainer, LeftContainer, LoginButton, Logo, LogoLink, RightContainer} from '../styles/toolbar'
import logo from '../photos/barterlogo.png'
import { UserAuth } from './firebase/AuthContext';

const LoggedIn = () => {
  const { logOut, user } = UserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      console.log('Logged out successfully');
    } catch (error) {
      console.error('Failed to log out', error);
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
                                                            {user ? (
          <LoginButton onClick={handleLogout}>Sign Out</LoginButton>
        ) : (
          <LoginButton to="/login">Sign In</LoginButton>
        )}
                                                            </RightContainer>

    </AllContainer>
  )
}

export default LoggedIn