// src/components/Galeria.js
import React from 'react';

const Galeria = () => {
  const images = [
    'https://via.placeholder.com/500x325',
    'https://via.placeholder.com/500x325',
    'https://via.placeholder.com/500x325',
    'https://via.placeholder.com/500x325',
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {images.map((src, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card">
              <img src={src} className="card-img-top" alt={`Imagen ${index + 1}`} />
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt.
                </p>
                <button className="btn btn-primary">Find out more</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;