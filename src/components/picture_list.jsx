import React from 'react';
import Picture from './picture';

const PictureList = (props) => {
  const renderList = () => {
    return props.pictures.map((picture, index) => {
      return (
        <Picture
          key={index}
          picture={picture}
        />
      );
    });
  };

  return (renderList());
};







export default PictureList;

