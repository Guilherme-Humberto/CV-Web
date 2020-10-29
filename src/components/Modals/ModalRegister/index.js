import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

import api from '../../../service/api'
import { login } from '../../../config/auth'

import {
  Container,
  ButtonModal,
  Input,
  Text,
  Title,
  ButtonCloseModal,
  Form
} from './styles';

const ModalRegister = ({ buttonclose }) => {
  const history = useHistory(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [password, setPassword] = useState('')
  const [bio] = useState('')
  const [adress] = useState('')
  const [cell] = useState('')
  const [bloodtype] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await api.post("/register", { 
        name, email, age, password,
        bio, adress, cell, bloodtype 
      })
      .then((response) => {
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
        <AiOutlineClose size={35} />
      </ButtonCloseModal>
      <Form onSubmit={handleSubmit}>
        <Title>Criar Conta</Title>
        <Text>
          Não perca mais tempo, salve a vide outras pessoas. Conecte Vidas.
        </Text>
        <Input 
          type="text" 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Nome Completo" 
        />
        <Input 
          type="text" 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
        />
        <Input 
          type="text" 
          onChange={(e) => setAge(e.target.value)} 
          placeholder="Idade" 
        />
        <div>
          <Input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Senha" 
          />
          <Input 
            type="text" 
            placeholder="Confirmar Senha" 
          />
        </div>
        <ButtonModal>Cadastrar</ButtonModal>
      </Form>
    </Container>
  );
};

export default ModalRegister;
