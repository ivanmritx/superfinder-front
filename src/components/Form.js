import React, { useState, useRef } from 'react';
import ReactGA from "react-ga4";
import { getCookieConsentValue } from "react-cookie-consent";
import Cookies from 'universal-cookie';
import './Form.css';
import Products from './Products';
import background from '../images/opa.jpg';
import Header from './Header';
import Markets from './Markets';
import About from './About';


const Form = () => {

    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    //const [err, setErr] = useState('');
    const inputSearchRef = useRef(null);
    const marketRef = useRef(null);

    const handleClick = async () => {
        setIsLoading(true);

        try {
            var apiUrl = "/superfinder";
            if (process.env.REACT_APP_API === "local") {
                apiUrl = "http://localhost:8080";
            } else if (process.env.REACT_APP_API === "remote") {
                apiUrl = "http://192.168.0.14/superfinder";
            }

            const response = await fetch(`${apiUrl}/find?term=${inputSearchRef.current.value}`, {
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
            if (!getCookieConsentValue(("disclaimercookie"))) {
                console.log("Disclaimerval: dentro");
                ReactGA.event({
                    category: "Search",
                    action: "Search results",
                    label: "Search", // optional
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
            window.scrollTo({
                top: marketRef.current.offsetTop + 280,
                behavior: 'smooth',
            });
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    };

    return (
        <>
            {isLoading && <div className='loading'></div>}
            <div className="background" style={{ backgroundImage: `url(${background})` }}>
                <About></About>
                <Header></Header>
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
                    <div ref={marketRef}>
                        <Markets ></Markets>
                    </div>
                </div>
            </div>
            {products ?
                (<Products products={products}></Products>) : <></>
            }

        </>
    );
};

export default Form; 