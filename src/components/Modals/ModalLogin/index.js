// Este é o modal de login (recebe informações via propriedades do _Content-Initial)

import React from 'react';
import './styles.css'
import { slideInRight } from 'react-animations';
import { BsArrowLeft } from 'react-icons/bs'

import Radium, {StyleRoot} from 'radium';
 
const styles = {
  fade: {
    animation: 'x 0.5s',
    animationName: Radium.keyframes(slideInRight, 'fade')
  }
}

function ModalLogin(props) {
  const [section, setSection] = React.useState(true)

  const handleSectionForgot = () => setSection(false)
  const handleSectionLogin = () => setSection(true)

  return (
    <>
    <StyleRoot>
      <div className="container-modal-log" style={styles.fade}>
        <div id="content-modal-log">
          <div id="icon-top">{props.buttonclose}</div>
          {section ? (
            <div id="container-form">
              <p id="formtitleLog">Acessar</p>
              <p id="infotext">Bem vindo de volta</p>
              <form>
                <input type="text" placeholder="E-mail"/>
                <input type="text" placeholder="Senha"/>
                <button id="esqsenha" onClick={handleSectionForgot}>Esqueci minha senha</button>
                <button id="btnEventLog">Acessar</button>
              </form>
            </div>
          ): 
          <div id="container-form">
              <p id="formtitleLog">Alterar senha</p>
              <form>
                <input type="text" placeholder="Digite a nova senha"/>
                <input type="text" placeholder="Confirme a senha"/>
                <button id="esqsenha" 
                  onClick={handleSectionLogin}>
                  <BsArrowLeft size={20}/> Voltar para login
                </button>
                <button id="btnEventLog">Alterar</button>
              </form>
            </div>
          }
        </div>
      </div>
      </StyleRoot>
    </>
  );
}

export default ModalLogin;