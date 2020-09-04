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

const fields = {
  name: '',
  email: '',
  password: '',
  age: '',
  cpf: ''
}

function ModalRegister(props) {
  const [data, setData] = React.useState(fields)

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
            <div id="content-modal-container">
              <div id="container-form-cad">
                <p id="formtitleCad">Criar Conta</p>
                <p id="infotext">
                  Informe seus dados abaixo e venha conectar vidas
                </p>
                <form onSubmit={handleSendEmail}>
                  <input
                    id="input-cad"
                    type="text"
                    onChange={(e) => setData({ name: e.target.value })}
                    placeholder="Nome"
                  />
                  <input
                    id="input-cad"
                    type="text"
                    onChange={(e) => setData({ email: e.target.value })}
                    placeholder="E-mail"
                  />
                  <input
                    id="input-cad"
                    type="text"
                    onChange={(e) => setData({ password: e.target.value })}
                    placeholder="Senha"
                  />
                  <div id="container-inputs-cad">
                    <input
                      id="input-age"
                      type="text"
                      onChange={(e) => setData({ age: e.target.value })}
                      placeholder="Idade"
                    />
                    <input
                      id="input-cpf"
                      type="text"
                      onChange={(e) => setData({ cpf: e.target.value })}
                      placeholder="CPF"
                    />
                  </div>
                  <button id="btnEventCad">Cadastrar</button>
                </form>
              </div>
              <div id="texts-modal-decoration">
                <p id="icon-modal-decoration">Conectando Vidas</p>
                <p id="title-modal-decoration">
                  Junte-se a milhares de doadores.
                </p>
                <p id="text-modal-decoration">
                  Mais de 200 mil doadores já estão conectados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </StyleRoot>
    </>
  );
}

export default ModalRegister;