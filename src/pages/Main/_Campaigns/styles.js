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
    display: flex;
    align-items: center;
    gap: 0 20px;
    max-width: 700px;
    height: 250px;
    max-width: 900px;
    background: transparent;
    border: 2.5px solid #444;
    border-radius: 5px;
    padding: 30px 20px;
    cursor: pointer;
`

export const TitleCard = styled.div`
    font-size: 30px;
    font-family: Alata;
`

export const DescCard = styled.div`
    font-size: 18px;
    font-family: Alata;
    max-width: 500px;
`
export const ContentCards = styled.div`
  display: flex;
  flex-direction: column;
`