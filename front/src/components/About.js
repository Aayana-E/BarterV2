import React from 'react'
import PreLoggedIn from './PreLoggedIn'
import { HeroSubText, HeroText, HomeBack } from '../styles/homestyle'

function About() {
  return (
    <>
    <PreLoggedIn>
    </PreLoggedIn>
    <HomeBack>
        <HeroText>Local Sustainability</HeroText>
        <HeroSubText>Revolutionize the way people exchange goods, services, and skills within local communities. We aim to create a seamless platform for individuals to safely barter, thereby promoting sustainability, community engagement, and economic empowerment. This proposal outlines the concept, features, and benefits of the proposed service.
</HeroSubText>
    </HomeBack>

    </>
  )
}

export default About