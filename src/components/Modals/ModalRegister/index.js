// Este é o modal de cadastro (recebe informações via propriedades do _Content-Initial)

import React from 'react';
import './styles.css'
import { slideInRight } from 'react-animations';
import axios from '../../../service/api'

import Radium, {StyleRoot} from 'radium';
 
const styles = {
  fade: {
    animation: 'x 0.5s',
    animationName: Radium.keyframes(slideInRight, 'fade')
  }
}

function ModalRegister(props) {
  const [data, setData] = React.useState({email: ''})

  const handleSendEmail = async () => {
    const response = await axios.post('/send-email', {
      email: data.email
    })

    return console.log(response)
  }
  return (
    <>
    <StyleRoot>
      <div className="container-modal" style={styles.fade}>
        <div id="content-modal">
          <div id="icon-top">{props.buttonclose}</div>
          <div id="container-form">
            <p id="formtitleLog">Cadastrar</p>
            <p id="infotext">Informe seu E-mail abaixo e venha conectar vidas</p>
            <form onSubmit={handleSendEmail}>
              <input type="text" onChange={(e) => setData({email: e.target.value})} placeholder="E-mail"/>
              <button id="btnEventLog">Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
      </StyleRoot>
    </>
  );
}

export default ModalRegister;