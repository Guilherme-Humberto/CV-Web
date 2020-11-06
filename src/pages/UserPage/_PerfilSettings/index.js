import React, { useState, useEffect, useMemo } from 'react';
import { AiOutlineCamera } from 'react-icons/ai'
import api from '../../../service/api'

import NavBarUserPage from '../../../components/Navbar/NavBarUserPage'
import {
  Container,
  Content,
  ImagePerfil,
  ImageContainer,
  ImageContent,
  Form,
  Title,
  Desc,
  Label,
  Input,
  TextArea,
  InputGroup,
  Selected,
  Option,
  ButtonCompletPerfil,
  ImagePerfilCompleted,
  InfosPerfilCompleted,
  InputPerfil,
  ButtonEditUser
} from './styles';

function _PerfilSettings() {
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
    console.log(user)
  }, [])

  const preview = useMemo(() => {
    return img ? URL.createObjectURL(img) : null
  }, [img])

  const handleSubmit = async (e) => {
    const data = new FormData()

    data.append("img", img)
    data.append("adress", adress)
    data.append("number", number)
    data.append("bio", bio)
    data.append("cell", cell)
    data.append("blood", blood)

    await api.put(`editUser/${infos._id}`, data)
      .then((response) => {
        localStorage.setItem("infos", JSON.stringify(response.data))
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <NavBarUserPage />
      <Container>
        <Content>
          {infos.blood != "" ? (
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
              <Form onSubmit={handleSubmit}>
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
                <Label>Endereço *</Label>
                <InputGroup>
                  <Input
                    placeholder="Digite seu endereço"
                    onChange={(e) => setAdress(e.target.value)}
                  />
                  <Input
                    style={{ width: 200 }}
                    placeholder="Numero"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </InputGroup>
                <Label>Conhecer você é muito importante para nós</Label>
                <TextArea
                  placeholder="Conte-nos um pouco sobre você"
                  onChange={(e) => setBio(e.target.value)}
                />
                <InputGroup style={{ margin: "10px 0" }}>
                  <Input
                    placeholder="Celular: (xx) xxxxx-xxxx"
                    onChange={(e) => setCell(e.target.value)}
                  />
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
                </InputGroup>
                <ButtonCompletPerfil type="submit">
                  Enviar
            </ButtonCompletPerfil>
              </Form>
            )}
        </Content>
      </Container>
    </>
  );
}

export default _PerfilSettings;