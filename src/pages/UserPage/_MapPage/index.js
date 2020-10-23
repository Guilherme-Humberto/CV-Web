import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { AiFillPlusCircle } from 'react-icons/ai'
import ModalMap from "../../../components/Modals/ModalMap";

import NavBar from '../../../components/Navbar/NavBarUserPage'
import Fetcher from '../../../hooks/Fetcher'


function Locals() {
  const { data } = Fetcher("instituicoes")
  // Definindo estados
    const [isTeste, setTeste] = useState(null)
    const [initialPosition, setInitialPosition] = useState([0, 0]);
    const [isActiveModal, setIsActiveModal] = useState(false)

    // Pegando localização do usuário
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        setInitialPosition([latitude, longitude])
      })
    }, [])

    if(!data) return <h1>Carregando...</h1>

  return (
    <>
      <NavBar />
      <Map center={initialPosition} zoom={12} >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Iterando sobre o array teste e adcionando as informações no estado */}
        {data.map((item, index) => (
            <Marker 
                key={index} 
                position={[item.lat, item.long]} 
                onclick={() => setTeste(item)}
            />
        ))}

          {/* Definindo estrutura do popup */}
        {isTeste && 
          <Popup 
            position={[isTeste.lat, isTeste.long]}
            onClose={() => setTeste(null)}
        >
            <div>
                <h5>{isTeste.name}</h5>
                <p>{isTeste.desc}</p>
                <button 
                  id="btnOpen-Insti-Info" 
                  onClick={() => setIsActiveModal(true)}>
                    <AiFillPlusCircle size={30}/>
                </button>
            </div>
          </Popup>
        }
      </Map>

      {/* Definindo condição para abrir modal e passando parametros */}
      {isActiveModal && (
        <ModalMap
          buttonclose={() => setIsActiveModal(false)}
          infos={isTeste}
        />
        )
      }
    </>
  );
}

export default Locals;