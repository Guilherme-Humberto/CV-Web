import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  width: 100%;
  height: 70px;
  background: #444;
  display: flex;
  justify-content: space-around;
  align-items: center;

  #menuMobile {
    display: none;
  }

  div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      height: 50px;
      border-radius: 50%;
    }
  }

  #links, 
  a:nth-child(1),
  a:nth-child(2),
  a:nth-child(3), 
  a:nth-child(4),
  a:nth-child(5) {
    display: flex;
    align-items: center;
    gap: 0 20px;
    font-size: 25px;
    font-weight: bold;
    font-family: Alata;
    color: #eee;
  }

  @media (max-width: 835px) {
    a:nth-child(1),
    a:nth-child(2),
    a:nth-child(3), 
    a:nth-child(4),
    a:nth-child(5) {
      font-size: 17px;
    }

    height: 50px;

    #linkPerfil {
      a:nth-child(2) {
        display: none;
      }
    }
  }

  @media (max-width: 460px) {
    #links {
      display: none;
    }
    #menuMobile {
      display: flex;
    }
    div:nth-child(1) {
      img {
        height: 40px;
      }
    }
    justify-content: space-between;
    padding: 5% 10%;
  }
`;
