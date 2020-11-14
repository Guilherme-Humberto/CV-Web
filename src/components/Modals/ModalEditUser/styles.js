import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    position: fixed;
    z-index: 3;
    top: 0;
    right: 0;
    background: #eee;
    height: 100vh;
    place-self: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
`;

export const ContainerForm = styled.div`
    display: flex;
    max-width: 500px;
    height: 100%;

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

  @media (max-width: 510px) {
    div:nth-child(1), 
    div:nth-child(2), 
    div:nth-child(3), 
    div:nth-child(5) {
      padding: 5px;
    }
    width: 100%;

    #buttonsDown {
      margin: 0 3%;

      h5 {
        margin-right: 5%;
      }
    }

    textarea {
      max-width: 400px;
    }
  }
`
export const InputGroup = styled.div`
    display: flex;
    gap: 10px;
    max-width: 500px;
    align-items: center;
`

export const ContainerImage = styled.label`
  background: #ccc;
  width: 150px;
  height: 150px;
  cursor: pointer;
  border-radius: 50%;
  margin: 5% 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 510px) {
    text-align: center;
    width: 150px;
    height: 150px;
    margin: 5% 3%;
  }
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