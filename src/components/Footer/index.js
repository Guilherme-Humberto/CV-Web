// Pasta Footer é chamada na página inicial

import React from 'react';
import './styles.css'
import imgStore1 from '../../assets/imgs/store1.png'
import imgStore2 from '../../assets/imgs/store2.png'

function Footer() {
  return (
      <>
        <div className="container-footer">
            <p id="text-footer">
                © 2020 Conectando Vidas - Todos os Direitos Reservados
            </p>
            <div id="container-contacts-footer">
                <img id="imgFooter" src={imgStore1} alt="Imagem loja"/>
                <img id="imgFooter" src={imgStore2} alt="Imagem loja"/>
            </div>
        </div>
      </>
  );
}

export default Footer;