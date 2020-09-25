import React, { useState, useEffect } from 'react';
import { VscEdit } from 'react-icons/vsc'
import './styles.css'
import NavBarUserPage from '../../../components/Navbar/NavBarUserPage'
import img from '../../../assets/depo1.jfif'

function _PerfilSettings() {
  const [infos, setInfos] = useState(true)
  const [test, setTest] = useState({ })

  const handleChangeContent = () => setInfos(false)

  useEffect(() => {
    async function getInfos() {
      const userData = await localStorage.getItem('infos')
      const obj = JSON.parse(userData)
      setTest(obj)
    }
    getInfos()
  }, [])

  return (
    <>
      <div className="container-perfiluser">
        <NavBarUserPage />

        <div id="container-header"></div>
        <div id="container-content-infos">
          <img src={img} id="imgPerfil" alt="Imagem"/>
        </div>
        

        {/* Troca de conteudo */}
        {infos ? (
          <div id="infos-user">
            <button onClick={handleChangeContent} id="btn-edit-info">
                <VscEdit color="white" size={25}/>
            </button>
            <p id="username-infos">{test.name}</p>
            <p id="bio-infos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repellat.</p>
            <input id="input-infos-user" readOnly defaultValue={test.email} placeholder="Seu Email" />
            <div id="container-inputs-infos">
              <input id="input-infos-user" placeholder="Celular" />
              <input id="input-infos-user" placeholder="Telefone" />
            </div>
            <input id="input-infos-user" placeholder="Tipo sanguíneo" />
          </div>
        ): (
          <div id="infos-user">
            <p id="edit-infos-title">Edite suas informações</p>
            <p id="bio-infos2">Edite suas informações</p>
            <textarea placeholder="Conte-nos um pouco sobre você" id="bio-user-edit"/>
            <input id="input-infos-user" readOnly defaultValue={test.email} placeholder="Seu Email"/>
            <div id="container-inputs-infos">
              <input id="input-infos-user" placeholder="Celular"/>
              <input id="input-infos-user" placeholder="Telefone"/>
            </div>
            <input id="input-infos-user" placeholder="Tipo sanguíneo"/>
            <button onClick={() => setInfos(true)}>Salvar</button>
          </div>
        )}

      </div>
    </>
  );
}

export default _PerfilSettings;