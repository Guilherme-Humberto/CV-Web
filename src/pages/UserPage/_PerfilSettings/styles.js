import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fde1de;
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px 0;
`;

export const ImagePerfil = styled.input`
    display: none;

    .has-image {
        border: none;
        
    }
`
export const Title = styled.p`
    font-size: 30px;
    font-family: Alata;
    font-weight: bold;
    color: #444;
    margin: 0;
    padding-top: 20px;
`
export const Desc = styled.p`
    font-size: 25px;
    font-family: Alata;
`

export const Form = styled.form`
    max-width: 700px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Label = styled.p`
    font-size: 20px;
    font-family: Alata;
    margin: 10px 0;
`
export const InputGroup = styled.div`
    display: flex;
    gap: 0 10px;
`
export const ImageContainer = styled.label`
    cursor: pointer;
    background-size: cover;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #000;
    margin: 0 auto;
`

export const ImageContent= styled.div`
    
`

export const Input = styled.input`
    width: 600px;
    border: 2px solid #000;
    background: transparent;
    outline: none;
    font-size: 20px;
    font-family: Alata;
    padding: 5px 10px;
`
export const TextArea = styled.textarea`
    width: 100%;
    border: 2px solid #000;
    background: transparent;
    outline: none;
    height: 130px;
    font-size: 16px;
    font-family: Alata;
    padding: 5px 10px;
    resize: none;
`
export const Selected = styled.select`
    width: 200px;
    border: 2px solid #000;
    background: transparent;
    outline: none;
    font-size: 16px;
    font-family: Alata;
    padding: 5px 10px;
`
export const Option = styled.option`
    background: #eee;
`
export const ButtonCompletPerfil = styled.button`
    background: #444;
    font-size: 20px;
    font-family: Alata;
    color: #fff;
    width: 200px;
    padding: 5px 10px;
    border: none;
`

export const ImagePerfilCompleted = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 10%;
    box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.8);
`
export const InputPerfil = styled.input`
    width: 700px;
    border: 2px solid #000;
    background: transparent;
    outline: none;
    font-size: 20px;
    font-family: Alata;
    padding: 5px 10px;
`

export const InfosPerfilCompleted = styled.div`
    max-width: 700px;
`
export const ButtonEditUser = styled.button`
    background: #444;
    font-size: 20px;
    font-family: Alata;
    color: #fff;
    width: 160px;
    padding: 5px 10px;
    border: none;
`