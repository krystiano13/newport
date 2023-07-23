import React from "react";
import { GalleryData } from "../components/GalleryData";
export const Gallery = () => {
  return (
    <main className="gallery">
      <div className="container-lg">
        <div className="row">
          {GalleryData.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-12">
              <img src={item.img} alt={item.title} />
              <p className="lead">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
