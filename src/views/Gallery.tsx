import React from 'react';
import i1 from '../assets/i1.jpg';

export const Gallery = () => {
    return (
      <main className="gallery">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <img src={i1} alt="Clouds" />
              <p className="lead">Clouds Over Ranier</p>
            </div>
            <div className="col-lg-4 col-md-12">
              <img src={i1} alt="Clouds" />
              <p className="lead">Clouds Over Ranier</p>
            </div>
            <div className="col-lg-4 col-md-12">
              <img src={i1} alt="Clouds" />
              <p className="lead">Clouds Over Ranier</p>
            </div>
          </div>
        </div>
      </main>
    );
}