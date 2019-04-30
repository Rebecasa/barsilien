import React from 'react';

const Picture = (props) => {
  return (
    <div className= "picture"
         style={{
         backgroundImage: `url(${props.picture.images.standard_resolution.url})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: '50% 60%'
       }} />
  );

}

export default Picture;
