import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { Form } from '@unform/web'
import * as Yup from 'yup'


import api from '../../../service/api'
import { login } from '../../../config/auth'
import Input from '../../Form'

import {
  ButtonCloseModal,
  Container,
  ButtonModal,
  Text,
  Title,
  FormContainer
} from './styles';

function validateField() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um email válido")
      .required("Digite seu email"),
    password: Yup.string()
      .min(5, "Digite no minímo 5 dígitos")
      .max(8, "Digite no máximo 8 dígitos"),
    confimPassword: Yup.string()
      .min(5, "Digite no minímo 5 dígitos")
      .max(8, "Digite no máximo 8 dígitos")
  })

  return schema
}

const ModalLogin = ({ buttonclose }) => {
  const formRef = useRef(null)
  const history = useHistory(null)

  const [invalidPassword, setInvalidPassword] = useState("")
  const [userNotFound, setUserNotFound] = useState("")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isForgotPassword, setIsForgotPassword] = useState(false)

  async function handleSubmit(data, { reset }) {
    try {
      const schema = validateField()
      formRef.current.setErrors({})

      await schema.validate(data, {
        abortEarly: false
      });

      if (data.password !== data.confimPassword) {
        setInvalidPassword("As Senha não correspondem")
      }

      reset()
      await api.post("/login", {
        email,
        password
      })
        .then((response) => {
          const { user, token } = response.data
          login(token)
          localStorage.setItem("infos", JSON.stringify(user))
          history.push("Home")
        })
        .catch(() => {
          setUserNotFound("Usuário não encontrado, revise as informações.")
        })

    } catch (err) {
      const validationErrors = {}

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message
        })

        formRef.current.setErrors(validationErrors)
      }
    }
  }

  async function handleForgotPassword(data, { reset }) {
    try {
      const schema = validateField()
      formRef.current.setErrors({})

      await schema.validate(data, {
        abortEarly: false
      });

      if (data.password !== data.confimPassword) {
        setInvalidPassword("As senhas não correspondem")
      } else {
        await api.put("/forgot", { email, password })
          .then((response) => {
            const { users, token } = response.data
            login(token)
            localStorage.setItem("infos", JSON.stringify(users))
            history.push("Home")
          })
          .catch(err => console.log(err))
      }
    }
    catch (err) {
      const validationErrors = {}

      if (err instanceof Yup.ValidationError) {
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
      {isForgotPassword ? (
        <>
          <FormContainer>
            <Title>Alterar Senha</Title>
            <Text>
              Preencha os dados abaixo para alterar sua senha
            </Text>
            <Text style={{ color: "red" }}>{invalidPassword}</Text>
            <Form ref={formRef} onSubmit={handleForgotPassword}>
              <Input
                name="email"
                label="E-Mail"
                type="text"
                placeholder="Seu E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                name="password"
                label="Nova Senha"
                type="password"
                placeholder="Nova senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                name="confimPassword"
                label="Confirmar Senha"
                type="password"
                placeholder="Confirmar Senha"
              />
              <Text
                onClick={() => setIsForgotPassword(false)}
                style={{
                  color: "blue",
                  cursor: "pointer"
                }}>Voltar
              </Text>
              <ButtonModal type="submit">Alterar</ButtonModal>
            </Form>
          </FormContainer>
        </>
      ) : (
          <FormContainer>
            <Title>Acessar</Title>
            <Text>
              Bem vindo de volta
            </Text>
            <Text style={{ color: "red" }}>{userNotFound}</Text>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                name="email"
                label="E-Mail"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <Input
                label="Senha"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
              />
              <Text
                onClick={() => setIsForgotPassword(true)}
                style={{
                  color: "blue",
                  cursor: "pointer"
                }}>Esqueci minha senha
            </Text>
              <ButtonModal type="submit">Acessar</ButtonModal>
            </Form>
          </FormContainer>
        )}
    </Container>
  );
};

export default ModalLogin;
