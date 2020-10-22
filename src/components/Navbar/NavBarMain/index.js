import React, { useState } from 'react';
import ModalAcess from '../../Modals/ModalAcess'

import {
  Container,
  ContainerLinks,
  ContainerButtons,
  Logo,
  Link,
  Button,
  Title,
  Text,
  Input,
  ButtonModal
} from './styles';

function NavBarMain() {
  const [isActiveLog, setIsActiveLog] = useState(false)
  const [isActiveCad, setIsActiveCad] = useState(false)
  const [isForgotPassword, setIsForgotPassword] = useState(false)

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
              background: "#e5989b",
              outline: "none",
              border: "none",
              color: "#fff"
            }}>Cadastrar
        </Button>
        </ContainerButtons>
      </Container>

      {isActiveLog && (
        <ModalAcess
          buttonclose={() => setIsActiveLog(false)}
          form={
            <>
              {isForgotPassword ? (
                <>
                  <Title>Alterar Senha</Title>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, vitae.</Text>
                  <Input type="text" placeholder="Nova senha" />
                  <Input type="text" placeholder="Confirmar Senha" />
                  <Text
                      onClick={() => setIsForgotPassword(false)}
                      style={{
                        color: "red",
                        cursor: "pointer"
                      }}>Voltar
                  </Text>
                  <ButtonModal>Alterar</ButtonModal>
                </>
              ) : (
                  <>
                    <Title>Acessar</Title>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, vitae.</Text>
                    <Input type="text" placeholder="Email" />
                    <Input type="text" placeholder="Senha" />
                    <Text
                      onClick={() => setIsForgotPassword(true)}
                      style={{
                        color: "red",
                        cursor: "pointer"
                      }}>Esqueci minha senha
                    </Text>
                    <ButtonModal>Acessar</ButtonModal>
                  </>
                )}
            </>
          }
        />
      )}

      {isActiveCad && (
        <ModalAcess
          buttonclose={() => setIsActiveCad(false)}
          form={
            <>
              <Title>Criar Conta</Title>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, vitae.</Text>
              <Input type="text" placeholder="Nome" />
              <Input type="text" placeholder="Email" />
              <Input type="text" placeholder="Idade" />
              <div>
                <Input type="text" placeholder="Senha" />
                <Input type="text" placeholder="Confirmar Senha" />
              </div>
              <ButtonModal>Cadastrar</ButtonModal>
            </>
          }
        />
      )}
    </>
  );
}

export default NavBarMain;