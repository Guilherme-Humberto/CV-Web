// // Este é componente responsável por mostrar as campanhas disponíveis

import React from 'react';

import { 
  Container,
  Texts,
  Title,
  Desc,
  ContainerCards,
  Card,
  TitleCard,
  DescCard
} from './styles';

function _Campaigns() {
  return (
    <Container>
      <Texts>
        <Title>Campanhas</Title>
        <Desc>
          Com a sua ajuda podemos conectar ainda mais vidas por meio de
          campanhas. Veja as disponíveis abaixo e ajude-nos a incentivar a
          doação de sangue
        </Desc>
      </Texts>

      <ContainerCards>
        <Card
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <TitleCard>Exemplo</TitleCard>
          <DescCard>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint?</DescCard>
        </Card>

        <Card
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <TitleCard>Exemplo</TitleCard>
          <DescCard>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint?</DescCard>
        </Card>

        <Card
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <TitleCard>Exemplo</TitleCard>
          <DescCard>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint?</DescCard>
        </Card>

        <Card
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <TitleCard>Exemplo</TitleCard>
          <DescCard>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint?</DescCard>
        </Card>
      </ContainerCards>
    </Container>
  );
}

export default _Campaigns;