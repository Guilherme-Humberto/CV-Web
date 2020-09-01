import React from 'react';
import './styles.css'

import imgInts from '../../../assets/imgs/img-ints.png'

function Institutions() {
  return (
    <>
      <div className="container-Institutions">
          <div id="texts-instituicao">
            <p id="title-insti">Instituições</p>
            <hr id="linha"/>
            <p id="desc-insti">
              Conheças os hemocentros que são parceiros do Conectando Vidas. Ou
              junte-se a nós e ajude-nos a levar a doação de sangue a cada vez
              mais áreas.
            </p>
            <button type="button" id="btnInst">
              Conheça nossos parceiros
            </button>
          </div>
          <img id="image-inst" src={imgInts} alt="Imagem Instituição" />
        </div>
    </>
  );
}

export default Institutions;