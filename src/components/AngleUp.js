import React, { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import './AngleUp.css';

const AngleUp = (props) => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    return (
        <>
            <div className="top-to-btm">
                {" "}
                {showTopBtn && (
                    <FaAngleUp
                        className="icon-position icon-style"
                        onClick={goToTop}
                    />
                )}{" "}
            </div>
        </>
    );
}

export default AngleUp; 