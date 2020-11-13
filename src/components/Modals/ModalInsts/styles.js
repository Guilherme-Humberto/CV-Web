import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 500px;
  background: #e9ecef;
  height: 100%;
  box-shadow: 0px -10px 20px rgb(0, 0, 0, 0.2);
  overflow-y: auto;

  ::-webkit-scrollbar {
        background: transparent
  }
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
  font-size: 27px;
  font-family: Alata;
  font-weight: bold;
  padding: 5px 0;
  margin: 0;
`

export const DescInst = styled.p`
  font-size: 18px;
  font-family: Alata;
`

