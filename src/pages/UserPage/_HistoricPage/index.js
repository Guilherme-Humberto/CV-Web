import React from 'react';
import './styles.css'

import NavBarUserPage from '../../../components/NavBarUserPage/index'

function _HistoricPage() {
  return (
      <>
        <NavBarUserPage />
        
        <div className="container-map-page">
          <div id="container-content-map-page">
            <div id="texts-top-historic">
              <p id="title-top-his">Histórico de doações</p>
              <p id="desc-top-his">Informe nos campos abaixo, as informações referente a sua última doação</p>
            </div>
          </div>
        </div>

      </>
  );
}

export default _HistoricPage;