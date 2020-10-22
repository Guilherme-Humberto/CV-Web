// // Este é componente responsável por falar sobre a aplicação

import React from 'react';

import { 
  Container,
  Texts,
  Title,
  Desc,
  Image 
} from './styles';
import ImgAbout from '../../../assets/imgAbout.jpg'


function _About() {
  return (
    <Container>
      <Image src={ImgAbout} alt="Imagem"/>

      <Texts>
        <Title>Quem Somos</Title>
        <Desc>
          O Conectando Vidas tem uma proposta, que visa incentivar a prática
          de doação de sangue pelo Brasil. Ao se cadastrar no app você
          automaticamente se conecta a todos os bancos de sangue próximos ao
          seu local.
        </Desc>
      </Texts>
    </Container>
  );
}

export default _About;