import React from 'react';
import './styles.css'
import NavBarUserPage from '../../../components/Navbar/NavBarUserPage'

import { AiOutlinePhone } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

// Realizando a animação quando o modal é aberto
const styles = {
  fade: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fade')
  }
}

function _CampaignsPage() {
  return (
    <>
      <NavBarUserPage />
      <StyleRoot>
        <div className="container-camp" style={styles.fade}>
          <div id="container-texts-camp">
            <p id="title-camp">Campanhas</p>
            <p id="desc-camp">
              A sua visita é muito importante para nós.Venha conhecer todo procedimento que envolve a doação de sangue, traga seus colegas de trabalho, alunos, ou quem você quiser.A informação é o melhor remédio para curar o preconceito.Estamos esperando você de portas abertas. Conheça nossos projetos.
          </p>
          </div>
          <div id="container-all-cards">
            <div id="container-cards-camp">
              <div id="card-camp">
                <p id="name-card-camp">Exemplo</p>
                <p id="desc-card-camp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet blanditiis magni velit qui dignissimos sint eum, minus ad rem?</p>
                <div id="buttons-contacts">
                  <button id="btn-contact-card"><AiOutlinePhone color={"green"} size={25} /> (11) 2328-2010</button>
                  <button id="btn-contact-card"><BsPhone color={"green"} size={25} /> (11) 9382-5321</button>
                </div>
              </div>
            </div>
            <div id="container-cards-camp">
              <div id="card-camp">
                <p id="name-card-camp">Exemplo</p>
                <p id="desc-card-camp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet blanditiis magni velit qui dignissimos sint eum, minus ad rem?</p>
                <div id="buttons-contacts">
                  <button id="btn-contact-card"><AiOutlinePhone color={"green"} size={25} /> (11) 2328-2010</button>
                  <button id="btn-contact-card"><BsPhone color={"green"} size={25} /> (11) 9382-5321</button>
                </div>
              </div>
            </div>
            <div id="container-cards-camp">
              <div id="card-camp">
                <p id="name-card-camp">Exemplo</p>
                <p id="desc-card-camp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet blanditiis magni velit qui dignissimos sint eum, minus ad rem?</p>
                <div id="buttons-contacts">
                  <button id="btn-contact-card"><AiOutlinePhone color={"green"} size={25} /> (11) 2328-2010</button>
                  <button id="btn-contact-card"><BsPhone color={"green"} size={25} /> (11) 9382-5321</button>
                </div>
              </div>
            </div>
          </div>

          <div id="container-all-cards">
            <div id="container-cards-camp">
              <div id="card-camp">
                <p id="name-card-camp">Exemplo</p>
                <p id="desc-card-camp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet blanditiis magni velit qui dignissimos sint eum, minus ad rem?</p>
                <div id="buttons-contacts">
                  <button id="btn-contact-card"><AiOutlinePhone color={"green"} size={25} /> (11) 2328-2010</button>
                  <button id="btn-contact-card"><BsPhone color={"green"} size={25} /> (11) 9382-5321</button>
                </div>
              </div>
            </div>
            <div id="container-cards-camp">
              <div id="card-camp">
                <p id="name-card-camp">Exemplo</p>
                <p id="desc-card-camp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet blanditiis magni velit qui dignissimos sint eum, minus ad rem?</p>
                <div id="buttons-contacts">
                  <button id="btn-contact-card"><AiOutlinePhone color={"green"} size={25} /> (11) 2328-2010</button>
                  <button id="btn-contact-card"><BsPhone color={"green"} size={25} /> (11) 9382-5321</button>
                </div>
              </div>
            </div>
            <div id="container-cards-camp">
              <div id="card-camp">
                <p id="name-card-camp">Exemplo</p>
                <p id="desc-card-camp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet blanditiis magni velit qui dignissimos sint eum, minus ad rem?</p>
                <div id="buttons-contacts">
                  <button id="btn-contact-card"><AiOutlinePhone color={"green"} size={25} /> (11) 2328-2010</button>
                  <button id="btn-contact-card"><BsPhone color={"green"} size={25} /> (11) 9382-5321</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyleRoot>
    </>
  );
}

export default _CampaignsPage;