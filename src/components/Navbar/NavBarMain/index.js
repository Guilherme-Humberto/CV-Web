// Este é o navbar da página inicial
// Recebe os links e os botões do content-initial

import React from 'react';
import './styles.css'

function NavBar(props) {
  return (
    <>
      <div className="container-navbar">
        <div id="links">
          <ul>
            <li>{props.title}</li>
            <li><a href="#anc-inst">{props.nav1}</a></li>
            <li><a href="#anc-camp">{props.nav2}</a></li>
            <li><a href="#anc-about">{props.nav3}</a></li>
          </ul>
        </div>
        <div id="button-nav">
          {props.buttonAccess}
          {props.buttonRegister}
        </div>
      </div>
    </>
  );
}

export default NavBar;