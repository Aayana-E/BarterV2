import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const AllContainer = styled.div`
height: 70px;
width: 100%;
background-color: #609966;
display: flex;
flex-direction: row;
`;

export const LoginButton = styled(Link)`
border: none;
outline: none;
background-color: whitesmoke;
font-family: 'Open Sans', sans-serif;

padding: 10px 20px;
font-size: 16px;
font-weight: 500;
color: black;
border-radius: 5px;
transition: all ease 0.1s;
box-shadow: 0px 5px 0px 0px #9DC08B;
width: 60px;
height: 20px;
margin-top: 10px;
margin-right: 15px;
text-decoration: none;
text-align: center;

&:active {
    transform: translateY(5px);
    box-shadow: 0px 0px 0px 0px #9DC08B;
  }
`;

export const LeftContainer = styled.div`
flex: 70%;
display: flex;
align-items: center;
`;

export const RightContainer = styled.div`
flex: 30%;
display: flex;
justify-content: flex-end;
`;

export const LogoLink = styled(Link)`
text-decoration: none;
justify-content: center;
align-items: center;
align-self: center;
`;

export const Logo = styled.img`
   max-height: 80px;
   max-width: 190px;
   margin-left: 25px;
`;

export const AboutLink = styled(Link)`
text-decoration: none;
font-size: 18px;
font-weight: 600;

font-family: 'Open Sans', sans-serif;
color: white;
margin-left: 40px;
margin-top: 14px;
`;

