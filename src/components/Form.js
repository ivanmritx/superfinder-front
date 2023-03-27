import React, { useState, useRef, useEffect } from 'react';
import './Form.css';
import Products from './Products';
import background from '../images/background.jpg';

const Form = () => {

    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const inputSearchRef = useRef(null);

    const handleClick = async () => {
        setIsLoading(true);

        try {
            //`/superfinder/find?term=${inputSearchRef.current.value}`
            const response = await fetch(`http://localhost:8080/find?term=${inputSearchRef.current.value}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });

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
            <div className="overlay"
                style={{ backgroundImage: `url(${background})` }}>
                <div className="form-container">
                    {isLoading && <h2>Loading...</h2>}
                    <input
                        ref={inputSearchRef}
                        id="search-text"
                        name="search-text"
                        className="input-field"
                        type="text"
                        placeholder="Buscar" />
                    <button onClick={handleClick} className="button-search"><i className="fa fa-search"></i></button>
                </div>
            </div>

            {products ?
                (<Products products={products}></Products>) : <></>
            }

        </>
    );
};

export default Form; 