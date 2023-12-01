import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactGA from "react-ga4";
import { getCookieConsentValue } from "react-cookie-consent";
import Cookies from 'universal-cookie';
import './Form.css';
import Products from './Products';
import Header from './Header';
import Markets from './Markets';


const Form = () => {

    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [selections, setSelections] = useState({});
    //const [err, setErr] = useState('');
    const inputSearchRef = useRef(null);

    const onSelectionChange = (newSelections) => {
        setSelections(newSelections);
      };

    const handleClick = async () => {
        if(inputSearchRef.current.value===""){
            return;
        }

        if(!selections || Object.values(selections).every(value => !value) ){
            toast.error('Selecciona al menos un supermercado del listado inferior.');
            return;
        }

        setIsLoading(true);
        try {
            var apiUrl = "/superfinder";
            if (process.env.REACT_APP_API === "local") {
                apiUrl = "http://localhost:8080";
            } else if (process.env.REACT_APP_API === "remote") {
                apiUrl = "http://192.168.0.14/superfinder";
            } else if (process.env.REACT_APP_API === "render") {
                apiUrl = "https://api.supermasbarato.es";
            }

            localStorage.setItem('selections', JSON.stringify(selections));

            const selectedMarkets = Object.keys(selections).filter(market => selections[market]);
            const response = await fetch(`${apiUrl}/find?term=${inputSearchRef.current.value}&markets=${selectedMarkets.join(',')}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });

            if (!response.ok && !getCookieConsentValue(("disclaimercookie"))) {
                ReactGA.event({
                    category: "Search",
                    action: "Search error",
                    label: "error", // optional
                    value: 0, // optional, must be a number
                    nonInteraction: false, // optional, true/false
                    transport: "xhr", // optional, beacon/xhr/image
                });
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();

            setProducts(result);

            // Send a custom event
            if (getCookieConsentValue(("disclaimercookie"))) {

                ReactGA.event({
                    category: "Search",
                    action: `Search Results`,
                    label: `Search`, // optional
                    value: result.length, // optional, must be a number
                    nonInteraction: false, // optional, true/false
                    transport: "xhr", // optional, beacon/xhr/image
                });

                ReactGA.event({
                    category: "Search",
                    action: `Search Results: ${inputSearchRef.current.value}`,
                    label: `Search ${inputSearchRef.current.value}`, // optional
                    value: result.length, // optional, must be a number
                    nonInteraction: false, // optional, true/false
                    transport: "xhr", // optional, beacon/xhr/image
                });
            } else {
                const cookies = new Cookies();
                cookies.remove('_ga', { path: '/' });
                cookies.remove('_ga_D6FTBSGCW9', { path: '/' });
                cookies.remove('_gat', { path: '/' });
                cookies.remove('_gid', { path: '/' });
            }


        } catch (err) {
            //setErr(err.message);
            console.log("Se ha producido un error inesperado.")
        } finally {
            setIsLoading(false);
          
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    };

    return (
        <>
            <ToastContainer />
            {isLoading && <div className='loading'></div>}
            <div >
                <Header title="Super más barato" subtitle="Busca y compara los precios de productos en distintas cadenas de supermercados de España. Encuentra los productos al precio más barato y ahorra dinero en tu próxima lista de la compra."></Header>
                <div className="overlay">
                    <div className="form-container">
                        <input
                            ref={inputSearchRef}
                            id="search-text"
                            name="search-text"
                            className="input-field"
                            type="text"
                            placeholder="Producto a buscar"
                            onKeyDown={handleKeyDown} />
                        <button onClick={() => handleClick()} className="button-search" title="Buscar"><i className="fa fa-search"></i></button>
                    </div>
                    <div>
                        <Markets onSelectionChange={onSelectionChange}></Markets>
                    </div>
                </div>
            </div>
            {products ?
                (<Products products={products} isLoading={isLoading}></Products>) : <></>
            }

        </>
    );
};

export default Form; 