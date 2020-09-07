import React from 'react';
import { FaArrowLeft, FaQuestionCircle } from 'react-icons/fa';
import './styles.css';


import LogoClara from '../../assets/img/logoOffsession-fundoEscuro.svg';
import LogoEscura from '../../assets/img/logoOffsession-fundoClaro.svg';

export default props => {

    return (
        <header>
            <div className="fundo"></div>

            <a href='/' className={`botao-voltar ${props.back ? '' : 'botao-off'}`}>
                <FaArrowLeft/>
            </a>

            <img className='header-logo' src={props.light ? LogoClara : LogoEscura} alt="Logo OffSession"/>

            <a href='/' className='button-faq' style={{color: props.light ? '#fff' : '#0C5DA5'}}>
                <FaQuestionCircle/>
            </a>
        </header>
    )
}