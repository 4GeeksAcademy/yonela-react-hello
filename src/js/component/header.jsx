import React from 'react';
import { Button } from 'react-bootstrap';

const Header = () => {
    const containerStyle = {
        backgroundColor: '#deeef5',
        padding: '3rem', 
        margin: '0', 
        width: '100%',
        boxSizing: 'border-box',
        borderRadius: '8px', 

    };

    const headerStyle = {
        margin: '1.5rem', 
    };

    return (
        <div style={headerStyle}>
            <div style={containerStyle}>
                <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt
                    odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
                </p>
                <Button variant="primary" size="lg">Call to action!</Button>
            </div>
        </div>
    );
};

export default Header;
