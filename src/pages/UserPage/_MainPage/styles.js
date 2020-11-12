import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    div:nth-child(6) {
      margin-left: 23%
    }
  }
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
  
  @media (max-width: 950px) {
    margin-left: 10%
  }

`;
export const NameUser = styled.p`
  font-size: 40px;
  font-family: Alata;
  font-weight: bold;
  
  @media (max-width: 950px) {
    font-size: 30px;
  }
`;
export const Message = styled.p`
  font-size: 25px;
  font-family: Alata;
  max-width: 700px;

  @media (max-width: 800px) {
    max-width: 450px;
    font-size: 20px;
  }
`;
export const ButtonMessage = styled.button`
  font-size: 20px;
  font-family: Alata;
  padding: 10px 25px;
  border: 3px solid #444;
  border-radius: 25px;
  font-weight: bold;
  background: transparent;
  color: #444;

  :hover {
      background: #444;
      color: #fff;
  }

  @media (max-width: 600px) {
    padding: 5px 10px;
    font-size: 17px;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 4%;
  margin-top: 4%;
  width: 80%;

  
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

  @media (max-width: 800px) {
    margin-left: 10%;
  }
`

export const TitleCard = styled.p`
    font-size: 25px;
    font-family: Alata;
    font-weight: bold;

    :hover {
      text-decoration: underline;
    }

    @media (max-width: 800px) {
      font-size: 17px;
      text-align: left;
    }
    @media (max-width: 950px) {
      font-size: 20px;
    }
`

export const DescCard = styled.p`
    font-size: 20px;
    font-family: Alata;

    @media (max-width: 800px) {
      font-size: 17px;
      text-align: left;
    }
    @media (max-width: 950px) {
      font-size: 17px;
    }
`