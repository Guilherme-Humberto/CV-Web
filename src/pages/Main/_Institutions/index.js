import React from 'react';
import './styles.css'
import { BsArrowRight } from 'react-icons/bs'

import imgInts from '../../../assets/imgInst.png'

function Institutions() {
  return (
    <>
      <div id="anc-inst" className="container-Institutions">
          <div id="texts-instituicao">
            <p id="title-insti">Instituições</p>
            <p id="desc-insti">
              Conheças os hemocentros que são parceiros do Conectando Vidas. Ou
              junte-se a nós e ajude-nos a levar a doação de sangue a cada vez
              mais áreas.
            </p>
            <button type="button" id="btnInst">
              Conheça nossos parceiros <BsArrowRight size={30} color={"darkred"}/>
            </button>
          </div>
          <img id="image-inst" src={imgInts} alt="Imagem Instituição" />
        </div>
    </>
  );
}

export default Institutions;