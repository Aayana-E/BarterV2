import styled, { keyframes } from 'styled-components';


export const HomeBack = styled.div`
height: 700px;
width: 100%;
background-color: #F6F4F1;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
padding-top: 50px;
`;

export const HeroText = styled.text`
font-size: 80px;
font-family: 'Open Sans', sans-serif;
font-weight: 800;
display: flex;
position: relative;
color: #343231;
`
export const HeroSubText = styled.text`
font-size: 30px;
font-family: 'Open Sans', sans-serif;
font-weight: 600;
display: flex;
position: relative;
color: #343231;
`
export const TextContainer = styled.div`
flex-direction: column;
display: flex;
width: 100%;
flex: 35%;
text-align: center;
align-items: center;
`

export const DudeContainer = styled.div`
flex-direction: row;
display: flex;
width: 100%;
flex: 65%;
`

export const LeftDude = styled.div`
flex:50%;
display: flex;
height:70%;
`
export const RightDude = styled.div`
flex:50%;
display: flex;
height:70%;
`

const moveFromLeftToCenter = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: 40%;
    transform: translateX(-50%);
  }
`;
const moveFromRightToCenter = keyframes`
  0% {
    right: 0;
  }
  100% {
    right: 40%;
    transform: translateX(50%);
  }
`;

export const MovingImage = styled.img`
  position: absolute;
  animation: ${moveFromLeftToCenter} 2s ease-in-out forwards;
`;

export const MovingImageRight = styled.img`
  position: absolute;
  animation: ${moveFromRightToCenter} 2s ease-in-out forwards;
`;
