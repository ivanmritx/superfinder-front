import React from 'react';
import './Header.css';

const Header = (props) => {
const { title, subtitle } = props;
return (
<div className="header">
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
</div>);
}

export default Header;