import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 8%;
`;
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Logo = styled.p`
  font-size: 55px;
  font-weight: bold;
  font-family: Alata;
`;
export const Desc = styled.p`
  font-size: 26px;
  font-family: Alata;
  max-width: 600px;
`;
export const Image = styled.img`
  height: 450px
`;