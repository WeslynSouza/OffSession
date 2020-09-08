import React from 'react';
import Cabecalho from '../../components/cabecalho';
import Slide from '../../components/slides';
import Card from '../../components/card';
import Rodape from '../../components/rodape';

import vingadores from '../../assets/img/vingadores.jpg';

import './styles.css';

export default props => {
    return (
        <div className='container'>
            <Cabecalho light='true'/>

            <main>
                <Slide img={vingadores} />

                <Card />
            </main>

            <Rodape>
                <a href="/">Meus ingressos</a>
                <a href="/">Ofertas</a>
                <a href="/">Perfil</a>
            </Rodape>
        </div>
    )
}