import React, { useState, useEffect } from 'react';
import './Markets.css';
import alimerka from '../images/alimerka.png'
import carrefour from '../images/carrefour.png'
import dia from '../images/dia.png'
import eroski from '../images/eroski.png'
import hipercor from '../images/hipercor.png'
import masymas from '../images/masymas.png'
import mercadona from '../images/mercadona.png'
import aldi from '../images/aldi.svg'
import gadis from '../images/gadis.jpg'
import alcampo from '../images/alcampo.png'
import consum from '../images/consum.png'

const Markets = ({ onSelectionChange }) => {

    const [selections, setSelections] = useState({});

    useEffect(() => {
        const storedSelections = JSON.parse(localStorage.getItem('selections'));
        if (storedSelections) {
            setSelections(storedSelections);
        }
    }, []);

    useEffect(() => {
        onSelectionChange(selections);
    }, [selections]);

    const handleSelection = (event, market) => {
        event.preventDefault();
        setSelections(prevSelections => ({
            ...prevSelections,
            [market]: !prevSelections[market]
        }));
    };

    return (
        <>
            <div className='market-container'>
                <span>Selecciona tus supermercados:</span>
                <div className='market-list'>
                    <div>
                        <img
                            height="489px"
                            width="868px"
                            src={hipercor}
                            alt="Logo Hipercor"
                            onClick={event => handleSelection(event, 'HIPERCOR')}
                            className={`${selections.HIPERCOR ? '' : 'market-selected'}`}
                        />
                    </div>
                    <div >
                        <img
                            height="400px"
                            width="400px"
                            src={carrefour}
                            alt="Logo Carrefour"
                            onClick={event => handleSelection(event, 'CARREFOUR')}
                            className={`${selections.CARREFOUR ? '' : 'market-selected'}`}
                        />
                    </div>
                    <div>
                        <img
                            height="512px"
                            width="512px"
                            src={eroski}
                            alt="Logo Eroski"
                            onClick={event => handleSelection(event, 'EROSKI')}
                            className={`${selections.EROSKI ? '' : 'market-selected'}`}
                        />
                    </div>
                    <div>
                        <img
                            height="225px"
                            width="225px"
                            src={dia}
                            alt="Logo Día"
                            onClick={event => handleSelection(event, 'DIA')}
                            className={`${selections.DIA ? '' : 'market-selected'}`}
                        />
                    </div>
                    <div>
                        <img
                            height="200px"
                            width="173px"
                            src={mercadona}
                            alt="Logo Mercadona"
                            onClick={event => handleSelection(event, 'MERCADONA')}
                            className={`${selections.MERCADONA ? '' : 'market-selected'}`}
                        />
                    </div>
                    <div>
                        <img
                            height="200px"
                            width="200px"
                            src={gadis}
                            alt="Logo Gadis"
                            onClick={event => handleSelection(event, 'GADIS')}
                            className={`${selections.GADIS ? '' : 'market-selected'}`}
                        />
                    </div>
                    <div>
                        <img
                            height="225px"
                            width="225px"
                            src={aldi}
                            alt="Logo Aldi"
                            onClick={event => handleSelection(event, 'ALDI')}
                            className={`${selections.ALDI ? '' : 'market-selected'}`}
                        />
                    </div>
                    <div>
                        <img
                            height="1080px"
                            width="1080px"
                            src={alcampo}
                            alt="Logo Alcampo"
                            onClick={event => handleSelection(event, 'ALCAMPO')}
                            className={`${selections.ALCAMPO ? '' : 'market-selected'}`}
                        />
                    </div>
                    <div>
                        <img
                            height="120px"
                            width="120px"
                            src={consum}
                            alt="Logo Consum"
                            onClick={event => handleSelection(event, 'CONSUM')}
                            className={`${selections.CONSUM ? '' : 'market-selected'}`}
                        />
                    </div>
                    <div>
                        <img
                            height="225px"
                            width="225px"
                            src={alimerka}
                            alt="Logo Alimerka"
                            onClick={event => handleSelection(event, 'ALIMERKA')}
                            className={`${selections.ALIMERKA ? '' : 'market-selected'}`}
                        />
                    </div>
                    <div>
                        <img
                            height="225px"
                            width="225px"
                            src={masymas}
                            alt="Logo Mas y Mas"
                            onClick={event => handleSelection(event, 'MASYMAS')}
                            className={`${selections.MASYMAS ? '' : 'market-selected'}`}
                        />
                    </div>

                </div>
            </div>
        </>);
}

export default Markets;