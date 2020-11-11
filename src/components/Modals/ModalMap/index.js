// // Este é o Modal do Mapa (passando informações via propriedades)

import React from 'react';
import { 
  AiOutlineClose,
  AiOutlineMail,
  AiOutlinePhone 
} from 'react-icons/ai'

import { 
  Container,
  Content,
  Title,
  Desc,
  ButtonClose,
  Email
} from './styles';
import Fetcher from '../../../hooks/Fetcher'

function ModalMap({ id, buttonclose }) {
  const { data } = Fetcher(`institutions/${id}`)

  if(!data) return null

  return (
    <Container
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ButtonClose onClick={buttonclose}>
        <AiOutlineClose size={40}/>
      </ButtonClose>
      <Content>
        <Title>{data.name}</Title>
        <Desc>{data.text}</Desc>
        <Email>
          <p><AiOutlineMail size={35}/></p>
          <p id="email-text">{data.email}</p>
        </Email>
        <Email>
          <p><AiOutlinePhone size={35}/></p>
          <p id="email-text">{data.phone}</p>
        </Email>
      </Content>
    </Container>

  );
}

export default ModalMap;