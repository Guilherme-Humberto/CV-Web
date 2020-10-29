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
      setTypeDonation("sangue")
    }
    else if (palheta === true) {
      setTypeDonation("Palheta")
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
              {data.map((item) => (
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
              ))}
            </ContainerCards>
          )}
      </Container>
    </>
  );
}

export default _HistoricPage;


// import React, { useEffect, useState } from 'react';
// import { fadeIn } from 'react-animations';
// import Radium, { StyleRoot } from 'radium';
// import './styles.css'
// import NavBarUserPage from '../../../components/Navbar/NavBarUserPage'
// import api from '../../../service/api'

// // Realizando a animação quando o modal é aberto
// const styles = {
//   fade: {
//     animation: 'x 1s',
//     animationName: Radium.keyframes(fadeIn, 'fade')
//   }
// }

// function _HistoricPage() {
//   const [local, setLocal] = useState('')
//   const [date, setDate] = useState('')
//   const [typeDonation, seType] = useState('')
//   const [info, setInfo] = useState({ })

//   const [hist, setHist] = useState([])

//   async function handleSubmit(e) {
//     await api.post(`/historic/${info._id}`, {
//       local: local,
//       date: date,
//       typeDonation: typeDonation
//     })
//     .then((response) => console.log(response))
//     .catch(err => console.log(err))
//   }

//   useEffect(() => {
//     async function fetchData() {

//       const userData = await localStorage.getItem('infos')
//       const obj = JSON.parse(userData)

//       await api.get(`/historic/list/${obj._id}`)
//         .then((response) => {
//           setHist(response.data)
//           console.log(response.data)
//         })
//         .catch(err => console.log(err))
//     }
//     fetchData()
//   }, [])

//   return (
//     <>
//       <NavBarUserPage />
//       <StyleRoot>
//         <div className="container-historic-user" style={styles.fade}>
//           <div id="container-content-historic">
//             <p id="title-historic">Histórico</p>
//             <p id="desc-historic">
//               Aqui você pode visualizar o seu histórico de doações. 
//               Basta preencher corretamente os campos abaixo.
//             </p>
//             <form onSubmit={handleSubmit} id="container-form-historic">
//               <select onChange={(e) => setLocal(e.target.value)} id="input-add-inst-check">
//                 <option 
//                   defaultValue={"Banco de sangue Paulista"}>
//                     Banco de sangue Paulista
//                 </option>
//                 <option 
//                   defaultValue={"Banco de sangue PróSangue"}>
//                     Banco de sangue PróSangue
//                   </option>
//                 <option 
//                   defaultValue={"Banco de sangue PróSangue"}>
//                     Banco de sangue Vila Olimpia
//                 </option>
//                 <option 
//                   defaultValue={"Banco de sangue Santo Amaro"}>
//                     Banco de sangue Santo Amaro
//                 </option>
//                 <option 
//                   defaultValue={"Banco de sangue Minas Gerais"}>
//                     Banco de sangue Minas Gerais
//                 </option>
//                 <option 
//                   defaultValue={"Banco de sangue Pernambuco"}>
//                     Banco de sangue Pernambuco
//                 </option>
//               </select>
//               <input 
//                 onChange={(e) => setDate(e.target.value)} 
//                 max={Date.now()} 
//                 id="input-add-historic" 
//                 type="date" 
//               />
//               <select onChange={(e) => seType(e.target.value)} id="input-add-historic-check">
//                 <option defaultValue="Sangue">Sangue</option>
//                 <option defaultValue="Palheta">Palheta</option>
//               </select>
//               <button type="submit" id="btn-add-historic">Adicionar</button>
//             </form>
//           </div>

//           <div id="container-list">
//             <div id="container-content-list">
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th id="header-table" scope="col">#</th>
//                     <th id="header-table" scope="col">Locais</th>
//                     <th id="header-table" scope="col">Data</th>
//                     <th id="header-table" scope="col">Tipo de doação</th>
//                   </tr>
//                 </thead>
//                 {hist.map((item, index) => (
//                   <tbody key={item._id}>
//                     <tr>
//                       <th scope="row">{index + 1}</th>
//                       <td id="table-infos">{item.local}</td>
//                       <td id="table-infos">{item.date}</td>
//                       <td id="table-infos">{item.typeDonation}</td>
//                     </tr>
//                   </tbody>
//                 ))}
//               </table>
//             </div>
//           </div>
//         </div>
//       </StyleRoot>
//     </>
//   );
// }

// export default _HistoricPage;

// // Como deixar valores fixos no inputs
// // defaultValue="Guilhemre" readOnly
// // defaultValue="Guilhemre" readOnly
// // defaultValue="Guilhemre" readOnly