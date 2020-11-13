import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled.div``;

export const ContainerCards = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5%;

  @media (max-width: 860px) {
    div {
      display: block;
      max-width: 400px;

      p:nth-child(2) {
        max-width: 350px;
      }
    }
  }
`;

export const Card = styled(motion.div)`
  padding: 20px 10px;
  background: #fde1de;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 10px 20px #e4b1ab;

  @media (max-width: 860px) {
    div:nth-child(1) {
      flex-wrap: wrap;
    }

    img {
      margin: 0 5%;
    }

    hr {
      background: #000
    }
  }

  @media (max-width: 450px) {
    margin: 0 7%;

    img {
      height: 170px;
    }
  }
`;
export const Header = styled(motion.div)`
  background-image: linear-gradient(100deg,#fde1de, #e4b1ab); 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 10% 5%;

  @media (max-width: 900px) {
    p:nth-child(1) {
      font-size: 35px;
    }
    p:nth-child(2) {
      font-size: 20px;
      max-width: 600px;
    }
  }
  @media (max-width: 700px) {
    p:nth-child(1) {
      font-size: 30px;
    }
    p:nth-child(2) {
      font-size: 17px;
      max-width: 500px;
    }
  }

  @media (max-width: 500px) {
    padding-top: 30%;
  }
 
`;

export const Image = styled.img`
  height: 120px;
  border-radius: 5px;
  box-shadow: 10px 10px 20px rgb(0, 0, 0, 0.2);
`;

export const NameCamp = styled.p`
  font-size: 25px;
  font-family: Alata;
  font-weight: bold;
  margin: 0;
  padding: 5px 0;
`;

export const DescCamp = styled.p`
  font-size: 14px;
  font-family: Alata;
  max-width: 500px;
`;

export const EmailCamp = styled.p`
  font-size: 16px;
  font-family: Alata;
`;

export const PhoneCamp = styled.p`
  font-size: 16px;
  font-family: Alata;
`;

export const Title = styled.p`
  font-size: 44px;
  font-family: Alata;
  font-weight: bold;
`;
export const Desc = styled.p`
  font-size: 23px;
  font-family: Alata;
  max-width: 850px;
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
`;

export const TextContact = styled.p`
  font-size: 16px;
  font-family: Alata;
  margin: 0;
`;