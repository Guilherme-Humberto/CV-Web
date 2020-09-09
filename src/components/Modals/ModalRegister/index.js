// Este é o modal de cadastro (recebe informações via propriedades do _Content-Initial)

import React from 'react';
import './styles.css'
import { slideInRight } from 'react-animations';
import { useHistory } from 'react-router-dom'
import axios from '../../../service/api'

import Radium, {StyleRoot} from 'radium';
 
const styles = {
  fade: {
    animation: 'x 0.5s',
    animationName: Radium.keyframes(slideInRight, 'fade')
  }
}


function ModalRegister(props) {
  const history = useHistory(null)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [age, setAge] = React.useState('')
  const [cpf, setCfp] = React.useState('')

  const handleSendEmail = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("/register", {
        name, email, password, age, cpf
      })
      console.log(response)
      history.push("/Home")
    }
    catch (error) {
      console.log(`Erro ao cadastrar usuário`)
    }
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
                <form autoComplete="off" onSubmit={handleSendEmail}>
                  <input
                    id="input-cad"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome"
                  />
                  <input
                    id="input-cad"
                    name="email"
                    value={email}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                  />
                  <input
                    id="input-cad"
                    name="password"
                    value={password}
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                  />
                  <div id="container-inputs-cad">
                    <input
                      id="input-age"
                      name="age"
                      value={age}
                      autoComplete="off"
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="Idade"
                    />
                    <input
                      id="input-cpf"
                      name="cpf"
                      value={cpf}
                      autoComplete="off"
                      onChange={(e) => setCfp(e.target.value)}
                      placeholder="CPF"
                    />
                  </div>
                  <button id="btnEventCad" type="submit">Cadastrar</button>
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