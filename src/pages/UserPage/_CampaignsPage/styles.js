import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled.div``;

export const ContainerCards = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5% 0 5% 8%;
`;

export const Card = styled(motion.div)`
  padding: 20px 10px;
  background: #fde1de;
  max-width: 650px;
  display: flex;
  align-items: center;
  box-shadow: 0px 10px 20px #e4b1ab;
`;
export const Header = styled.div`
  background-image: linear-gradient(100deg,#fde1de, #e4b1ab); 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 5%;

`;

export const Image = styled.img`
  height: 120px;
  border-radius: 5px;
  box-shadow: 10px 10px 20px rgb(0, 0, 0, 0.2);
`;

export const NameCamp = styled.p`
  font-size: 27px;
  font-family: Alata;
  margin: 0;
  padding: 5px 0;
`;

export const DescCamp = styled.p`
  font-size: 14px;
  font-family: Alata;
`;

export const EmailCamp = styled.p`
  font-size: 16px;
  font-family: Alata;
`;

export const PhoneCamp = styled.p`
  font-size: 16px;
  font-family: Alata;
`;

export const Texts = styled.div`
  margin: 0 3%;
`;

export const Title = styled.p`
  font-size: 44px;
  font-family: Alata;
  font-weight: bold;
  text-decoration: underline;
`;
export const Desc = styled.p`
  font-size: 23px;
  font-family: Alata;
  max-width: 850px;
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextContact = styled.p`
  font-size: 16px;
  font-family: Alata;
  margin: 0;
`;