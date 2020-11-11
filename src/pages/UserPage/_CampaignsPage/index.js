import React from 'react';
import Fetcher from '../../../hooks/Fetcher'
import NavBarUserPage from '../../../components/Navbar/NavBarUserPage'

import { 
  Container,
  Texts,
  Title,
  Desc,
  Header,
  ContainerCards,
  Card,
  Image,
  NameCamp,
  DescCamp,
  Contacts,
  TextContact
} from './styles';

function _CampaignsPage() {
  const { data } = Fetcher("campaign")

  if(!data) return null

  return (
    <>
      <NavBarUserPage />
      <Container>
        <Header>
          <Title>Campanhas</Title>
          <Desc>
            A sua visita é muito importante para nós. Venha conhecer todo procedimento que envolve a doação de sangue, traga seus colegas de trabalho, alunos, ou quem você quiser.
            A informação é o melhor remédio para curar o preconceito. Estamos esperando você de portas abertas. Conheça nossos projetos.
          </Desc>
        </Header>

        <ContainerCards>
          {data.map((item) => (
            <Card key={item._id}>
              <Image src={item.img} alt="Foto"/>

              <Texts>
                <NameCamp>{item.name}</NameCamp>
                <DescCamp>{item.desc}</DescCamp>
              <Contacts>
                <TextContact>E-Mail: <b>{item.email}</b></TextContact>
                <TextContact>Telefone: <b>{item.phone}</b></TextContact>
              </Contacts>
              </Texts>

            </Card>
          ))}
        </ContainerCards>
      </Container>
    </>
  );
}

export default _CampaignsPage;