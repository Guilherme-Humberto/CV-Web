import React, { useState, useEffect } from 'react';
import { BsCheckBox } from 'react-icons/bs'

import './styles.css'
import NavBarUserPage from '../../../components/Navbar/NavBarUserPage'

function _MainPage() {
  const [info, setInfo] = useState({ })

  // Pegando informações do LocalStorage
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
                <p id="title-sec1">Olá {info.nome}</p>
              <p id="desc-seccard">
                Sabia que o Conectando Vidas também tem um aplicativo? Faça o download e continue sempre conectado
              </p>
              <button id="btnMainPageUser">Saiba mais</button>
            </div>
          </section>

          <section id="sc1">
            <div id="texts-sec1">
              <p id="title-sec1">PORQUE DOAR SANGUE</p>
              <p id="desc-sec1">A doação de sangue é um ato voluntario e altruísta de extrema importância, pois o sangue humano não pode ser fabricado artificialmente.</p>
            </div>
            <div id="vertical-line"></div>
            <div id="texts-sec1">
              <p id="title-sec1">COM UM ATO DE SOLIDARIEDADE, VOCÊ PODE SALVAR ATÉ 4 VIDAS.</p>
              <p id="desc-sec1">A doação de sangue é um ato voluntario e altruísta de extrema importância, pois o sangue humano não pode ser fabricado artificialmente.</p>
            </div>
          </section>

          <section id="sc2">
            <div id="container-content">
              <p id="titleCard2">O QUE VOCÊ PRECISA PARA DOAR SANGUE?</p>
              <div id="descs-container">
                <p><BsCheckBox color={"green"} size={30}/></p>
                <p id="descCard2">Apresentar um documento oficial com foto (RG, CNH, etc.) em bom estado de conservação;</p>
              </div>
              <div id="descs-container">
                <p><BsCheckBox color={"green"} size={30}/></p>
                <p id="descCard2">Ter idade entre 16 e 69 anos desde que a primeira doação seja realizada até os 60 anos (menores de idade precisam de autorização e presença dos pais no momento da doação);</p>
              </div>
              <div id="descs-container">
                <p><BsCheckBox color={"green"} size={30}/></p>
                <p id="descCard2">Apresentar um documento oficial com foto (RG, CNH, etc.) em bom estado de conservação;</p>
              </div>
            </div>
          </section>

        </div>
      </>
  );
}

export default _MainPage;