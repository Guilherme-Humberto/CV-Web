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