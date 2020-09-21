// Este é o modal de cadastro (recebe informações via propriedades do _Content-Initial)

import React, { useState } from 'react';
import './styles.css'
import Radium, {StyleRoot} from 'radium';
import { slideInRight } from 'react-animations';
import { useHistory } from 'react-router-dom'
import api from '../../../service/api'
import { login } from '../../../config/auth'

// Implementando código para gerar animação
const styles = {
  fade: {
    animation: 'x 0.5s',
    animationName: Radium.keyframes(slideInRight, 'fade')
  }
}


function ModalRegister(props) {
  // Variável para redirecionar usuário
  const history = useHistory(null)

  // Estado que guardam valores dos inputs
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')
  const [cpf, setCfp] = useState('')

  const handleSendEmail = async (e) => {
    e.preventDefault();
    try {
        const response = await api.post("/register", {
          name: name,
          email: email,
          password: password,
          age: age,
          cpf: cpf
        })
        const { token , user } = response.data
        login(token)
        localStorage.setItem("infos", JSON.stringify(user))
        history.push("Home")
    }
    catch (error) {
      console.log(`Erro ao cadastrar usuário ${error}`)
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
                    type="email"
                    value={email}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                  />
                  <input
                    id="input-cad"
                    name="password"
                    type="password"
                    value={password}
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                    color={"white"}
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