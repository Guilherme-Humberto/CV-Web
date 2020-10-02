// Este é componente responsável por mostrar as campanhas disponíveis

import React from 'react';
import './styles.css'

// Simulando um bando de dados
const cards = [
  { id: 1, img: "https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: "Nome da campanha1", desc: "Lorem Ipsum é simplesmente uma simulação de texto da " },
  { id: 2, img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: "Nome da campanha2", desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos." },
  { id: 3, img: "https://images.pexels.com/photos/3823489/pexels-photo-3823489.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: "Nome da campanha3", desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos." },
  { id: 4, img: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: "Nome da campanha3", desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos." },
]

function Campaigns() {
  return (
    <>
        <div id="anc-camp" className="container-campaigns">
          <div id="container-texts-camp">
            <p id="title-page-camp">Campanhas</p>
            <p id="desc-page-camp">
              Com a sua ajuda podemos conectar ainda mais vidas por meio de
              campanhas. Veja as disponíveis abaixo e ajude-nos a incentivar a
              doação de sangue
            </p>
          </div>
          <div id="container-cards-camps">

            {/* Percorrendo o array e renderizando os cards das campannhas */}
            {cards.map(({ id, img, title, desc }) => (
              <div key={id} id="containercard">
                <div id="content">
                  <img id="card-img" src={img} alt="Imagems Campanhas" />
                  <p id="title-card">{title}</p>
                  <p id="desc-card">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
}

export default Campaigns;