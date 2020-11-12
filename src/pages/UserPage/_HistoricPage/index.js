import React, { useState, useMemo, useCallback } from 'react';
import { AiOutlineClose } from 'react-icons/ai'

import NavBarUserPage from '../../../components/Navbar/NavBarUserPage'
import Fetcher from '../../../hooks/Fetcher'
import api from '../../../service/api';

import {
  Container,
  ContainerMessage,
  Title,
  Message,
  ButtonAddHistoric,
  ContainerCards,
  Card,
  Texts,
  TitleCard,
  DescCard,
  ContainerContentHist,
  TitleContent,
  DescContent,
  Form,
  CheckBox,
  OptionLocal,
  ButtonAddHist,
  ButtonDelete,
  SelectedBlood,
  SelectedLocal,
} from './styles';

function _HistoricPage() {
  const [infos, setInfos] = useState({})
  const [local, setLocal] = useState("")
  const [typeDonation, setTypeDonation] = useState("")
  const [date, setDate] = useState("")
  const [newHistoric, setNewHistoric] = useState(false)

  const { data, mutate } = Fetcher(`/historic/list/${infos._id}`)
  const { data: institutions } = Fetcher(`/institutions`)

  useMemo(() => {
    async function loadInfos() {
      setInfos(JSON.parse(localStorage.getItem("infos")))
    }
    loadInfos()
  }, [])

  const handleDelete = useCallback((id) => {
    api.delete(`historic/${id}`)

    const teste = data.map((item) => {
      if (item.id === id) {
        return { ...item }
      }

      return item
    })

    mutate(teste, false)
  }, [data, mutate])

  async function handleAddHist(e) {
    e.preventDefault()
    await api.post(`/historic/${infos._id}`, {
      local,
      typeDonation,
      date
    })
    .then(() => setNewHistoric(false))
    .catch((err) => console.log(err))
  }

  if (!data) return null
  if (!institutions) return null

  return (
    <>
      <NavBarUserPage />
      <Container>
        <ContainerMessage
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Title>Histórico de doações</Title>
          <Message>
            Aqui ficão seus históricos de doações, clique no botão para adicionar uma nova doação.
          </Message>
          <ButtonAddHistoric onClick={() => setNewHistoric(true)}>
            Adicionar
          </ButtonAddHistoric>
        </ContainerMessage>

        {newHistoric ? (
          <ContainerContentHist>
            <TitleContent>Registre aqui suas doações</TitleContent>
            <DescContent>Suas doações serão listadas aqui, adicione novas</DescContent>
            <Form onSubmit={handleAddHist}>
              <SelectedLocal onChange={(e) => setLocal(e.target.value)}>
                {institutions.map((item) => (
                  <OptionLocal key={item._id} value={`${item.name}`}>{item.name}</OptionLocal>
                ))}
              </SelectedLocal>
              <CheckBox>
                <input
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  min="2020-01-01"
                  max="2020-12-31"
                />
                <SelectedBlood onChange={(e) => setTypeDonation(e.target.value)}>
                  <option selected={true} disabled >Selecione o tipo de doação</option>
                  <option value="Sangue">Sangue</option>
                  <option value="Plaqueta">Plaqueta</option>
                </SelectedBlood>
                <ButtonAddHist type="submit">Adicionar</ButtonAddHist>
              </CheckBox>
            </Form>
          </ContainerContentHist>
        ) : (
            <ContainerCards>
              {data.map((item) => (
                <Card key={item._id}>
                  <ButtonDelete onClick={() => handleDelete(item._id)}>
                    <AiOutlineClose size={20} />
                  </ButtonDelete>
                  <Texts>
                    <h6>{item.date.toLocaleString()}</h6>
                    <TitleCard>{item.local}</TitleCard>
                    <DescCard>Tipo de doação: <b>{item.typeDonation}</b></DescCard>
                  </Texts>
                </Card>
              ))}
            </ContainerCards>
          )}
      </Container>
    </>
  );
}

export default _HistoricPage;