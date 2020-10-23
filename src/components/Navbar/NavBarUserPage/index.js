// // Este é navbar da página userpage

import React from 'react';
import { Link, useHistory } from 'react-router-dom'

import {
  AiOutlineUser,
  AiOutlineAppstore,
  AiOutlineAudit,
  AiOutlineUsergroupAdd
} from 'react-icons/ai'

import { 
  FiMapPin, 
  FiLogOut 
} from 'react-icons/fi'

import {
  Container,
  ContainerButton,
  TextButton
} from './styles';

import { logout } from '../../../config/auth'


function NavBarUserPage() {
  const history = useHistory(null)

  const handleLogout = () => {
    logout()
    localStorage.removeItem('infos')
    history.push("/")
  }

  return (
    <Container
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <ContainerButton
        style={{ margin: "20px 0" }}
      >
        <Link 
          id="buttonLink" 
          to="/Home/perfil"
        >
          <AiOutlineUser color="#000" size={35} />
        </Link >
        <TextButton>Perfil</TextButton>
      </ContainerButton>

      <ContainerButton>
        <Link 
          id="buttonLink" 
          to="/Home"
        >
          <AiOutlineAppstore color="#000" size={35} />
        </Link >
        <TextButton>Inicial</TextButton>
      </ContainerButton>

      <ContainerButton>
        <Link 
          id="buttonLink" 
          to="/Home/historic"
        >
          <AiOutlineAudit color="#000" size={35} />
        </Link >
        <TextButton>Histórico</TextButton>
      </ContainerButton>

      <ContainerButton>
        <Link 
          id="buttonLink" 
          to="/Home/campaigns"
        >
          <AiOutlineUsergroupAdd color="#000" size={35} />
        </Link >
        <TextButton>Campanhas</TextButton>
      </ContainerButton>

      <ContainerButton>
        <Link 
          id="buttonLink" 
          to="/Home/map"
        >
          <FiMapPin color="#000" size={35} />
        </Link >
        <TextButton>Locais</TextButton>
      </ContainerButton>
      <br />
      <ContainerButton
        onClick={handleLogout}
        style={{ margin: "30px 0" }}
      >
        <Link 
          id="buttonLink" 
          to="/Home/campaigns"
        >
          <FiLogOut color="#000" size={35} />
        </Link >
        <TextButton>Sair</TextButton>
      </ContainerButton>
    </Container>
  );
}

export default NavBarUserPage;