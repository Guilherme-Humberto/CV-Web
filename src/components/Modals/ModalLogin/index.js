// Este é o modal de login (recebe informações via propriedades do _Content-Initial)

import React, { useState } from 'react';
import './styles.css'
import { BsArrowLeft } from 'react-icons/bs'
import { slideInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

// Realizando a animação quando o modal é aberto
const styles = {
  fade: {
    animation: 'x 0.5s',
    animationName: Radium.keyframes(slideInRight, 'fade')
  }
}

function ModalLogin(props) {
  // Estado para alterar o formulario de login e esqueci minha senha
  const [section, setSection] = useState(true)

  // Funções que alterão o estado entre os formulários
  const handleSectionForgot = () => setSection(false)
  const handleSectionLogin = () => setSection(true)

  return (
    <>
    <StyleRoot>
      <div className="container-modal-log" style={styles.fade}>
        <div id="content-modal-log">
          <div id="icon-top">{props.buttonclose}</div>

          {/* Condição para renderizar os formulários */}
          {/* Se for verdadeiro o formulário de login é renderizado*/}
          {/* Se for falso o formulário de alterar senha é renderizado*/}
          {section ? (
            <div id="container-form">
              <p id="formtitleLog">Acessar</p>
              <p id="infotext">Bem vindo de volta</p>
              <form>
                <input id="input-modal-log" type="text" placeholder="E-mail"/>
                <input id="input-modal-log" type="text" placeholder="Senha"/>
                <button id="esqsenha" onClick={handleSectionForgot}>Esqueci minha senha</button>
                <button id="btnEventLog">Acessar</button>
              </form>
            </div>
          ) : 
          <div id="container-form">
              <p id="formtitleLog">Alterar senha</p>
              <form>
                <input id="input-modal-log" type="text" placeholder="Digite a nova senha"/>
                <input id="input-modal-log" type="text" placeholder="Confirme a senha"/>
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