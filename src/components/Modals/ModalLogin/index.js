// Este é o modal de login (recebe informações via propriedades do _Content-Initial)

import React, { useState } from 'react';
import './styles.css'
import { useHistory } from 'react-router-dom'
import { slideInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import api from '../../../service/api'
import { login } from '../../../config/auth'

// Realizando a animação quando o modal é aberto
const styles = {
  fade: {
    animation: 'x 0.5s',
    animationName: Radium.keyframes(slideInRight, 'fade')
  }
}

function ModalLogin({ buttonclose }) {
  const history = useHistory(null)
  // Estado para alterar o formulario de login e esqueci minha senha
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [section, setSection] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/login", { email, password })
        .then((response) => {
          const { user, token } = response.data
          // Verificando Token, convertendo obj de usuário e armazenando no localstorage
          if(token !== null || token !== undefined) {
            login(token)
            localStorage.setItem("infos", JSON.stringify(user))
            history.push("Home")
          }
          else {
            alert("Este usuário não existe")
          }
        })
        .catch((err) => console.log(err))
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <>
    <StyleRoot>
      <div className="container-modal-log" style={styles.fade}>
        <div id="content-modal-log">
          <div id="icon-top">{buttonclose}</div>

          {/* Condição para renderizar os formulários */}
          {/* Se for verdadeiro o formulário de login é renderizado*/}
          {/* Se for falso o formulário de alterar senha é renderizado*/}
          {section ? (
            <div id="container-form">
              <p id="formtitleLog">Acessar</p>
              <p id="infotext">Bem vindo de volta</p>
              <form onSubmit={handleSubmit}>
                <input onChange={(e) => setEmail(e.target.value)} id="input-modal-log" type="email" placeholder="E-mail"/>
                <input onChange={(e) => setPassword(e.target.value)} id="input-modal-log" type="password" placeholder="Senha"/>
                <button id="esqsenha" 
                  onClick={() => setSection(false)}>
                  Esqueci minha senha
                </button>
                <button type="submit" id="btnEventLog">Acessar</button>
              </form>
            </div>
          ) : 
          <div id="container-form">
              <p id="formtitleLog">Alterar senha</p>
              <form>
                <input id="input-modal-log" type="email" placeholder="E-Mail"/>
                <input id="input-modal-log" type="password" placeholder="Digite a nova senha"/>
                <input id="input-modal-log" type="password" placeholder="Confirme a senha"/>
                <button id="esqsenha" 
                  onClick={() => setSection(true)}>
                  Voltar para login
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