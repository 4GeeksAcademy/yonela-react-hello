// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/index.css'; // Asegúrate de crear este archivo para los estilos personalizados

const NavbarComponent = () => {
    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        setIsFixed(window.scrollY > 2); // Ajusta el valor según cuándo quieres que se vuelva fijo
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar className={isFixed ? 'fixed-navbar' : ''} bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto"> {/* Alinea los enlaces a la derecha */}
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#galeria">About</Nav.Link>
                        <Nav.Link href="#service">Service</Nav.Link>
                        <Nav.Link href="#contacto">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;