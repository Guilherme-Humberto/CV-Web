import React, { useState, useEffect, useMemo, useRef } from 'react';
import { AiOutlineEdit } from 'react-icons/ai'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import api from '../../../service/api'
import Input from '../../../components/Form/index'
import NavBarUserPage from '../../../components/Navbar/NavBarUserPage'
import ModalEditUser from '../../../components/Modals/ModalEditUser'

import {
  MessageNavBar,
  Container,
  ContainerPerfil,
  PerfilTop,
  Image,
  ContainerImage,
  InputFile,
  ContainerForm,
  InputGroup,
  Selected,
  Option,
  ButtoneCompletePerfil,
  PerfilDown,
  Infos,
  FieldInfo,
  ButtonEditPerfil
} from './styles';

function validateField() {
  const schema = Yup.object().shape({
    adress: Yup.string()
      .required("Digite seu endereço"),
    number: Yup.string()
      .required("Digite o numero"),
    cell: Yup.string()
      .required("Digite seu numero de celular")
  })

  return schema
}

function _PerfilSettings() {
  const formRef = useRef(null)

  const [teste, setTeste] = useState(false)
  const [infos, setInfos] = useState({})

  const [bio, setBio] = useState("")
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
      dataForm.append("adress", data.adress)
      dataForm.append("number", data.number)
      dataForm.append("bio", bio)
      dataForm.append("cell", data.cell)
      dataForm.append("blood", blood)

      await api.put(`editUser/${infos._id}`, dataForm)
        .then((response) => {
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
    <>
      {infos.blood !== "" ? (
        <NavBarUserPage />
      ): (
        <MessageNavBar
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Complete seu perfil</h3>
          <h6>Falta pouco para completar o seu cadastro. Preencha os campos abaixo ;)</h6>
        </MessageNavBar>
      )}
      <Container>
        {infos.blood !== "" ? (
          <ContainerPerfil>
            <PerfilTop>
              <ButtonEditPerfil onClick={() => setTeste(true)}>
                  <AiOutlineEdit size={30}/>
              </ButtonEditPerfil>
              <Image src={infos.image_url}/>
              <div>
                <h1 style={{ fontWeight: "bold" }}>{infos.name}</h1>
                <p style={{ fontSize: 18, maxWidth: 500 }}>{infos.bio}</p>
              </div>
            </PerfilTop>

            <PerfilDown>
              <div>
                <h3 style={{ fontWeight: "bold" }}>Informações</h3>
                <h5>Estas são suas informações, você poderá altera-las quando quiser.</h5>
              </div>
              <br />
              <Infos>
                <FieldInfo>
                  <h4>Email: </h4>
                  <h5>{infos.email}</h5>
                </FieldInfo>
                <InputGroup style={{ width: "100%" }}>
                <FieldInfo>
                  <h4>Endereço: </h4>
                  <h5>{infos.adress}</h5>
                </FieldInfo>
                <FieldInfo style={{ width: 150 }}>
                  <h4>N: </h4>
                  <h5>{infos.number}</h5>
                </FieldInfo>
                </InputGroup>
                <InputGroup style={{ width: "100%" }}>
                <FieldInfo>
                  <h4>Celular: </h4>
                  <h5>{infos.cell}</h5>
                </FieldInfo>
                <FieldInfo>
                  <h4>Tipo Sanguíneo: </h4>
                  <h5>{infos.blood}</h5>
                </FieldInfo>
                </InputGroup>
              </Infos>
            </PerfilDown>
          </ContainerPerfil>
        ): (
          <ContainerPerfil>

            <ContainerForm>
              <Form ref={formRef} onSubmit={handleSubmit}>
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
                <InputGroup>
                <div>
                <Input 
                  name="adress"
                  label="Endereço"
                  placeholder="Digite seu endereço"
                />
                </div>
                <div style={{ width: 200 }}>
                <Input
                  name="number"
                  label="Numero"
                  placeholder="Número"
                />
                </div>
                </InputGroup>
                <InputGroup>
                  <div>
                  <Input
                    name="cell"
                    label="Celular"
                    placeholder="Digite seu número de celular"
                  />
                  </div>
                  <div style={{ width: 200 }}>
                  <h6>Tipo Sanguíneo</h6>
                  <Selected onChange={(e) => setBlood(e.target.value)}>
                    <Option selected disabled>Tipo Sanguíneo</Option>
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
                <textarea
                  maxLength={150}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Conhecer você é algo importante para nós. Conte-nos um pouco sobre você e como conheceu o Conectando Vidas."
                />
                <ButtoneCompletePerfil
                  type="submit"
                >
                  Completar Perfil
                </ButtoneCompletePerfil>
              </Form>
            </ContainerForm>

          </ContainerPerfil>
        )}
      </Container>

      {teste && <ModalEditUser id={infos._id} closeModal={() => setTeste(false)}/>}
    </>
  );
}

export default _PerfilSettings;