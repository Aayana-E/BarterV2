import React from "react";
import {
  AboutLink,
  AllContainer,
  LeftContainer,
  LoginButton,
  Logo,
  LogoLink,
  RightContainer,
} from "../styles/toolbar";
import logo from "../photos/barterlogo.png";

function Navbar({ loggedIn, logOut }) {
  return (
    <AllContainer>
      <LeftContainer>
        <LogoLink to="/">
          <Logo src={logo}></Logo>
        </LogoLink>

        <AboutLink to="/about">About Us</AboutLink>
        <AboutLink to="/addItem">Add Item</AboutLink>
      </LeftContainer>
      <RightContainer>
        {!loggedIn ? (
          <LoginButton to="/login">Sign In</LoginButton>
        ) : (
          <LoginButton onClick={logOut} to="/">
            Sign Out
          </LoginButton>
        )}
      </RightContainer>
    </AllContainer>
  );
}

export default Navbar;
