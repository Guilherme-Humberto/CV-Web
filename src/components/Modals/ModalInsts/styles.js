import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  position: fixed;
  z-index: 2;
  left: 0;
  width: 500px;
  background: #e9ecef;
  height: 100%;
  box-shadow: 0px -10px 20px rgb(0, 0, 0, 0.2);
`;

export const Button = styled.div`
  cursor: pointer;
  position: absolute;
  right: 5%;
  top: 5%;
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
`
export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7% 0;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 2%;
`
export const NameInst = styled.p`
  font-size: 20px;
  font-family: Alata;
  font-weight: bold;
  padding: 5px 0;
  margin: 0;
`

export const DescInst = styled.p`
  font-size: 16px;
  font-family: Alata;
`

