import './Markets.css';
import alimerka from '../images/alimerka.png'
import carrefour from '../images/carrefour.png'
import dia from '../images/dia.png'
import eroski from '../images/eroski.png'
import hipercor from '../images/hipercor.png'
import masymas from '../images/masymas.png'

const Markets = () => {
return (
<>
<div className='market-container'>
    <span>Supermercados</span>
    <div className='market-list'>
        <img src={hipercor} alt="Logo Hipercor"></img>
        <img src={carrefour} alt="Logo Carrefour"></img>
        <img src={eroski}alt="Logo Eroski"></img>
        <img src={dia} alt="Logo Día"></img>
        <img src={alimerka} alt="Logo Alimerka"></img>
        <img src={masymas} alt="Logo Mas y Mas"></img>
    </div>
</div>
</>);
}

export default Markets;