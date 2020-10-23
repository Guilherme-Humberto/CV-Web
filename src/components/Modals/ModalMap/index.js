// // Este é o Modal do Mapa (passando informações via propriedades)

import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'

import { 
  Container,
  Title,
  Desc,
  ButtonClose
} from './styles';

function ModalMap({ infos, buttonclose }) {
  return (
    <Container>
      <ButtonClose onClick={buttonclose}>
        <AiOutlineClose size={40}/>
      </ButtonClose>
      <Title>{infos.name}</Title>
      <Desc>{infos.text}</Desc>
    </Container>

  );
}

export default ModalMap;