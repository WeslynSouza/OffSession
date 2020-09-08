import React from 'react';

import { FaRegCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

import './styles.css';

export default props => {
    return (
        <div className="card">
            <div className="oferta">
                <h1>50% OFF</h1>
                
                <div className="oferta-info">
                    <div className="idadeIndicativa">L</div>
                    <div className="filmeGenero">Fantasia</div>
                </div>
            </div>
            <div className="filme">
                <h1 className="titulo">Vingadores: guerra infinita</h1>

                <p>
                    <span><FaMapMarkerAlt/></span> Cinemark Village Mall
                </p>
                <p>
                    <span><FaRegCalendarAlt/></span> Use de segunda á sexta
                </p>
                <p>
                    <span><FaClock/></span> Sessões até 18:30
                </p>
            </div>
        </div>
    )
}