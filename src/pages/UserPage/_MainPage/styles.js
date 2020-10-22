import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContainerMessage = styled(motion.div)`
  text-align: center;
  padding: 5% 0;
  background-image: linear-gradient(100deg,#fde1de, #e4b1ab); 
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
export const NameUser = styled.p`
  font-size: 40px;
  font-family: Alata;
  font-weight: bold;
`;
export const Message = styled.p`
  font-size: 25px;
  font-family: Alata;
  max-width: 700px;
`;
export const ButtonMessage = styled.button`
  font-size: 20px;
  font-family: Alata;
  padding: 6px 25px;
  border: none;
  border-radius: 25px;
  background: #000;
  color: #e1e1e1;

  :hover {
      background: #fff;
      color: #121212;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-left: 4%;
  margin-top: 4%;
`

export const Linha = styled.div`
  width: 100%;
  height: 0.5px;
  background: #000;
  border-radius: 10px;
  margin: 10px;
`

export const Card = styled.div`
  max-width: 600px;
  padding: 20px;
`

export const TitleCard = styled.p`
    font-size: 25px;
    font-family: Alata;
    font-weight: bold;

    :hover {
      text-decoration: underline;
    }
`

export const DescCard = styled.p`
    font-size: 20px;
    font-family: Alata;
`

export const Summary = styled.summary`
    font-size: 23px;
    font-family: Alata;
    font-weight: bold;
    outline: none;
    margin: 10px 0;

    :hover {
      text-decoration: underline;
    }
`