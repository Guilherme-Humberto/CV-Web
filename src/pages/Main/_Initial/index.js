// // Este é componente responsável por passar os props para a navbar do página inicial

import React from 'react';
import imgHome from '../../../assets/imgHome.jpg'
import NavBar from '../../../components/Navbar/NavBarMain'

import { 
  Container,
  Texts,
  Logo,
  Desc,
  Image 
} from './styles';

function _Initial() {
  return (
    <>
    <NavBar />
      <Container>
        <Texts>
          <Logo>Conectando Vidas</Logo>
          <Desc>
            O Conectando Vidas é um app gratuito que tem como objetivo
            incentivar a doação de sangue. O serviço conecta potenciais
            doadores com os hemocentros mais próximos a ele.
        </Desc>
        </Texts>
        <Image src={imgHome} />
      </Container>
    </>
  );
}

export default _Initial;

// import React, { useState } from 'react';


// import './styles.css'
// import ModalAcess from '../../../components/Modals/ModalAcess'

// function Initial() {

//   return (
//     <>
//         <NavBar/>

//         <div className="container-content-initial">
//           <div id="texts-home">
//             <p id="title-initial">Conectando Vidas</p>
//             <p id="desc-initial">
//               O Conectando Vidas é um app gratuito que tem como objetivo
//               incentivar a doação de sangue. O serviço conecta potenciais
//               doadores com os hemocentros mais próximos a ele.
//             </p>
//           </div>
//           <div id="Image-home">
//             <img id="img-initial" src={imgHome} alt="Imagem Home" />
//           </div>
//         </div>
          
//     </>
//   );
// }

// export default Initial;