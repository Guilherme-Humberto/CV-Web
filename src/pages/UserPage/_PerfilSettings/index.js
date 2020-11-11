import React, { useState, useEffect, useMemo, useRef } from 'react';
import { AiOutlineCamera } from 'react-icons/ai'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import api from '../../../service/api'
import Input from '../../../components/Form/index'
import NavBarUserPage from '../../../components/Navbar/NavBarUserPage'
import {
  Container,
  Content,
  ImagePerfil,
  ImageContainer,
  ImageContent,
  Title,
  Desc,
  Label,
  TextArea,
  InputGroup,
  Selected,
  Option,
  ButtonCompletPerfil,
  ImagePerfilCompleted,
  InfosPerfilCompleted,
  InputPerfil,
} from './styles';

function validateField() {
  const schema = Yup.object().shape({
    adress: Yup.string()
      .required("Digite seu endereço"),
    number: Yup.string()
      .required("Digite o numero"),
    cell: Yup.string()
      .required("Digite o numero do seu endereço")
  })

  return schema
}

function _PerfilSettings() {
  const formRef = useRef(null)

  const [infos, setInfos] = useState({})
  const [adress, setAdress] = useState("")
  const [number, setNumber] = useState(0)
  const [bio, setBio] = useState("")
  const [cell, setCell] = useState("")
  const [blood, setBlood] = useState("")
  const [img, setImage] = useState(null)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("infos"))
    setInfos(user)
  }, [])

  const preview = useMemo(() => {
    return img ? URL.createObjectURL(img) : null
  }, [img])

  const handleSubmit = async (data, { reset }) => {
    try {
      const schema = validateField()
      formRef.current.setErrors({})

      await schema.validate(data, {
        abortEarly: false
      });

      reset()
      const dataForm = new FormData()

      dataForm.append("img", img)
      dataForm.append("adress", adress)
      dataForm.append("number", number)
      dataForm.append("bio", bio)
      dataForm.append("cell", cell)
      dataForm.append("blood", blood)

      await api.put(`editUser/${infos._id}`, dataForm)
        .then((response) => {
          localStorage.setItem("infos", JSON.stringify(response.data))
        })
        .catch(err => console.log(err))
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
    <>
      <NavBarUserPage />
      <Container>
        <Content>
          {infos.blood !== "" || infos.blood !== undefined ? (
            <>
              <ImagePerfilCompleted src={infos.image_url} alt="" />

              <InfosPerfilCompleted>
                <Label>Nome</Label>
                <InputPerfil
                  placeholder={`Nome: ${infos.name}`}
                  disabled
                />
                <TextArea
                  style={{ width: 700, marginTop: 10 }}
                  defaultValue={infos.bio}
                  disabled
                />
                <Label>Endereço</Label>
                <InputGroup>
                  <InputPerfil
                    placeholder={`Endereço: ${infos.adress}`}
                    disabled
                  />
                  <InputPerfil
                    style={{ width: 100 }}
                    placeholder={`N: ${infos.number}`}
                    disabled
                  />
                </InputGroup>
                <InputGroup style={{ margin: "10px 0" }}>
                  <InputPerfil
                    placeholder={`Contato: ${infos.cell}`}
                    disabled
                  />
                  <InputPerfil
                    style={{ width: 60 }}
                    defaultValue={infos.blood}
                    disabled
                  />
                  <InputPerfil
                    style={{ width: 130 }}
                    placeholder={`Idade: ${infos.age}`}
                    disabled
                  />
                </InputGroup>
              </InfosPerfilCompleted>
            </>

          ) : (
              <Form style={{ maxWidth: "130%" }} ref={formRef} onSubmit={handleSubmit}>
                <ImageContainer style={{ backgroundImage: `url(${preview})` }}>
                  <ImagePerfil
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    className={img ? "has-image" : ""}
                  />
                  <ImageContent>
                    <AiOutlineCamera color="#444" size={40} />
                  </ImageContent>
                </ImageContainer>

                <Title>Completar seu perfil</Title>
                <Desc>Falta pouco para completar seu perfil</Desc>
                <InputGroup>
                  <div style={{ width: "100%" }}>
                  <Input
                    label="Endereço *"
                    name="adress"
                    placeholder="Digite seu endereço"
                    o
                    nChange={(e) => setAdress(e.target.value)}
                  />
                  </div>
                  <div>
                  <Input
                    style={{
                      width: "200px",
                      padding: "5px 10px",
                      margin: "5px 0",
                      background: "transparent",
                      fontSize: "20px",
                      border: "2px solid #000",
                      fontFamily: "Roboto",
                      display: "flex",
                      flexDirection: "column"
                    }}
                    label="Numero *"
                    name="number"
                    placeholder="Numero"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  </div>
                </InputGroup>
                <Label>Conhecer você é muito importante para nós</Label>
                <TextArea
                  name="bio"
                  placeholder="Conte-nos um pouco sobre você"
                  onChange={(e) => setBio(e.target.value)}
                />
                <InputGroup style={{ margin: "10px 0" }}>
                  <div style={{ width: "100%" }}>
                  <Input
                    name="cell"
                    type="tel"
                    label="Celular"
                    placeholder="Celular"
                    onChange={(e) => setCell(e.target.value)}
                  />
                  </div>
                  <div>
                  <Label>Tipo sanguíneo</Label>
                  <Selected onChange={(e) => setBlood(e.target.value)}>
                    <Option value="A+">A+</Option>
                    <Option value="A-">A-</Option>
                    <Option value="B+">B+</Option>
                    <Option value="B-">B-</Option>
                    <Option value="AB+">AB+</Option>
                    <Option value="AB-">AB-</Option>
                    <Option value="O+">O+</Option>
                    <Option value="O-">O-</Option>
                  </Selected>
                  </div>
                </InputGroup>
                <ButtonCompletPerfil
                  type="submit">Enviar
                </ButtonCompletPerfil>
              </Form>
            )}
        </Content>
      </Container>
    </>
  );
}

export default _PerfilSettings;