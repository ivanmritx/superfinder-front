import React, { useRef, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AngleUp from './AngleUp';
import './Products.css';

const Products = (props) => {
    //console.log(props);
    const { products } = props;
    const { isLoading } = props;
    const divSearchRef = useRef(null);



    useEffect(() => {
        divSearchRef.current.scrollIntoView({ behavior: "smooth" });
    }, [isLoading]);

    return (
        <>
            <AngleUp />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='product-result-wave'>
                <path fill="#ffffff" fillOpacity="1" d="M0,288L24,250.7C48,213,96,139,144,112C192,85,240,107,288,144C336,181,384,235,432,229.3C480,224,528,160,576,160C624,160,672,224,720,256C768,288,816,288,864,277.3C912,267,960,245,1008,202.7C1056,160,1104,96,1152,101.3C1200,107,1248,181,1296,192C1344,203,1392,149,1416,122.7L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
            </svg>
            <div ref={divSearchRef} className='products-list-container'>
                <h1>Resultados</h1>
                <div className="flex">
                    {products.map((product, index) => (

                        <section key={index}>
                            <div>
                                <LazyLoadImage
                                    alt="Product image"
                                    src={`${product.image}`}
                                />
                            </div>
                            <h2>{product.name}</h2>
                            <p>{product.market}: {product.productPrice}</p>
                            {product.priceUnitOrKg && (
                                <p className="unitPrice">
                                    ({product.priceUnitOrKg})
                                </p>
                            )}
                        </section>

                    ))}</div>

            </div>
        </>
    );
}

export default Products; 