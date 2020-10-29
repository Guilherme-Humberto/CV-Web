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
          <Logo>Conectando Vidas</Logo>
          <Link>Quem Somos</Link>
          <Link>Campanhas</Link>
          <Link>Instituições</Link>
        </ContainerLinks>
        <ContainerButtons>
          <Button
            onClick={() => setIsActiveLog(true)}
            style={{
              background: "transparent",
              outline: "none",
              border: "1px solid #000"
            }}>Acessa
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