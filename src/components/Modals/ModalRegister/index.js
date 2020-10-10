// Este é o modal de cadastro (recebe informações via propriedades do _Content-Initial)

import React, { useState } from 'react';
import Radium, {StyleRoot} from 'radium';
import { slideInRight } from 'react-animations';
import { useHistory } from 'react-router-dom'
import './styles.css'
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
  const [ConfirmPassword, setConfirmPassword] = useState('')
  const [age, setAge] = useState('')
  const [cpf, setCfp] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await api.post("/register", { 
          name, 
          email, 
          cpf, 
          password, 
          age, 
          bio: '', adress: '', cell: '', phone: '', bloodtype: ''
        })
        .then((response) => {
          const { user, token } = response.data
          login(token)
          localStorage.setItem("infos", JSON.stringify(user))
          history.push("Home")
        })
        .catch((err) => console.log(err))
    }
    catch (error) {
      console.log(`Erro ao cadastrar usuário ${error}`)
    }
    
  }
  return (
    <>
      <StyleRoot>
        <div className="container-modal" style={styles.fade}>
            <div id="icon-top">{props.buttonclose}</div>
            
            <div id="container-form">
              <div id="texts-container-modal-cad">
                <p id="title-modal-cad">Porque doar sangue?</p>
                <p id="text-modal-cad">A doação de sangue é um ato voluntario e altruísta de extrema importância, pois o sangue humano não pode ser fabricado artificialmente.</p>
              </div>
              <hr id="linha-modal-cad"/>
              <div id="texts-container-modal-cad">
                <p id="title-modal-cad">Razões para doar sangue</p>
                <p id="text-modal-cad">As bolsas de sangue coletadas anualmente no país – ao todo são 3,5 milhões – são insuficientes para atender à demanda. O ideal, segundo o Ministério da Saúde, é alcançar 5,7 milhões de bolsas a cada ano.</p>
              </div>
            </div>

            <div id="form-container-cad">
              <div id="content-form">
                <p id="title-form-cad">Criar Conta</p>
                <p id="desc-form-cad">Tem sempre alguém esperando sua doação. Não cruze os braços para esse problema. Crie sua conta e venha conectar vidas. </p>
                
                <form onSubmit={handleSubmit} id="formCad">
                    <label id="label-form-cad">Nome</label>
                    <input id="input-form-cad" onChange={(e) => setName(e.target.value)} autoComplete="off" placeholder="Nome"/>
                    <label id="label-form-cad">Email</label>
                    <input id="input-form-cad" type="email" onChange={(e) => setEmail(e.target.value)} autoComplete="off" placeholder="E-Mail"/>
                    <label id="label-form-cad">CPF e Idade</label>
                  <div id="inputs-infos">
                    <input id="input-form-cad2" onChange={(e) => setCfp(e.target.value)} autoComplete="off" placeholder="CPF"/>
                    <input id="input-form-cad2" onChange={(e) => setAge(e.target.value)} autoComplete="off" placeholder="Idade"/>
                  </div>
                  <label id="label-form-cad">Senha</label>
                  <div id="inputs-password">
                    <input id="input-form-cad2" type="password" onChange={(e) => setPassword(e.target.value)} autoComplete="off" placeholder="Senha"/>
                    <input id="input-form-cad2" type="password" onChange={(e) => setConfirmPassword(e.target.value)} autoComplete="off" placeholder="Confirme a senha"/>
                  </div> 
                  <button id="btn-form-cad">Cadastrar</button>
                </form>
              </div>
            </div>
          </div>
      </StyleRoot>
    </>
  );
}

export default ModalRegister;