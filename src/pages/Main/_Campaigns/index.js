// // Este é componente responsável por mostrar as campanhas disponíveis

import React from 'react';
import Fetcher from '../../../hooks/Fetcher'

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
  const { data } = Fetcher("campanhas?_limit=4")

  if (!data) return <h1>Carregando...</h1>
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
        {data.map((item, index) => (
          <Card
            key={index}
            drag
            dragConstraints={{
              top: -0,
              left: -0,
              right: 0,
              bottom: 0,
            }}
          >
            <TitleCard>{item.name}</TitleCard>
            <DescCard>{item.desc}</DescCard>
          </Card>
        ))}
      </ContainerCards>
    </Container>
  );
}

export default _Campaigns;