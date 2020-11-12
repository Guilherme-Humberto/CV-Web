import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerForm = styled.div`
    width: 500px;

    textarea {
    width: 100%;
    resize: none;
    height: 130px;
    border: 3px solid #444;
    background: transparent;
    outline: none;
    padding: 10px;
  }

  div {
    width: 100%
  }
`
export const InputGroup = styled.div`
    display: flex;
    gap: 10px;
    width: 500px;
    align-items: center;
`

export const ContainerImage = styled.label`
  background: #ccc;
  width: 200px;
  height: 200px;
  cursor: pointer;
  border-radius: 50%;
`;

export const InputFile = styled.input`
  display: none;
`;
export const ButtonEdit = styled.button`
    background: #121212;
    border: none;
    padding: 7px 20px;
    color: #fff;
    cursor: pointer;
    font-size: 20px
`;