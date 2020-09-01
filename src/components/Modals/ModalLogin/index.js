// Este é o modal de login (recebe informações via propriedades do _Content-Initial)

import React from 'react';
import './styles.css'
import { slideInRight } from 'react-animations';

import Radium, {StyleRoot} from 'radium';
 
const styles = {
  fade: {
    animation: 'x 0.5s',
    animationName: Radium.keyframes(slideInRight, 'fade')
  }
}

function ModalLogin(props) {
  return (
    <>
    <StyleRoot>
      <div className="container-modal-log" style={styles.fade}>
        <div id="content-modal-log">
          <div id="icon-top">{props.buttonclose}</div>
          <div id="container-form">
            <p id="formtitleLog">Acessar</p>
            <p id="infotext">Bem vindo de volta</p>
            <form>
              <input type="text" placeholder="E-mail"/>
              <input type="text" placeholder="Senha"/>
              <p id="esqsenha">Esqueci minha senha</p>
              <button id="btnEventLog">Acessar</button>
            </form>
          </div>
        </div>
      </div>
      </StyleRoot>
    </>
  );
}

export default ModalLogin;