import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2% 0;
`;
export const ContainerCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    margin: 10px 0;
`;

export const Card = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    background: #edf2f4;
    border: none;
    padding: 40px 20px;
    max-width: 470px;
    height: 400px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.3);
`

export const Title = styled.p`
    font-size: 35px;
    font-family: Alata;
    margin: 10px 0;
`

export const Desc = styled.p`
    font-size: 18px;
    font-family: Alata;
    margin: 10px;
`
// export const TitleDepo = styled.p`
//     font-family: Alata;
//     font-size: 40px;
// `

// export const DescDepo = styled.p`
//     font-family: Alata;
//     font-size: 25px;
//     max-width: 800px;
// `
