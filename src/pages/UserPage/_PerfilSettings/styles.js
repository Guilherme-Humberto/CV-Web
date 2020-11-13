import styled from 'styled-components';
import { motion } from 'framer-motion'

export const MessageNavBar = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  background: #444;
  padding: 10px 5%;

  h3, h6 {
    font-weight: bold;
    color: #fff;
  }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #eee;

    @media (max-width: 670px) {
      height: 100%;
    }
`;

export const ContainerPerfil = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 670px) {
    img {
      height: 150px;
      margin-bottom: 10px;
    }
    h1 {
      font-size: 30px;
      text-align: center;
    }
    p {
      text-align: center;
      font-size: 15px;
    }
    margin-left: 3%;
    margin-right: 3%;
    padding: 10% 0;
  }
`;

export const ContainerForm = styled.div`
  padding-top: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  textarea {
    width: 100%;
    resize: none;
    height: 130px;
    border: 3px solid #444;
    background: transparent;
    outline: none;
    padding: 10px;
  }

  div {
    width: 100%;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 10px;
  width: 700px;
  align-items: center;

  @media (max-width: 670px) {
    flex-wrap: wrap;
  }

`;
export const ContainerImage = styled.label`
  background: #ccc;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const ButtonEditPerfil = styled.button`
  position: absolute;
  transform: translate(-40%, -90%);
  height: 60px;
  width: 60px;
  border: none;
  border-radius: 50%;
  background: lightgreen;
  outline: none;

  @media (max-width: 670px) {
    transform: translate(-50%, -200%);
    height: 50px;
    width: 50px;
  }
  @media (max-width: 500px) {
    transform: translate(160%, -200%);
    height: 50px;
    width: 50px;
  }
`

export const InputFile = styled.input`
  display: none;
`;

export const Selected = styled.select`
    width: 100%;
    border: 3px solid #444;
    background: transparent;
    outline: none;
    font-size: 16px;
    font-family: Alata;
    padding: 7px 10px;
`
export const Option = styled.option`
    background: #eee;
`
export const ButtoneCompletePerfil = styled.button`
    background: #121212;
    border: none;
    padding: 7px 20px;
    color: #fff;
    cursor: pointer;
`

export const PerfilTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 20px;
  width: 100%;
  max-width: 700px;
  align-items: center;

  @media (max-width: 500px) {
    margin-top: 30%;
    justify-content: center;
  }
`;

export const Image = styled.img`
  height: 160px;
  border-radius: 50%;
  box-shadow: 10px 10px 20px rgb(0, 0, 0, 0.3);
`;
export const PerfilDown = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  margin-top: 5%;

  @media (max-width: 500px) {
    h3 {
      font-size: 25px;
    }

    h5 {
      font-size: 17px;
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 500px) {
    div {
      h4 {
        font-size: 20px;
        font-weight: bold;
      }
      h5 {
        font-size: 16px;
        margin: 0;
      }
      div {
        min-width: 100%;
      }
    }
  }
`

export const FieldInfo = styled.div`
  display: flex;
  gap: 0 10px;
  align-items: center;
  background: transparent;
  border: 3px solid #444;
  padding: 3px 10px;
  width: 100%;
`