import React, { useState } from 'react';
import ModalRegister from '../../Modals/ModalRegister'
import ModalLogin from '../../Modals/ModalLogin'

import {
  Container,
  ContainerLinks,
  ContainerButtons,
  Logo,
  Link,
  Button
} from './styles';

function NavBarMain() {
  const [isActiveLog, setIsActiveLog] = useState(false)
  const [isActiveCad, setIsActiveCad] = useState(false)
  

  return (
    <>
      <Container
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ContainerLinks>
          <Logo>CV</Logo>
          <Link href="#QuemSomos">Quem Somos</Link>
          <Link href="#Campanhas">Campanhas</Link>
          <Link href="#Instituições">Instituições</Link>
        </ContainerLinks>
        <ContainerButtons>
          <Button
            onClick={() => setIsActiveLog(true)}
            style={{
              background: "transparent",
              outline: "none",
              border: "2px solid #000"
            }}>Acessar
        </Button>
          <Button
            onClick={() => setIsActiveCad(true)}
            style={{
              background: "#ff5964",
              outline: "none",
              border: "none",
              color: "#fff"
            }}>Cadastrar
        </Button>
        </ContainerButtons>
      </Container>

      {isActiveLog && <ModalLogin buttonclose={() => setIsActiveLog(false)} />}
      {isActiveCad && <ModalRegister buttonclose={() => setIsActiveCad(false)} />}
    </>
  );
}

export default NavBarMain;