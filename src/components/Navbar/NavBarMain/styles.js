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
  background: #f4f3ee;
`;

export const ContainerLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
`

export const Link = styled.p`
    font-size: 25px;
    font-family: Alata;
`

export const Logo = styled.p`
    font-size: 35px;
    font-family: Alata;
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
export const Title = styled.p`
    font-size: 35px;
    font-family: Roboto;
`

export const Text = styled.p`
    font-size: 20px;
    font-family: Roboto;
`

export const Input = styled.input`
    width: 100%;
    padding: 5px 10px;
    margin: 5px 0;
    background: #f8edeb;
    font-size: 20px;
    border: none;
    font-family: Roboto;
`
export const ButtonModal = styled.button`
    font-size: 20px;
    font-family: Roboto;
    width: 40%;
    background: #f8f9fa;
    border: none;
    outline: none;
    padding: 7px;
    margin: 20px 0;
`