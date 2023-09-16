import React from 'react';
import './Markets.css';
import alimerka from '../images/alimerka.png'
import carrefour from '../images/carrefour.png'
import dia from '../images/dia.png'
import eroski from '../images/eroski.png'
import hipercor from '../images/hipercor.png'
import masymas from '../images/masymas.png'
import mercadona from '../images/mercadona.png'
import aldi from '../images/aldi.svg'

const Markets = () => {
    return (
        <>
            <div className='market-container'>
                <span>Supermercados</span>
                <div className='market-list'>
                    <a href="https://www.elcorteingles.es/supermercado" target="_blank" rel="noopener noreferrer"><img height="489px" width="868px"  src={hipercor} alt="Logo Hipercor"></img></a>
                    <a href="https://www.carrefour.es" target="_blank" rel="noopener noreferrer"><img height="400px" width="400px" src={carrefour} alt="Logo Carrefour"></img></a>
                    <a href="https://supermercado.eroski.es" target="_blank" rel="noopener noreferrer"><img  height="512px" width="512px" src={eroski} alt="Logo Eroski"></img></a>
                    <a href="https://www.dia.es" target="_blank" rel="noopener noreferrer"><img  height="225px" width="225px" src={dia} alt="Logo Día"></img></a>
                    <a href="https://www.mercadona.es" target="_blank" rel="noopener noreferrer"><img  height="225px" width="225px" src={mercadona} alt="Logo Mercadona"></img></a>
                    <a href="https://www.aldi.es" target="_blank" rel="noopener noreferrer"><img  height="225px" width="225px" src={aldi} alt="Logo Aldi"></img></a>
                    <a href="https://alimerkaonline.es" target="_blank" rel="noopener noreferrer"><img height="225px" width="225px" src={alimerka} alt="Logo Alimerka"></img></a>
                    <a href="https://www.supermasymasonline.com" target="_blank" rel="noopener noreferrer"><img  height="225px" width="225px" src={masymas} alt="Logo Mas y Mas"></img></a>
                </div>
            </div>
        </>);
}

export default Markets;