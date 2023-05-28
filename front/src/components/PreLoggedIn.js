import React from 'react'
import { AboutLink, AllContainer, LeftContainer, LoginButton, Logo, LogoLink, RightContainer} from '../styles/toolbar'
import logo from '../photos/barterlogo.png'



function PreLoggedIn(){
  return (
    <AllContainer>

      <LeftContainer>
             <LogoLink to="/">
                <Logo src={logo}></Logo>
            </LogoLink>
            <AboutLink to="/about">About Us</AboutLink>
      </LeftContainer>
                                                            <RightContainer>
                                                                       <LoginButton to="/login">Sign In</LoginButton>
                                                            </RightContainer>
       
    </AllContainer>
  )
}

export default PreLoggedIn