import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 8%;

  @media (max-width: 700px) {
    img {
      height: 250px
    }
    p:nth-child(1){
      font-size: 30px;
      margin-bottom: 0;
    }
    p:nth-child(2){
      font-size:17px;
    }
    div:nth-child(1) {
      margin-top: 18%;
      margin-left: 2%;
      margin-right: 2%;
    }
  }
  
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