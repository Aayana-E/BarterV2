import React from 'react'
import { AboutLink, AllContainer, LeftContainer, LoginButton, Logo, LogoLink, RightContainer} from '../styles/toolbar'
import logo from '../photos/barterlogo.png'
import { UserAuth } from './firebase/AuthContext';

const LoggedIn = () => {

  
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
          <LoginButton to="/">Sign Out</LoginButton>
        
                                                            </RightContainer>

    </AllContainer>
  )
}

export default LoggedIn