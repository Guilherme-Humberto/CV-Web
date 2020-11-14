// // Este é navbar da página userpage

import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

import {
  AiOutlineMenu
} from 'react-icons/ai'


import {
  Container,
} from './styles';
import ModalNav from '../../Modals/ModalNav'
import { logout } from '../../../config/auth'

function NavBarUserPage() {
  const history = useHistory(null)
  const [openModal, setOpenModal] = useState(false)
  const [infos, setInfos] = useState({})
  const [image_URL] = useState("http://localhost:5001/files/undefined")

  useEffect(() => {
    const user = localStorage.getItem("infos")
    setInfos(JSON.parse(user))
  }, [])

  const handleLogout = () => {
    logout()
    localStorage.removeItem('infos')
    history.push("/")
  }

  return (
    <>
      <Container>
        <div id="linkPerfil">
          {infos.image_url !== image_URL ? (
            <Link to="/home/perfil">
              <img src={infos.image_url} alt="Foto"/>
            </Link>
          ): (
            <h4>Guilherme</h4>
          )}
          <Link to="/home/perfil">
            {infos.name}
          </Link>
        </div>

        <div id="links">
          <Link to="/home">Inicial</Link>
          <Link to="/home/campaigns">Campanhas</Link>
          <Link to="/home/map">Locais</Link>
          <Link to="/home/historic">Histórico</Link>
          <Link onClick={handleLogout}>Sair</Link>
        </div>
        <div id="menuMobile" onClick={() => setOpenModal(true)}>
          <AiOutlineMenu size={30} color="#eee"/>
        </div>
      </Container>

      {openModal && <ModalNav closeModal={() => setOpenModal(false)}/>}
    </>
  );
}

export default NavBarUserPage;