import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled.div`
  margin: 5% 0;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.p`
  font-size: 45px;
  font-family: Alata;
`;

export const Desc = styled.p`
  font-size: 24px;
  font-family: Alata;
  max-width: 900px;
  margin-bottom: 30px;
`;

export const ContainerCards = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const Card = styled(motion.div)`
    width: 700px;
    max-width: 900px;
    background: #e9ecef;
    border: transparent;
    padding: 30px 20px;
    box-shadow: 0px 7px 20px rgb(0, 0, 0, 0.3);
    cursor: pointer;
`

export const TitleCard = styled.div`
    font-size: 30px;
    font-family: Alata;
`

export const DescCard = styled.div`
    font-size: 20px;
    font-family: Alata;
`
