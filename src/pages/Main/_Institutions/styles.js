import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 5% 0;
`;

export const Image = styled.img`
  height: 300px;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  justify-content: right;
  text-align: right;
`;

export const Title = styled.p`
  font-size: 44px;
  font-family: Alata;
`;

export const Desc = styled.p`
  font-size: 23px;
  font-family: Alata;
`;

export const ModalInstText = styled.p`
    font-size: 20px;
    font-family: Alata;
    padding: 10px 0;
    cursor: pointer;
    
    :hover {
        text-decoration: underline;
    }
`