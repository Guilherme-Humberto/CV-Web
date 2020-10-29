import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

import api from '../../../service/api'
import { login } from '../../../config/auth'

import {
  ButtonCloseModal,
  Container,
  ButtonModal,
  Input,
  Text,
  Title,
  Form
} from './styles';

const ModalLogin = ({ buttonclose }) => {
  const history = useHistory(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isForgotPassword, setIsForgotPassword] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await api.post("/login", { email, password }).then((response) => {
          const { user, token } = response.data
            login(token)
            localStorage.setItem("infos", JSON.stringify(user))
            history.push("Home")
        })
        .catch((err) => console.log(err))
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <ButtonCloseModal onClick={buttonclose}>
        <AiOutlineClose size={35}/>
      </ButtonCloseModal>
      {isForgotPassword ? (
        <>
          <Title>Alterar Senha</Title>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, vitae.</Text>
          <Input type="text" placeholder="Nova senha" />
          <Input type="text" placeholder="Confirmar Senha" />
          <Text
            onClick={() => setIsForgotPassword(false)}
            style={{
              color: "red",
              cursor: "pointer"
            }}>Voltar
                  </Text>
          <ButtonModal>Alterar</ButtonModal>
        </>
      ) : (
          <Form onSubmit={handleSubmit}>
            <Title>Acessar</Title>
            <Text>
              Bem vindo de volta
            </Text>
            <Input 
              type="text" 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email" 
            />
            <Input 
              type="password" 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Senha" 
            />
            <Text
              onClick={() => setIsForgotPassword(true)}
              style={{
                color: "red",
                cursor: "pointer"
              }}>Esqueci minha senha
                    </Text>
            <ButtonModal type="submit">
              Acessar
            </ButtonModal>
          </Form>
        )}
    </Container>
  );
};

export default ModalLogin;
