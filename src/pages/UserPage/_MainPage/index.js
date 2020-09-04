import React from 'react';
import './styles.css'

import img1 from '../../../assets/imgs/imgMain4.jpg'
import img2 from '../../../assets/imgs/imgMain2.jpg'
import img3 from '../../../assets/imgs/imgMain3.jpg'

import NavBar from '../../../components/NavBarUserPage/index'

function _MainPage() {
  return (
      <>
        <div className="container-user-page">
        <NavBar />

        <div id="container-content-user-page">
          <div id="content1">
            <div id="content1-texts-user-page">
              <p id="title-content1">Porque doar sangue</p>
              <p id="desc-content1">
                A doação de sangue é um ato voluntario e altruísta de extrema
                importância, pois o sangue humano não pode ser fabricado
                artificialmente.
              </p>
            </div>
            <img id="img1" src={img1} alt="Imagem Home" />
          </div>


          <div id="content2">
            <div id="content2-texts-user-page">
              <p id="title-content2">
                SAIBA TUDO SOBRE O SANGUE E O PROCESSO DE DOAÇÃO.
              </p>
              <p id="desc-content2">
                Em muitos casos, a transfusão de sangue é a única esperança de
                vida para nossos pacientes. Tem sempre alguém esperando sua
                doação. Não cruze os braços para esse problema. Doar sangue não
                dói, é fácil, rápido, não afeta a sua saúde e você salva muitas
                vidas.
              </p>
            </div>
            <img id="img2" src={img2} alt="Imagem Home" />
          </div>


          <div id="content3">
            <div id="content3-texts-user-page">
              <p id="title-content3">
                COM UM ATO DE SOLIDARIEDADE, VOCÊ PODE SALVAR ATÉ 4 VIDAS.
              </p>
              <p id="desc-content3">
                A doação é um procedimento totalmente seguro. O volume coletado
                é de aproximadamente 450 ml (padrão internacional), o que
                representa uma fração muito pequena do total de sangue de um
                adulto.
              </p>
            </div>
            <img id="img3" src={img3} alt="Imagem Home" />
          </div>


          <div id="content4">
            <div id="content4-texts-user-page">
              <p id="title-content4">
                É POUCO PARA VOCÊ E MUITO PARA QUEM PRECISA!
              </p>
              <hr id="linha"/>
               <ul>
                   <li id="desc-content4">O volume doado é reposto naturalmente pelo organismo em 24h após a doação.</li>
                   <li id="desc-content4">A doação de sangue não engorda e nem emagrece, não afina e nem engrossa o sangue.</li>
                   <li id="desc-content4">Não exige mais doações, ou seja, quem doa uma vez, não precisa obrigatoriamente doar novamente.</li>
               </ul>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default _MainPage;