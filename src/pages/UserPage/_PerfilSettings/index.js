import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai'
import './styles.css'
import { logout } from '../../../config/auth'
import NavBarUserPage from '../../../components/Navbar/NavBarUserPage'


function _PerfilSettings() {
  const [test, setTest] = useState({ })

  useEffect(() => {
    async function getInfos() {
      const userData = await localStorage.getItem('infos')
      const obj = JSON.parse(userData)
      setTest(obj)
    }
    getInfos()
  }, [])

  const history = useHistory(null)
  const teste = () => {
    logout()
    localStorage.removeItem('infos')
    history.push("/")
  }
  
  return (
    <>
      <div className="container-perfiluser">
        <NavBarUserPage />

        <div id="container-content">
          <div id="container-perfil-top">
            <p id="title-top-user">Bem vindo {test.name} </p>
            <button onClick={teste} id="btnLogout"><AiOutlineLogout size={30}/>Sair</button>
          </div>
          

          <div id="container-infos">
            <div id="infos-container-1">
              <p id="name-user-perfil">{test.name}</p>
            </div>

            <div id="infos-container-2">
              <h1>Sobre mim</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default _PerfilSettings;