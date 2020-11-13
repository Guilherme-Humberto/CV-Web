import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { 
  Container,
  Links,
  ButtonCloseModal
} from './styles';
import { logout } from '../../../config/auth'

const ModalNav = ({ closeModal }) => {
  const history = useHistory(null)

  const handleLogout = () => {
    logout()
    localStorage.removeItem('infos')
    history.push("/")
  }

  return (
    <Container
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ButtonCloseModal onClick={closeModal}>
        <AiOutlineClose size={30}/>
      </ButtonCloseModal>
      <Links>
        <Link to="/home">Inicial</Link>
        <Link to="/home/campaigns">Campanhas</Link>
        <Link to="/home/map">Locais</Link>
        <Link to="/home/historic">Histórico</Link>
        <Link onClick={handleLogout}>Sair</Link>
      </Links>
    </Container>
  );
};

export default ModalNav;
