import React from 'react';
import './style.css'
import Radium, {StyleRoot} from 'radium';
import { slideInUp } from 'react-animations';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { BsPhone, BsX } from 'react-icons/bs'
// import imgInts from '../../../assets/imgInst.png'
import Banco1 from '../../../assets/bank1.jfif'
import Banco2 from '../../../assets/bank2.jfif'
import Banco3 from '../../../assets/bank3.jfif'
import Banco4 from '../../../assets/bank4.jfif'
import Banco5 from '../../../assets/bank5.jfif'
import Banco6 from '../../../assets/bank6.jfif'
// import Facul from '../../../assets/Facul.jpg'
// import LogoSite from '../../../assets/LogoSite.png'

const styles = {
    fade: {
      animation: 'x 0.5s',
      animationName: Radium.keyframes(slideInUp, 'fade')
    }
  }

function ModalInsts({ buttonclosemodal }) {
    return (
        <>
            <StyleRoot>
                <div className="container-modal-ints" style={styles.fade}>
                    <button id="btn-close-modal-inst" onClick={buttonclosemodal}><BsX size={40}/></button>
                    <p id="title-top-modal-inst">Conheça nossos parceiros</p>

                    <div id="content-insts-modal">
                        <img id="img-inst-modal" src={Banco1} alt="Institution"/>
                        <img id="img-inst-modal" src={Banco2} alt="Institution"/>
                        <img id="img-inst-modal" src={Banco3} alt="Institution"/>
                        <img id="img-inst-modal" src={Banco4} alt="Institution"/>
                        <img id="img-inst-modal" src={Banco5} alt="Institution"/>
                        <img id="img-inst-modal" src={Banco6} alt="Institution"/>
                    </div>

                        <div id="content-texts-modal-inst1">
                            <p id="title-modal-inst">Instituições</p>
                            <p id="desc-modal-inst">
                                Conheças os hemocentros que são parceiros do Conectando Vidas. Ou
                                junte-se a nós e ajude-nos a levar a doação de sangue a cada vez
                                mais áreas.
                            </p>
                            <div id="content-texts-modal-inst2">
                            <div>
                                <p id="title-contact-modal-inst">Seja nosso parceiro</p>
                                <p id="desc-contact-modal-inst">Apoie o Conectando Vidas</p>
                            </div>
                            <div id="button-modal-inst">
                                <button id="btn-modal-inst"><AiOutlineMail size={25}/> CV@gmail.com</button>
                                <button id="btn-modal-inst">< AiOutlinePhone size={25}/> (11) 2522-2125</button>
                                <button id="btn-modal-inst"><BsPhone size={25}/> (11) 9834-3245</button>
                            </div>
                        </div>
                        </div>
                </div>
            </StyleRoot>
        </>
    );
}

export default ModalInsts;