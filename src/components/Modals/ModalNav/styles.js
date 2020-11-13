import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    position: fixed;
    z-index: 4;
    right: 0;
    top: 0;
    height: 100%;
    width: 70%;
    background: #fde1de;
    box-shadow: -10px 0px 20px rgb(0, 0, 0, 0.2);
`;

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 50% 5%;

    a {
        font-size: 25px;
        font-family: Alata;
        color: #000;

        :hover {
            text-decoration: underline;
        }
    }
`

export const ButtonCloseModal = styled.button`
    position: absolute;
    top: 5%;
    left: 5%;
    border: none;
    background: transparent;
    outline: none;
`