import React from 'react';
import img from '../assets/images/capa.jpg'

const Cover = () => {
  return (
    <div className="cover-container">
        <img className="background_image" src={img} alt="cover" />
    </div>
  );
}

export default Cover;
