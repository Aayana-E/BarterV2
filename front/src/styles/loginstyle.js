import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  margin: 50px auto;
  width: 200px;
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  color: #ccc;
  transition: all 0.3s ease;
  pointer-events: none;
`;

export const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #333;
  transform: scaleX(0);
  transition: all 0.3s ease;
`;

const inputStyles = css`
  font-size: 20px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px 0;
  background-color: transparent;
  outline: none;

  &:focus ~ ${Label}, 
  &:valid ~ ${Label} {
    top: -20px;
    font-size: 16px;
    color: #333;
  }

  &:focus ~ ${Underline}, 
  &:valid ~ ${Underline} {
    transform: scaleX(1);
  }
`;

export const Input = styled.input`${inputStyles}`;

export const StyledButton = styled.button`
  display: inline-block;
  padding: 12px 24px;
  border: 1px solid #4f4f4f;
  border-radius: 4px;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  font-size: 19px;
  color: black;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #609966;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:hover {
    color: #ffffff;
    border: 1px solid #609966;
  }

  &:hover:before {
    top: -35%;
    background-color: #609966;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  &:hover:after {
    top: -45%;
    background-color: #609966;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`;