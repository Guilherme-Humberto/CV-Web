import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  height: 100%;
  width: 120px;
  background: #fde1de;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 0px 20px #e4b1ab;

  
  @media (max-width: 670px) {
    width: 100px
  }
  @media (max-width: 1500px) {
    #buttonLink:nth-child(1) {
      width: 40px;
      height: 40px;
    }
  }

  #buttonLink {
    background: transparent;
    border: 1px solid #000;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const ContainerButton = styled.div`
    display: flex;
    margin: 5px 0;
    flex-direction: column;
    align-items: center;
`

export const Button = styled.button``

export const TextButton = styled.p`
    font-size: 16px;
    font-family: Roboto;
    color: #000;
`