import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
export const ContainerPerfil = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerForm = styled.div`
  margin-top: -30%;
  margin: 0 auto;
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
    width: 100%
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 10px;
  width: 700px;
  align-items: center;

`;
export const ContainerImage = styled.label`
  background: #ccc;
  width: 200px;
  height: 200px;
`;

export const ButtonEditPerfil = styled.button`
  position: absolute;
  transform: translate(-50%, -100%);
  height: 60px;
  width: 60px;
  border: none;
  border-radius: 50%;
  background: lightgreen;
  outline: none;
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
  gap: 0 20px;
  width: 100%;
  max-width: 700px;
  align-items: center;
`;

export const Image = styled.img`
  height: 200px;
  border-radius: 50%;
  box-shadow: 10px 10px 20px rgb(0, 0, 0, 0.3);
`;
export const PerfilDown = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  margin-top: 5%;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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