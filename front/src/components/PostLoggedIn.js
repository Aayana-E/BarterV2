import React , { useState, useEffect }from 'react'
import { UserAuth } from './firebase/AuthContext';
import { AboutLink, AllContainer, LeftContainer, LoginButton, Logo, LogoLink, RightContainer } from '../styles/toolbar'
import logo from '../photos/barterlogo.png'


const PostLoggedIn = () => {
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
        <AboutLink to="/about">About Us</AboutLink>
      </LeftContainer>
      <RightContainer>
        {user ? (
          <LoginButton onClick={handleLogout}>Sign Out</LoginButton>
        ) : (
          <LoginButton to="/login">Sign In</LoginButton>
        )}
      </RightContainer>
    </AllContainer>
  );
}

export default PostLoggedIn;
