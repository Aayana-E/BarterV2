import React from 'react'
import PreLoggedIn from './PreLoggedIn'

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HeroText, HomeBack } from '../styles/homestyle';



function Home() {
  return (
    <>  
      <PreLoggedIn></PreLoggedIn>

      <HomeBack>
            <HeroText>Exchange, Connect, Thrive:</HeroText>
            <HeroText> Barter Your Way!</HeroText>
      </HomeBack>
    </>
    
   
  )
}

export default Home