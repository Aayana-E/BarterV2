import React from 'react';
import PreLoggedIn from './PreLoggedIn';
import { HomeBack, DudeContainer, LeftDude, RightDude, MovingImage, MovingImageRight, TextContainer } from '../styles/homestyle';
import TypedHeroText from './TypedHeroText';
import LDude from '../photos/pic1.png'
import RDude from '../photos/pic2.png'


function Home() {
  const firstLine = "Exxchange, Connect, Thrive: ";
  const secondLine = "Baarter Your Way!";
  const typingDelay = 100;

  return (
    <>  
      <PreLoggedIn></PreLoggedIn>
      <HomeBack>
        <TextContainer>

        <TypedHeroText text={firstLine} />
        <TypedHeroText text={secondLine} delay={firstLine.length * typingDelay} /> 
     </TextContainer>

            <DudeContainer>
                <LeftDude>
                    <MovingImage src={LDude} alt="Description" />
                </LeftDude>
                <RightDude>
                <MovingImageRight src={RDude}></MovingImageRight>
                </RightDude>
            </DudeContainer>
            
      </HomeBack>
    </>
  )
}

export default Home;
