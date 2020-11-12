// // Este é o componente com os depoimentos do doadores de sangue (Chamado no content-initial)

import React from 'react';

import { 
  Container,
  ContainerCards,
  Card,
  Title,
  Desc
} from './styles';

function _Depoiments() {
  return (
    <Container>
      <ContainerCards>
        <Card>
          <Title>João Victor</Title>
          <Desc>
            "A doação de sangue é algo de extrema importância, que deve
            ser um hábito de todos. É rápido, fácil e não dói! Sem
            contar com a sensação ótima de poder estar salvando vidas! A
            doação nos torna ainda mais próximos como seres humanos,
            pois um pouco de nós pode estar com qualquer um nesse
            momento. Vem doar sangue você também!"
          </Desc>
        </Card>
        <Card
          drag
          dragConstraints={{
            top: -0,
            left: -0,
            right: 0,
            bottom: 0,
          }}
        >
          <Title>Rafael Takase</Title>
          <Desc>
            "Doar Sangue é um ato de solidariedade, é um simples gesto
            que pode salvar muitas vidas. Doar sangue é muito simples e
            não dói, é gerar vida através de vida. Precisamos nos
            conscientizar tirar alguns minutos do nosso tão precioso
            tempo e ajudar. Doe sangue, e multiplique solidariedade,
            atitude, esperança, saúde, vida e amor."
          </Desc>
        </Card>
        <Card
          drag
          dragConstraints={{
            top: -0,
            left: -0,
            right: 0,
            bottom: 0,
          }}
        >
          <Title>Bruno Assis</Title>
          <Desc>
            “Realizei minha primeira doação de sangue há pouco tempo
            atrás, muito embora tal ato já estivesse sido debatido em
            outros momentos. Porém, devido à correria do dia a dia e até
            mesmo o receio das temidas agulhas, fizeram com que este
            momento sempre fosse postergado."
          </Desc>
        </Card>
      </ContainerCards>
    </Container>
  );
}

export default _Depoiments;

// import React from 'react';
// import './styles.css'



// function Depoiments() {
//   return (
//     <>
//       <div className="container-depoiments">
//           <div className="content-card-all">
//             <div id="texts-top-slide">
//               <p id="title-depo">Depoimentos de</p>
//               <p id="desc-depo">Doadores de sangue</p>
//             </div>
//           <div
//             id="carouselExampleSlidesOnly"
//             className="carousel slide"
//             data-ride="carousel"
//           >
//             <div className="carousel-inner">
//               <div className="carousel-item active">
//                 <div id="card-depoiment">
//                   <p id="text-depo">
//                     "A doação de sangue é algo de extrema importância, que deve
//                     ser um hábito de todos. É rápido, fácil e não dói! Sem
//                     contar com a sensação ótima de poder estar salvando vidas! A
//                     doação nos torna ainda mais próximos como seres humanos,
//                     pois um pouco de nós pode estar com qualquer um nesse
//                     momento. Vem doar sangue você também!"
//                   </p>
//                   <img id="img-depo" src={imgDepo1} alt="Imagem usuário"/>
//                   <div id="texts-people-card">
//                     <p id="name-depo">Daniela Menegat</p>
//                     <p id="text-depo-decoration">Doadora de Sangue</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="carousel-item">
//                 <div id="card-depoiment">
//                   <p id="text-depo">
//                     "Doar Sangue é um ato de solidariedade, é um simples gesto
//                     que pode salvar muitas vidas. Doar sangue é muito simples e
//                     não dói, é gerar vida através de vida. Precisamos nos
//                     conscientizar tirar alguns minutos do nosso tão precioso
//                     tempo e ajudar. Doe sangue, e multiplique solidariedade,
//                     atitude, esperança, saúde, vida e amor."
//                   </p>
//                   <img id="img-depo" src={imgDepo2} alt="Imagem usuário"/>
//                   <p id="name-depo">Alef Cemin</p>
//                   <p id="text-depo-decoration">Doador de Sangue</p>
//                 </div>
//               </div>
//               <div className="carousel-item">
//                 <div id="card-depoiment">
//                   <p id="text-depo">
//                     “Realizei minha primeira doação de sangue há pouco tempo
//                     atrás, muito embora tal ato já estivesse sido debatido em
//                     outros momentos. Porém, devido à correria do dia a dia e até
//                     mesmo o receio das temidas agulhas, fizeram com que este
//                     momento sempre fosse postergado."
//                   </p>
//                   <img id="img-depo" src={imgDepo3} alt="Imagem usuário"/>
//                   <p id="name-depo">Marilia Cagnin</p>
//                   <p id="text-depo-decoration">Doadora de Sangue</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </div>
//         </div>
//     </>
//   );
// }

// export default Depoiments;