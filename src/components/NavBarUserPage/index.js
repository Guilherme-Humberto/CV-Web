import React from 'react';
import './styles.css'
import { 
  BsFillPersonFill, 
  BsBook, 
  BsFillPeopleFill, 
  BsMap, 
  BsGridFill 
} from 'react-icons/bs'

import { Link } from 'react-router-dom'
function NavBarUserPage() {
  return (
      <>
        <div id="navbar-user-page">
          <button id="btn-people-nav"><BsFillPersonFill size={30}/></button>
          <div id="container-btn-navs">
            <Link to="/Home"><button id="btn-people-nav-access"><BsGridFill size={30}/></button></Link>
            <Link to="/Home/historic"><button id="btn-people-nav-access"><BsBook size={30}/></button></Link>
            <Link to="/Home/campaigns"><button id="btn-people-nav-access"><BsFillPeopleFill size={30}/></button></Link>
            <Link to="/Home/map"><button id="btn-people-nav-access"><BsMap size={30}/></button></Link>
          </div>
        </div>
      </>
  );
}

export default NavBarUserPage;