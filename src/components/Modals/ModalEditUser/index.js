import React, { useState, useRef, useMemo } from 'react';
import * as Yup from 'yup'
import { Form } from '@unform/web'
import Input from '../../Form'

import api from '../../../service/api';
import {
  Container,
  ContainerForm,
  InputGroup,
  ContainerImage,
  InputFile,
  ButtonEdit
} from './styles';

function validateField() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Digite seu email")
      .email("Email inválido"),
    adress: Yup.string()
      .required("Digite seu endereço"),
    number: Yup.string()
      .required("Digite o numero"),
    cell: Yup.string()
      .required("Digite seu numero de celular")
  })

  return schema
}

const ModalEditUser = ({ id, closeModal }) => {
  const formRef = useRef(null)

  const [bio, setBio] = useState("")
  const [img, setImage] = useState(null)

  const preview = useMemo(() => {
    return img ? URL.createObjectURL(img) : null
  }, [img])


  async function handleUpdatePerfil(data, { reset }) {
    try {
      const schema = validateField()
      formRef.current.setErrors({})

      await schema.validate(data, {
        abortEarly: false
      });

      reset()

      const dataForm = new FormData()

      dataForm.append("img", img)
      dataForm.append("email", data.email)
      dataForm.append("adress", data.adress)
      dataForm.append("number", data.number)
      dataForm.append("cell", data.cell)
      dataForm.append("bio", bio)

      await api.put(`editUserPerfil/${id}`, dataForm)
        .then(async (response) => {
          localStorage.removeItem("infos")
          localStorage.setItem("infos", JSON.stringify(response.data))
          window.location.reload()
        })
        .catch(err => console.log(err))
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContainerForm>
        <Form ref={formRef} onSubmit={handleUpdatePerfil}>
          <ContainerImage
            style={{
              backgroundImage: `url(${preview})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            <InputFile
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </ContainerImage>
          <div>
          <Input
            name="email"
            label="Novo email"
            placeholder="Digite seu novo email"
          />
          </div>
          <div>
          <Input
            name="cell"
            label="Celular"
            placeholder="Digite seu novo numero para contato"
          />
          </div>

          <InputGroup>
            <div>
              <Input
                name="adress"
                label="Endereço"
                placeholder="Digite seu novo endereço"
              />
            </div>
            <div style={{ width: 150 }}>
              <Input
                name="number"
                label="Numero"
                placeholder="N:"
              />
            </div>
          </InputGroup>
          <textarea
            maxLength={150}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Conhecer você é algo importante para nós. Conte-nos um pouco sobre você e como conheceu o Conectando Vidas."
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <ButtonEdit type="submit">Atualizar</ButtonEdit>
            <h5 
              style={{ 
                color: "blue", 
                cursor: "pointer" 
              }} 
              onClick={closeModal}>Voltar
            </h5>
          </div>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default ModalEditUser;
