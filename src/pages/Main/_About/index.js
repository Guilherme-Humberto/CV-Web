// Este é componente responsável por falar sobre a aplicação

import React from 'react';
import './styles.css'

import ImgAbout from '../../../assets/imgAbout.jpg'

function About() {
  return (
    <>
      <div id="anc-about" className="container-about">
        <div id="container-content-texts-about">
          <p id="title-texts-about">Quem Somos</p>
          <p id="desc-texts-about">
            O Conectando Vidas tem uma proposta, que visa incentivar a prática
            de doação de sangue pelo Brasil. Ao se cadastrar no app você
            automaticamente se conecta a todos os bancos de sangue próximos ao
            seu local.
          </p>
        </div>
        <img id="imgAbout" src={ImgAbout} alt="Imagem Sobre" />
      </div>
    </>
  );
}

export default About;