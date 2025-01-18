import React from "react";
import '../OptimaCss/Gallery.css'; // Custom CSS file for styles

const GallerySlot1 = () => {
  const images = [
    "mars1.jpg",
    "nature.jpg",
    "wall.jpg",
    "nature.jpg",
    "mars1.jpg",
    "wall.jpg",
  ];

  return (
    <div className="GallerySlot1-container">
      {images.map((image, index) => (
        <div key={index} className="GallerySlot1-item">
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="GallerySlot1-img"
          />
          <div className="GallerySlot1-shine"></div>
        </div>
      ))}
    </div>
  );
};

export default GallerySlot1;
