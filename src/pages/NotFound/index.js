import React from 'react';
import './styles.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import imgNotFound from '../../assets/imgs/notfoundimg.gif'

function NotFound() {
  return (
      <>
        <div className="container-not-found">
            <img id="img-not-found"src={imgNotFound} alt="Imagem"/>
            <p id="title-not-found">Desculpe esta página não existe!</p>
            <p id="text-not-found">Volte para a página principal e tente novamente</p>
            <Link to="/">
                <button id="button-not-found">
                    <AiOutlineArrowLeft size={20}/> Voltar
                </button>
            </Link>
        </div>
      </>
  );
}

export default NotFound;