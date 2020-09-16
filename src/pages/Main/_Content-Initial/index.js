// Este é componente responsável por passar os props para a navbar do página inicial

import React, { useState } from 'react';
import './styles.css'

import imgHome from '../../../assets/imgs/imgHome.jpg'

import NavBar from '../../../components/Navbar/NavBarMain'
import { BsArrowRight } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import ModalLogin from '../../../components/Modals/ModalLogin'
import ModalRegister from '../../../components/Modals/ModalRegister'

function Initial() {
  // Estados para a abertura dos modais
  // Falso fechados, True abertos
  const [isActiveLog, setIsActiveLog] = useState(false)
  const [isActiveCad, setIsActiveCad] = useState(false)

  // Funcões para manipulação dos estados dos modais
  const OpenModalLog = () => setIsActiveLog(true)
  const CloseModalLog = () => setIsActiveLog(false)
  const OpenModalCad = () => setIsActiveCad(true)
  const CloseModalCad = () => setIsActiveCad(false)

  return (
    <>
      <div id="nav-bar">

        {/* Passando propriedades para o navbar */}
          <NavBar
            title="Conectando Vidas"
            nav1="Instituições"
            nav2="Campanhas"
            nav3="Sobre"
            buttonAccess={
              <button id="btnAcceNav" type="button" onClick={OpenModalLog}>
                Acessar
              </button>
            }
            buttonRegister={
              <button id="btnCadNav" onClick={OpenModalCad}>
                Cadastrar
                <div id="arrowBtnCad">
                  <BsArrowRight size={30} />
                </div>
              </button>
            }
          />
        </div>

        <div className="container-content-initial">
          <div id="texts-home">
            <p id="title-initial">Conectando Vidas</p>
            <p id="desc-initial">
              O Conectando Vidas é um app gratuito que tem como objetivo
              incentivar a doação de sangue. O serviço conecta potenciais
              doadores com os hemocentros mais próximos a ele.
            </p>
          </div>
          <div id="Image-home">
            <img id="img-initial" src={imgHome} alt="Imagem Home" />
          </div>
        </div>
        <div className="modals">

          {/* Condicional para abrir os modais */}
          {/* Passando as props para fechar os modais */}
          {/* Modal de Login */}
          {isActiveLog ? (
            <ModalLogin
              buttonclose={
                <button id="closeModalBtn" onClick={CloseModalLog}>
                  <AiOutlineClose size={30} />
                </button>
              }
            />
          ) : null}
          {/* Modal de cadastro */}
          {isActiveCad ? (
            <ModalRegister
              buttonclose={
                <button id="closeModalBtn" onClick={CloseModalCad}>
                  <AiOutlineClose size={30} />
                </button>
              }
            />
          ) : null}
        </div>
    </>
  );
}

export default Initial;