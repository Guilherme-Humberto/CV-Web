import React, { useState, useEffect } from 'react';
import { BiEdit } from 'react-icons/bi'

import api from '../../../service/api'
import './styles.css'
import NavBarUserPage from '../../../components/Navbar/NavBarUserPage'
import img from '../../../assets/imgPerfil.gif'

function _PerfilSettings() {
  const [bio, setBio] = useState('')
  const [cell, setCell] = useState('')
  const [phone, setTelef] = useState('')
  const [adress, setAdress] = useState('')
  const [bloodtype, setBlood] = useState('')
  const [infos, setInfos] = useState({})

  useEffect(() => {
    function getInfos() {
      const userData = localStorage.getItem('infos')
      const obj = JSON.parse(userData)
      setInfos(obj)
    }
    getInfos()
  }, [])

  const handleSubmit = async (e) => {
    await api.put(`/editUser/${infos._id}`, {
      bio,
      cell,
      phone,
      adress,
      bloodtype
    })
      .then(async (response) => {
        const user = response.data
        localStorage.setItem('infos', JSON.stringify(user))
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <NavBarUserPage />
        <div className="container-perfiluser">

          {infos.bloodtype === '' | infos.cell === '' ? (
            <>
              <div id="infos-user">
                <div>
                  <p id="title-perfil">Complete seu perfil</p>
                  <p id="desc-perfil">{infos.name}, preencha os dados abaixo para completar seu perfil</p>
                  <hr id="linha-perfil" />

                  <form onSubmit={handleSubmit} id="form-edit-perfil">
                    <textarea onChange={(e) => setBio(e.target.value)} placeholder="Conte um pouco sobre você" id="bio-user"></textarea>

                    <label id="label-form-perfil">Endereço</label>
                    <div id="inputs-adress">
                      <input onChange={(e) => setAdress(e.target.value)} id="input-perfil" placeholder="Informe seu Endereço" />
                      <input id="input-perfil-num" placeholder="Número" />
                    </div>

                    <label id="label-form-perfil">Contatos</label>
                    <div id="inputs-perfil">
                      <input onChange={(e) => setTelef(e.target.value)} id="input-perfil" placeholder="Informe seu Telefone" />
                      <input onChange={(e) => setCell(e.target.value)} id="input-perfil" placeholder="Informe seu Celular" />
                    </div>

                    <label id="label-form-perfil">Tipo Sanguíneo</label>
                    <select onChange={(e) => setBlood(e.target.value)} id="selected-bloodtype">
                      <option defaultValue="A+">A+</option>
                      <option defaultValue="B+">B+</option>
                      <option defaultValue="AB+">AB+</option>
                      <option defaultValue="O+">O+</option>
                      <option defaultValue="A-">A-</option>
                      <option defaultValue="B-">B-</option>
                      <option defaultValue="AB-">AB-</option>
                      <option defaultValue="O-">O-</option>
                    </select>

                    <button type="submit" id="btn-edit-perfil">
                      <p id="text-btn-perfil">Atualizar</p>
                      <p id="text-btn-perfil"><BiEdit /></p>
                    </button>
                  </form>
                </div>
                <div>
                  <img id="ilustration-perfil" src={img} alt="Imagem"/>
                </div>
              </div>
            </>
          ) : (
              <>
                <div id="container-header">
                  <div id="container-form-perfil">
                    <p id="nameuser-perfil">{infos.name}</p>
                    <p id="bio-user-perfil">{infos.bio}</p>
                    <div id="field-info">
                      <label id="label-field">Seu Email</label>
                      <input id="input-field-info" disabled defaultValue={infos.email} />
                    </div>
                    <label id="label-field">Contatos</label>
                    <div id="field-info2">
                      <input id="input-field-info" disabled defaultValue={infos.cell} />
                      <input id="input-field-info" disabled defaultValue={infos.phone} />
                    </div>
                    <label id="label-field">Seu Endereço</label>
                    <div id="field-info2">
                      <input id="input-field-info" disabled defaultValue={infos.adress} />
                      <input id="input-field-info2" disabled defaultValue={infos.adress} />
                    </div>
                    <div id="field-info">
                      <label id="label-field">Seu CPF</label>
                      <input id="input-field-info" disabled defaultValue={infos.cpf} />
                    </div>
                    <div id="field-info">
                      <label id="label-field">Tipo Sanguíneo</label>
                      <input id="input-field-info3" disabled defaultValue={infos.bloodtype} />
                    </div>
                  </div>
                </div>
              </>
            )}
        </div>
    </>
  );
}

export default _PerfilSettings;