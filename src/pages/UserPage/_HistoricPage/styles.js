import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled.div``;

export const ContainerMessage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10% 0;
  background-image: linear-gradient(100deg,#fde1de, #e4b1ab);

  @media (max-width: 860px) {
      p:nth-child(1) {
          font-size: 30px;
      }
      p:nth-child(2) {
          font-size: 20px;
          max-width: 400px;
      }
      button {
          padding: 5px 10px;
          font-size: 15px;
          width: 100px;
      }
  }

  @media (max-width: 500px) {
    padding-top: 30%;
  }

  @media (max-width: 440px) {
      p:nth-child(1) {
          font-size: 25px;
      }
      p:nth-child(2) {
          font-size: 17px;
          max-width: 300px;
      }
      button {
          padding: 5px 10px;
          font-size: 15px;
          width: 100px;
      }
  }
  
`;

export const Title = styled.p`
  font-size: 40px;
  font-family: Alata;
  font-weight: bold;
`;

export const Message = styled.p`
  font-size: 20px;
  font-family: Alata;
  max-width: 600px;
`;

export const ButtonAddHistoric = styled.button`
    width: 200px;
    outline: none;
    background: transparent;
    padding: 6px 10px;
    color: #444;
    border: 3px solid #444;
    border-radius: 25px;
    font-size: 23px;
    font-family: Alata;
    font-weight: bold;

    :hover {
        background: #444;
        color: #fff;
    }
`

export const ContainerCards = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: 800px) {
        div {
            margin: 0 5%;
        }
    }
`

export const Card = styled.div`
    display: flex;
    width: 50rem;
    align-items: center;
    max-width: 650px;
    background: #fde1de;
    padding: 20px;
    position: relative;
`

export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
`

export const TitleCard = styled.p`
    font-size: 24px;
    font-family: Alata;
    margin: 0;
    padding: 5px 0;
    font-weight: 600;
`

export const DescCard = styled.p`
    font-size: 17px;
    font-family: Alata;
`

export const ContainerContentHist = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 5% 0;
    width: 100%;

    #checkbox {
        margin: 0;
    }
`

export const TitleContent = styled.p`
    font-size: 40px;
    font-family: Alata;
    margin: 0;
    text-align: center;
    
    @media (max-width: 540px) {
        font-size: 30px;
        font-weight: bold;
    }
    @media (max-width: 400px) {
        font-size: 20px;
        font-weight: bold;
    }
`

export const DescContent = styled.p`
    font-size: 20px;
    font-family: Alata;
    text-align: center;

    @media (max-width: 400px) {
        font-size: 17px;
        text-align: center;
    }
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    flex-wrap: wrap;

    @media (max-weight: 615px) {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
`

export const CheckBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 10px 0;

    input {
        padding: 10px;
        border: 3px solid #444;
    }

    @media (max-width: 400px) {
        input {
            margin: 0;
            padding: 5px 10px;
        }
        margin: 10px 2%;
    }
`

export const Check = styled.div`
    display: flex;
    gap: 0 10px;
    align-items: center;
`

export const ButtonAddHist = styled.button`
    width: 150px;
    background: #000;
    border: none;
    color: #fff;
    padding: 4px 10px;
`

export const ButtonDelete = styled.button`
    background: #ffb5a7;
    border-radius: 25px;
    padding: 10px;
    display: flex;
    align-items: center;
    position: absolute;
    border: none;
    transform: translate(-80%, -180%);
`

export const SelectedBlood = styled.select`
    width: 100%;
    background: transparent;
    border: 3px solid #444;
    padding: 5px;
    outline: none;
    cursor: pointer;
    font-family: Alata;
    font-size: 16px;
    margin: 10px 0;

    
`
export const SelectedLocal = styled.select`
    width: 100%;
    background: #ccc;
    outline: none;
    cursor: pointer;
    padding: 10px;
    border: none;
    font-family: Alata;
    font-size: 19px;
    color: #444;

    @media (max-width: 400px) {
        margin: 0 2%;
        padding: 5px 10px;
    }
`

export const OptionLocal = styled.option`
    background: #eee;
    font-family: Alata;
    font-size: 18px;
`