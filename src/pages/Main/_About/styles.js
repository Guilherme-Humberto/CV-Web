import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5% 0;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    img {
      height: 200px
    }
    p:nth-child(1) {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 0;
    }
    p:nth-child(2) {
      font-size: 17px
    }
    div:nth-child(2) {
      margin: 10px 3%;
    }
  }
`;
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10%;
`;
export const Title = styled.p`
  font-size: 43px;
  font-family: Alata;
`;
export const Desc = styled.p`
  font-size: 23px;
  font-family: Alata;
  max-width: 700px;
`;
export const Image = styled.img`
  height: 400px;
`;
