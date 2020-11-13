import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  padding: 20px;
  position: relative;
  bottom: 0;
`;

export const Text = styled.p`
  font-size: 20px;
  color: #e1e1e1;

  @media (max-width: 540px) {
    font-size: 17px;
  }
`;