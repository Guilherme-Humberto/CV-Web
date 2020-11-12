import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs'

import { 
  Container,
  Image,
  Texts,
  Title,
  Desc,
  ModalInstText
} from './styles';
import imgInts from '../../../assets/imgInst.png'
import ModalInsts from '../../../components/Modals/ModalInsts'


function _Institutions() {
  const [modalInst, setModalInst] = useState(false)
  return (
    <>
      <Container id="Instituições">
        <Image src={imgInts} />

        <Texts>
          <Title>Instituições</Title>
          <Desc>
            Conheças os hemocentros que são parceiros do Conectando Vidas. Ou
            junte-se a nós e ajude-nos a levar a doação de sangue a cada vez
            mais áreas.
        </Desc>
          <ModalInstText 
            onClick={() => setModalInst(true)}
          >
          Conheça nossos parceiros
          <BsArrowRight
              size={35}
              color={"darkred"}
              style={{
                margin: "0 10px"
              }}
            />
          </ModalInstText>
        </Texts>
      </Container>

      {modalInst && (
          <ModalInsts 
            buttonclosemodal={() => setModalInst(false)}
          />
      )}
    </>
  );
}

export default _Institutions;