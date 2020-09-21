import React, { useState, useEffect } from 'react';
import './styles.css'

import img1 from '../../../assets/imgs/imgMain4.jpg'
import img2 from '../../../assets/imgs/imgMain2.jpg'
import img3 from '../../../assets/imgs/imgMain3.jpg'

import { AiOutlineCheck } from 'react-icons/ai'
import NavBarUserPage from '../../../components/Navbar/NavBarUserPage'

function _MainPage() {
  const [info, setInfo] = useState({ })

  useEffect(() => {
    async function getInfos() {
      const userData = await localStorage.getItem('infos')
      const obj = JSON.parse(userData)
      setInfo(obj)
    }
    getInfos()
  }, [])


  return (
      <>
        <div className="container-user-page">
          <NavBarUserPage />

          <section id="sccard">
            <div id="texts-seccard">
                <p id="title-sec1">Olá {info.name}</p>
              <p id="desc-sec1">A doação de sangue é um ato voluntario e altruísta de extrema importância, pois o sangue humano não pode ser fabricado artificialmente.</p>
              <button id="btnMainPageUser">Saiba mais</button>
            </div>
          </section>

          <section id="sc1">
            <div id="texts-sec1">
              <p id="title-sec1">PORQUE DOAR SANGUE</p>
              <p id="desc-sec1">A doação de sangue é um ato voluntario e altruísta de extrema importância, pois o sangue humano não pode ser fabricado artificialmente.</p>
            </div>
            <img id="img1" src={img1} alt="Imagem"/>
          </section>

          <section id="sc3">
            <img id="img2" src={img2} alt="Imagem"/>
            <div id="texts-sec1">
              <p id="title-sec1">COM UM ATO DE SOLIDARIEDADE, VOCÊ PODE SALVAR ATÉ 4 VIDAS.</p>
              <p id="desc-sec1">A doação de sangue é um ato voluntario e altruísta de extrema importância, pois o sangue humano não pode ser fabricado artificialmente.</p>
            </div>
          </section>

          <section id="sc4">
            <div id="texts-sec1">
              <p id="title-sec1">É POUCO PARA VOCÊ E MUITO PARA QUEM PRECISA!</p>
              <p id="desc-list-sec1"><AiOutlineCheck size={20} color={"green"}/>O volume doado é reposto pelo organismo em 24h após a doação.</p>
              <p id="desc-list-sec1"><AiOutlineCheck size={20} color={"green"}/>O doador não se expõe a nenhum risco de contaminação, pois todo o material utilizado é estéril e descartável.</p>
              <p id="desc-list-sec1"><AiOutlineCheck size={20} color={"green"}/>Não exige mais doações, ou seja, quem doa uma vez, não precisa obrigatoriamente doar novamente.</p>
            </div>
            <img id="img3" src={img3} alt="Imagem"/>
          </section>

        </div>
      </>
  );
}

export default _MainPage;