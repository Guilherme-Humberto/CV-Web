import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;

  @media (max-width: 860px) {
      a {
          display: none;
      }
  }
  @media (max-width: 680px) {
      button {
          font-size: 16px;
          padding: 5px 10px;
      }
    padding: 5px;
  }
`;

export const ContainerLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0 20px;
    align-items: center;
`

export const Link = styled.a`
    font-size: 25px;
    font-family: Alata;
    text-decoration: none;
    outline: none;
    color: #000;

    :hover {
        color: #000;
    }
`
export const Logo = styled.p`
    font-size: 35px;
    font-family: Alata;
    font-weight: bold;
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;
`
export const Button = styled.button`
    padding: 8px 25px;
    border-radius: 25px;
    font-size: 23px;
    font-family: Roboto;
    outline: none;
    cursor: pointer;
`