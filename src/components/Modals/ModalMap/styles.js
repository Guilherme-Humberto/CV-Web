import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  right: 0;
  width: 500px;
  height: 100%;
  background: #fde1de;
  padding: 2%;
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 2%;
  top: 2%;
  border: none;
  background: transparent;
  outline: none;
`;

export const Content = styled.div`
    margin: 10% 0;
`

export const Title = styled.p`
  font-size: 30px;
  font-family: Alata;
  font-weight: bold;
`;

export const Desc = styled.p`
  font-size: 18px;
  font-family: Alata;
  margin: 10px 0;
`;

export const Email = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    p#email-text {
        font-size: 20px;
        font-family: Alata;
    }
`;