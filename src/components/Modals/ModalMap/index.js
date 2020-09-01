// Este é o Modal do Mapa (passando informações via propriedades)

import React from 'react';
import './styles.css'
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
 
const styles = {
  fade: {
    animation: 'x 0.5s',
    animationName: Radium.keyframes(slideInRight, 'fade')
  }
}

function ModalMap(props) {
  return (
      <>
        <StyleRoot>
            <div className="container-modal-map" style={styles.fade}>
              <div id="content-modal-map">
                <div id="icon-top">{props.buttonclose}</div>
                <div id="container-form">
                  <p id="formtitle-map">{props.info_name}</p>
                </div>
              </div>
            </div>
      </StyleRoot>
      </>
  );
}

export default ModalMap;