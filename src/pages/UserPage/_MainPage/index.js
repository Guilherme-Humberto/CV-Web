import React, { useState, useEffect } from 'react';
import { BsCheckBox } from 'react-icons/bs'
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './styles.css'
import NavBarUserPage from '../../../components/Navbar/NavBarUserPage'

// Realizando a animação quando o modal é aberto
const styles = {
  fade: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fade')
  }
}


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
        <NavBarUserPage />
        <StyleRoot>
        <div className="container-user-page" style={styles.fade}>
          <div id="container-card-message">
            <p id="title-card-message">Olá {info.name}</p>
            <p id="desc-card-message">Sabia que o Conectando Vidas também tem um aplicativo? Faça o download para continuar conectado :)</p>
            <button id="btn-card-message">Saiba Mais</button>
          </div>

          <div id="container-cards">
            <div id="cards">
              <p id="title-card-info">COM UM ATO DE SOLIDARIEDADE, VOCÊ PODE SALVAR ATÉ 4 VIDAS.</p>
              <p id="desc-card-info">A doação é um procedimento totalmente seguro. O volume coletado é de aproximadamente 450 ml (padrão internacional), o que representa uma fração muito pequena do total de sangue de um adulto.</p>
            </div>
            <div id="cards">
              <p id="title-card-info">RAZÕES PARA DOAR SANGUE</p>
              <p id="desc-card-info">As bolsas de sangue coletadas anualmente no país – ao todo são 3,5 milhões – são insuficientes para atender à demanda. O ideal, segundo o Ministério da Saúde, é alcançar 5,7 milhões de bolsas a cada ano;</p>
            </div>
            <div id="cards-extend">
              <p id="title-card-info">O QUE VOCÊ PRECISA PARA DOAR SANGUE?</p>
              <div id="list-card-info">
                <p><BsCheckBox size={25}/></p>
                <p id="item-list-card-info">Apresentar um documento oficial com foto (RG, CNH, etc.) em bom estado de conservação.</p>
              </div>
              <div id="list-card-info">
                <p><BsCheckBox size={25}/></p>
                <p id="item-list-card-info">Estar em boas condições de saúde e pesar no mínimo 50 kg.</p>
              </div>
              <div id="list-card-info">
                <p><BsCheckBox size={25}/></p>
                <p id="item-list-card-info">Não ter feito uso de bebida alcoólica nas últimas 12 horas.</p>
              </div>
              <div id="list-card-info">
                <p><BsCheckBox size={25}/></p>
                <p id="item-list-card-info">Após o almoço ou ingestão de alimentos gordurosos, aguardar 3 horas. Não é necessário estar em jejum.</p>
              </div>
            </div>
          </div>
        </div>
        </StyleRoot>
      </>
  );
}

export default _MainPage;