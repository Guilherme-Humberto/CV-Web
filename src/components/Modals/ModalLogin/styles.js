import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background: #f5f1ed;
    box-shadow: -10px 0px 20px rgb(0, 0, 0, 0.3);
`;
export const FormContainer = styled.div`
    padding: 30% 5%;
    display: flex;
    flex-direction: column;
    width: 90%;
`;

export const ButtonCloseModal = styled.button`
    position: absolute;
    top: 5%;
    left: 5%;
    background: transparent;
    border: none;
`

export const Title = styled.p`
    font-size: 35px;
    font-family: Roboto;
    margin: 0;
`

export const Text = styled.p`
    font-size: 20px;
    font-family: Roboto;
`

export const Input = styled.input`
    width: 100%;
    padding: 5px 10px;
    margin: 5px 0;
    background: transparent;
    font-size: 20px;
    border: 2px solid #000;
    font-family: Roboto;
`
export const ButtonModal = styled.button`
    font-size: 20px;
    font-family: Roboto;
    width: 130px;
    background: #121212;
    color: #fff;
    border: none;
    outline: none;
    padding: 7px;
    margin: 20px 0;
`