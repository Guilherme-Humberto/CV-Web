// Este é navbar da página userpage

import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css'
import { 
  FiMapPin
} from 'react-icons/fi'

import { 
  AiOutlineUser,
  AiOutlineAppstore,
  AiOutlineAudit,
  AiOutlineUsergroupAdd
} from 'react-icons/ai'

function NavBarUserPage() {
  return (
      <>
        <div id="navbar-user-page">
          <Link to="/Home/perfil"><button id="btn-people-nav"><AiOutlineUser size={35}/></button></Link>
          <label id="title-nav-user">Perfil</label>
          <div id="container-btn-navs">
            <Link to="/Home"><button id="btn-people-nav-access"><AiOutlineAppstore size={35}/></button></Link>
            <label id="title-nav-user">Inicial</label>
            <Link to="/Home/historic"><button id="btn-people-nav-access"><AiOutlineAudit size={35}/></button></Link>
            <label id="title-nav-user">Histórico</label>
            <Link to="/Home/campaigns"><button id="btn-people-nav-access"><AiOutlineUsergroupAdd size={35}/></button></Link>
            <label id="title-nav-user">Campanhas</label>
            <Link to="/Home/map"><button id="btn-people-nav-access"><FiMapPin size={35}/></button></Link>
            <label id="title-nav-user">Locais</label>
          </div>
        </div>
      </>
  );
}

export default NavBarUserPage;