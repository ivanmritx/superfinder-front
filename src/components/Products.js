import React, { useState, useRef, useEffect } from 'react';

const Products = (props) => {
    console.log(props);
    const { products } = props;
    const divSearchRef = useRef(null);
    divSearchRef.current?.scrollIntoView({ behavior: "smooth" });

    useEffect(() => {
        console.log("dentro");
        divSearchRef.current.scrollIntoView({ behavior: "smooth" });
      }, []);

    return (
        <div ref={divSearchRef} className='products-list-container'>
            <h1>Resultados</h1>
            <div className='products-list'>
                {products.map((product, index) => (
                    <div className='product' key={index}>
                        <p className='product-market'>{product.market}</p>
                        <p className='product-name'>{product.name}</p>
                        <p className='product-price'>{product.productPrice}</p>

                    </div>
                ))}
            </div>
        </div>

    );
}

export default Products; 