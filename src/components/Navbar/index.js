import React from 'react';
import './styles.css'


function NavBar(props) {
  return (
    <>
      <div className="container-navbar">
        <div id="links">
          <ul>
            <li>{props.title}</li>
            <li>{props.nav1}</li>
            <li>{props.nav2}</li>
            <li>{props.nav3}</li>
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