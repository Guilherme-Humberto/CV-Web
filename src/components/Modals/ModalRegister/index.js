import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import api from '../../../service/api'
import { login } from '../../../config/auth'
import Input from '../../Form'

import {
  Container,
  ButtonModal,
  Text,
  Title,
  ButtonCloseModal,
  FormContainer
} from './styles';

function validateField() {
  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Digite seu nome e sobrenome"),
    email: Yup.string()
      .email("Digite um email válido")
      .required("Digite seu email"),
    age: Yup.string()
      .max(2, "Digite um valor válido")
      .min(2, "Digite um valor válido")
      .required("Digite seu idade"),
    password: Yup.string()
      .min(5, "Digite no minímo 6 dígitos")
      .max(8, "Digite no máximo 8 dígitos"),
  })

  return schema
}

const ModalRegister = ({ buttonclose }) => {
  const formRef = useRef(null)
  const history = useHistory(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [password, setPassword] = useState('')
  const [bio] = useState('')
  const [adress] = useState('')
  const [cell] = useState('')
  const [blood] = useState('')

  async function handleSubmit(data, { reset }) {
    try {
      const schema = validateField()
      formRef.current.setErrors({})

      await schema.validate(data, {
        abortEarly: false
      });

      reset()

      await api.post("/register", {
        name, email, age, password,
        bio, adress, cell, blood
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
      const validationErrors = {}

      if(err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message
        })

        formRef.current.setErrors(validationErrors)
      }
    }
  }
  return (
    <Container
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ButtonCloseModal onClick={buttonclose}>
        <AiOutlineClose size={35} />
      </ButtonCloseModal>
      <FormContainer>
        <Title>Criar Conta</Title>
        <Text>Crie sua conta</Text>
        <Form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          id="formContent"
        >
          <Input
            name="name"
            label="Nome e Sobrenome"
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome e Sobrenome"
          />
          <Input
            name="email"
            label="E-Mail"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            name="age"
            label="Idade"
            defaultValue={undefined}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Idade"
          />
          <Input
            label="Senha"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <ButtonModal type="submit">Cadastrar</ButtonModal>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default ModalRegister;
