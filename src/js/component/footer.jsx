// src/components/Footer.js
import React from 'react';
import '../../styles/index.css';

const Footer = () => {

    const text = {
        margin: '0'
    };
    return (
        <footer className="footer">
            <p style={text}>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;