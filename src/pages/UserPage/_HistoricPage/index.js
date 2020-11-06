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
  InputLocal,
  CheckBox,
  Check,
  ButtonAddHist,
  ButtonDelete
} from './styles';

function _HistoricPage() {
  const [infos, setInfos] = useState({})
  const [local, setLocal] = useState("")
  const [sangue, setSangue] = useState(false)
  const [palheta, setPalheta] = useState(false)
  const [typeDonation, setTypeDonation] = useState("")
  const [newHistoric, setNewHistoric] = useState(false)

  const { data, mutate } = Fetcher(`/historic/list/${infos._id}`)

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

  async function handleAddHist() {

    if (sangue === true) {
      setTypeDonation("Sangue")
    }
    else if (palheta === true) {
      setTypeDonation("Plaqueta")
    }
    else {
      alert("Escolha um tipo de doação")
    }

    await api.post(`/historic/${infos._id}`, {
      local,
      typeDonation
    }).then((response) => {
      if (typeDonation) {
        setNewHistoric(false)
        setTypeDonation("")
      }
      console.log(response.data)
    }).catch((err) => console.log(err))


  }

  if (!data) return <h1>Carregando...</h1>

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
            <hr />
            <InputLocal
              onChange={(e) => setLocal(e.target.value)}
              placeholder="Digite o local de doação"
            />
            <CheckBox>
              <Check>
                <input
                  id="checkbox"
                  onChange={() => setSangue(true)}
                  type="checkbox"
                />
                <h5>Sangue</h5>
              </Check>
              <Check>
                <input
                  id="checkbox"
                  onChange={() => setPalheta(true)}
                  type="checkbox"
                />
                <h5>Palheta</h5>
              </Check>
              <ButtonAddHist onClick={() => handleAddHist()}>Adicionar</ButtonAddHist>
            </CheckBox>
          </ContainerContentHist>
        ) : (
            <ContainerCards>
              {data.map((item, index, array) => (
                <>
                  {array.length === 0 ? (
                    <h1>Historico vazio</h1>
                  ) : (

                      <Card key={item._id}>
                        <ButtonDelete onClick={() => handleDelete(item._id)}>
                          <AiOutlineClose size={20} />
                        </ButtonDelete>
                        <Texts>
                          <h6>{item.date}</h6>
                          <TitleCard>{item.local}</TitleCard>
                          <DescCard>Tipo de doação: <b>{item.typeDonation}</b></DescCard>
                        </Texts>
                      </Card>
                    )}
                </>
              ))}
            </ContainerCards>
          )}
      </Container>
    </>
  );
}

export default _HistoricPage;