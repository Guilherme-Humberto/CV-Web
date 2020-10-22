import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"



import {
  Container,
  ContainerMessage,
  NameUser,
  Message,
  ButtonMessage,
  ContainerCards,
  Card,
  TitleCard,
  DescCard,
  Linha,
  Summary
} from './styles';
import NavBarUserPage from '../../../components/Navbar/NavBarUserPage'

function _MainPage() {

  return (
    <>
      <NavBarUserPage />
      <Container>
        <ContainerMessage
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <NameUser>Guilherme Melo</NameUser>
          <Message>
            Sabia que o Conectando Vidas também tem um aplicativo? Faça o download para continuar conectado :)
          </Message>
          <ButtonMessage>Faça o download</ButtonMessage>
        </ContainerMessage>

        <ContainerCards>
          <Card>
            <TitleCard>COM UM ATO DE SOLIDARIEDADE</TitleCard>
            <DescCard>
              A doação é um procedimento totalmente seguro.
              O volume coletado é de aproximadamente 450 ml (padrão internacional),
              o que representa uma fração muito pequena do total de sangue de um adulto.
          </DescCard>
          </Card>
          <Card style={{ textAlign: "right" }}>
            <TitleCard>RAZÕES PARA DOAR SANGUE</TitleCard>
            <DescCard>
              As bolsas de sangue coletadas anualmente no país – ao todo são 3,5 milhões – são insuficientes para atender à demanda.
              O ideal, segundo o Ministério da Saúde, é alcançar <marker style={{ backgroundColor: "#ccc" }}>5,7 milhões de bolsas a cada ano</marker>;
          </DescCard>
          </Card>
        </ContainerCards>
        <Linha />
        <ContainerCards>
          <Card>
            <details open style={{ width: 600 }}>
              <Summary>O QUE VOCÊ PRECISA PARA DOAR SANGUE?</Summary>
              <DescCard>Apresentar um documento oficial com foto (RG, CNH, etc.) em bom estado de conservação.</DescCard>
              <DescCard>Estar em boas condições de saúde e pesar no mínimo 50 kg.</DescCard>
              <DescCard>Não ter feito uso de bebida alcoólica nas últimas 12 horas.</DescCard>
              <DescCard>Após o almoço ou ingestão de alimentos gordurosos, aguardar 3 horas. Não é necessário estar em jejum.</DescCard>
            </details>
          </Card>
          <Card style={{ textAlign: "right" }}>
            <details open style={{ width: 600 }}>
              <Summary>CUIDADOS APÓS A DOAÇÃO DE SANGUE</Summary>
              <DescCard>Ingerir líquidos em grande quantidade durante o dia da doação;</DescCard>
              <DescCard>Permanecer em nossas instalações de 15 a 30 minutos após sair da sala de doação;</DescCard>
              <DescCard>Não carregar peso ou fazer qualquer esforço com o braço utilizado para doação</DescCard>
              <DescCard>Não fazer exercícios e esforços físicos intensos no dia da doação;</DescCard>
            </details>
          </Card>
        </ContainerCards>
        <Linha />
        <ContainerCards style={{ maxWidth: "75%", flexDirection: "column"}}>
          <TitleCard>ETAPAS DO PROCESSO DE DOAÇÃO DE SANGUE</TitleCard>
          <TitleCard style={{ fontSize: 20 }}>1 - RECEPÇÃO E CADASTRO</TitleCard>
          <DescCard>
            O doador é cadastrado no Banco de Sangue, com base na apresentação de documento oficial de identificação com foto (carteira identidade, CPTS, Carteira Nacional de Habilitação, etc).
          </DescCard>

          <TitleCard style={{ fontSize: 20 }}>2 - TRIAGEM CLÍNICA</TitleCard>
          <DescCard>
          Após o cadastro, o doador é orientado a se dirigir a um local onde será realizado um questionário <marker style={{ backgroundColor: "#ccc" }}>individual e confidencial</marker> sobre sua saúde, 
          a fim de avaliar se está apto para realizar a doação. Com base nos resultados do questionário será realizado o teste de hematócrito e verificado os sinais vitais. Se o doador não tiver condições para doar, 
          o triador irá lhe explicar o motivo da inaptidão e se esta situação é temporária ou definitiva. Se o doador estiver apto para doar, assinará um termo de consentimento e será encaminhado para a sala de coleta.
          </DescCard>

          <TitleCard style={{ fontSize: 20 }}>3 - COLETA</TitleCard>
          <DescCard>
            É realizada por profissionais de saúde treinados, e o material utilizado é de uso único, estéril e descartável. 
            A cada doação, é coletada uma bolsa de sangue de aproximadamente 450 ml.
          </DescCard>
        </ContainerCards>

      </Container>
    </>
  );
}

export default _MainPage;


// import React, { useState, useEffect } from 'react';
// import { BsCheckBox } from 'react-icons/bs'
// import './styles.css'
// import NavBarUserPage from '../../../components/Navbar/NavBarUserPage'

// function _MainPage() {
//   const [info, setInfo] = useState({ })

//   // Pegando informações do LocalStorage
//   useEffect(() => {
//     async function getInfos() {
//       const userData = await localStorage.getItem('infos')
//       const obj = JSON.parse(userData)
//       setInfo(obj)
//     }
//     getInfos()
//   }, [])


//   return (
//       <>
//         <NavBarUserPage />

//         <div className="container-user-page">
//           <div id="container-card-message">
//             <p id="title-card-message">Olá Guilherme</p>
//             <p id="desc-card-message"></p>
//             <button id="btn-card-message">Saiba Mais</button>
//           </div>

//           <div id="container-cards">
//             <div id="cards">
//               <p id="title-card-info">COM UM ATO DE SOLIDARIEDADE, VOCÊ PODE SALVAR ATÉ 4 VIDAS.</p>
//               <p id="desc-card-info">A doação é um procedimento totalmente seguro. O volume coletado é de aproximadamente 450 ml (padrão internacional), o que representa uma fração muito pequena do total de sangue de um adulto.</p>
//             </div>
//             <div id="cards">
//               <p id="title-card-info">RAZÕES PARA DOAR SANGUE</p>
//               <p id="desc-card-info">As bolsas de sangue coletadas anualmente no país – ao todo são 3,5 milhões – são insuficientes para atender à demanda. O ideal, segundo o Ministério da Saúde, é alcançar 5,7 milhões de bolsas a cada ano;</p>
//             </div>
//             <div id="cards-extend">
//               <p id="title-card-info">O QUE VOCÊ PRECISA PARA DOAR SANGUE?</p>
//               <div id="list-card-info">
//                 <p><BsCheckBox size={25}/></p>
//                 <p id="item-list-card-info">Apresentar um documento oficial com foto (RG, CNH, etc.) em bom estado de conservação.</p>
//               </div>
//               <div id="list-card-info">
//                 <p><BsCheckBox size={25}/></p>
//                 <p id="item-list-card-info">Estar em boas condições de saúde e pesar no mínimo 50 kg.</p>
//               </div>
//               <div id="list-card-info">
//                 <p><BsCheckBox size={25}/></p>
//                 <p id="item-list-card-info">Não ter feito uso de bebida alcoólica nas últimas 12 horas.</p>
//               </div>
//               <div id="list-card-info">
//                 <p><BsCheckBox size={25}/></p>
//                 <p id="item-list-card-info">Após o almoço ou ingestão de alimentos gordurosos, aguardar 3 horas. Não é necessário estar em jejum.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </>
//   );
// }

// export default _MainPage;