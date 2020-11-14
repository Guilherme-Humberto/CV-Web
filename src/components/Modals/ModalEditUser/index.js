import React, { useState, useRef, useMemo } from 'react';
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

const ModalEditUser = ({ closeModal, infos }) => {
  const formRef = useRef(null)

  const [bio, setBio] = useState("")
  const [alertMessage, setAlertImage] = useState("")
  const [img, setImage] = useState(null)

  const preview = useMemo(() => {
    return img ? URL.createObjectURL(img) : null
  }, [img])

  async function handleUpdatePerfil(data) {
    try {
      const dataForm = new FormData()

      if(img === null) {
        setAlertImage("Adicione uma imagem ao seu perfil")
      }

      dataForm.append("img", img)
      dataForm.append("email", data.email)
      dataForm.append("adress", data.adress)
      dataForm.append("number", data.number)
      dataForm.append("cell", data.cell)
      dataForm.append("password", data.password)
      dataForm.append("bio", bio)

      await api.put(`editUserPerfil/${infos._id}`, dataForm)
        .then(async (response) => {
          localStorage.removeItem("infos")
          localStorage.setItem("infos", JSON.stringify(response.data))
          window.location.reload()
        })
        .catch(err => console.log(err))
    }
    catch (err) {
      console.log(err)
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
            id="labelImage"
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
          <p 
            style={{ 
              color: "red",
              fontSize: 17,
              maxWidth: 400,
              fontWeight: "bold"
             }}
          >
            {alertMessage}
          </p>
          <div>
          <Input
            defaultValue={infos.email}
            name="email"
            label="Novo email"
            placeholder="Digite seu novo email"
          />
          </div>
          <div>
          <Input
            defaultValue={infos.cell}
            name="cell"
            label="Celular"
            placeholder="Digite seu novo numero para contato"
          />
          </div>
          <InputGroup>
            <div>
              <Input
                defaultValue={infos.adress}
                name="adress"
                label="Endereço"
                placeholder="Digite seu novo endereço"
              />
            </div>
            <div style={{ width: 150 }}>
              <Input
                defaultValue={infos.number}
                name="number"
                label="Numero"
                placeholder="N:"
              />
            </div>
          </InputGroup>
          <Input
            type="password"
            name="password"
            label="Senha"
            placeholder="Digite sua nova senha"
          />
          <textarea
            maxLength={150}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Conhecer você é algo importante para nós. Conte-nos um pouco sobre você e como conheceu o Conectando Vidas."
          />
          <div
            id="buttonsDown"
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
