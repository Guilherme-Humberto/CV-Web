import React from 'react';

import imgStore1 from '../../assets/store1.png'
import imgStore2 from '../../assets/store2.png'

import { 
  Container,
  Text,
  ContainerButtons,
  ImageStore
 } from './styles';

function Footer() {
  return (
    <Container>
      <Text>© 2020 Conectando Vidas - Todos os Direitos Reservados</Text>
      <ContainerButtons>
        <ImageStore 
          src={imgStore1} 
          alt="Imagem store App"
        />
        <ImageStore 
          src={imgStore2} 
          alt="Imagem store App"
        />
      </ContainerButtons>
    </Container>
  );
}

export default Footer;