import React from 'react'
import { AboutLink, AllContainer, LeftContainer, LoginButton, Logo, LogoLink, RightContainer} from '../styles/toolbar'
import logo from '../photos/barterlogo.png'

function LoggedIn() {
  return (
    <AllContainer>

      <LeftContainer>
             <LogoLink to="/">
                <Logo src={logo}></Logo>
            </LogoLink>

            <AboutLink to="/about">CHANGE THIS TO WHAT U NEED</AboutLink>

      </LeftContainer>
                                                            <RightContainer>
                                                                       <LoginButton to="/login">Sign Out</LoginButton>
                                                            </RightContainer>

    </AllContainer>
  )
}

export default LoggedIn