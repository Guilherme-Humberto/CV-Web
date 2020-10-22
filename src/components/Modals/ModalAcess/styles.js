import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  position: fixed;
  z-index: 2;
  right: 0;
  height: 100%;
  width: 450px;
  background: #fcd5ce;
  box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.3);
  display: flex;
  padding: 10% 2%;
  text-align: left;
  flex-direction: column;
`;

export const Button = styled.button`
  background: transparent;
  outline: none;
  border: none;
  position: absolute;
  top: 4%;
  right: 4%;
`

export const Form = styled.form``