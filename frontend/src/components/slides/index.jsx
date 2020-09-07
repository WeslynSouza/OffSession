import React from 'react';

import { FaCircle, FaRegCircle } from 'react-icons/fa';

import circle from '../../assets/img/circle.png';

import './styles.css';

export default props => {
    return (
        <div className='slide-container'>

            <div className='slide-header'>
                <h1>90% OFF</h1>
            </div>

            <div className="divisoria" style={{backgroundImage: `url(${circle})`}}>
                <img src={circle} className='circle-left' alt='teste'/>
                <img src={circle} className='circle-right' alt='teste'/>
            </div>

            <div className='slide-body'>
                <div className="slide-items">
                    <div className={`slide-item ${props.ativo ? 'active' : ''}`}>
                        <img src={props.img} alt={props.alt}/>
                    </div>
                </div>
            </div>

            <div className="slide-footer">
                <div className="slide-buttons">
                    <button>
                        <FaCircle/>
                    </button>
                    <button>
                        <FaRegCircle/>
                    </button>
                    <button>
                        <FaRegCircle/>
                    </button>
                </div>
            </div>
        </div>
    )
}