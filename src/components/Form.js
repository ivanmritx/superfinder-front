import React, { useState, useRef } from 'react';
import './Form.css';
import Products from './Products';
import background from '../images/opa.png';
import Header from './Header';
import Markets from './Markets';

const Form = () => {

    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const inputSearchRef = useRef(null);

    const handleClick = async () => {
        setIsLoading(true);

        try {

            const response = await fetch(`/superfinder/find?term=${inputSearchRef.current.value}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });

            /*const response = await fetch(`http://localhost:8080/find?term=${inputSearchRef.current.value}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });*/

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();

            setProducts(result);


        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);

        }
    };

    return (
        <>
            <div className="background" style={{ backgroundImage: `url(${background})` }}>
                <Header></Header>
                <div className="overlay">
                    <div className="form-container">
                        <div className='loading'>
                            {isLoading && <span>Loading...</span>}
                        </div>
                        <input
                            ref={inputSearchRef}
                            id="search-text"
                            name="search-text"
                            className="input-field"
                            type="text"
                            placeholder="Buscar" />
                        <button onClick={handleClick} className="button-search" title="search"><i className="fa fa-search"></i></button>
                    </div>
                    <Markets></Markets>
                </div>
            </div>
            {products ?
                (<Products products={products}></Products>) : <></>
            }

        </>
    );
};

export default Form; 