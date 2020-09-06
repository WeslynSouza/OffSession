import React from 'react';
import { FaArrowLeft, FaQuestionCircle } from 'react-icons/fa';
import './styles.css';


import LogoClara from '../../assets/img/logoOffsession-fundoClaro.svg';
import LogoEscura from '../../assets/img/logoOffsession-fundoEscuro.svg';

export default props => {

    function botaoVoltar(back){
        if(back === 'true'){
            return (
                <a href='/' className='botao-voltar'>
                    <FaArrowLeft/>
                </a>
            )
        }else{
            return '';
        }
    }

    return (
        <header>
            {botaoVoltar(props.back)}

            <img className='header-logo' src={props.light ? LogoClara : LogoEscura} alt="Logo OffSession"/>

            <a href='/' className='button-faq'>
                <FaQuestionCircle/>
            </a>
        </header>
    )
}