import React from 'react';
import StarsRating from 'react-stars-rating';

const Review = (props) => {
  return (
    <div className="card">
        <div className="card-category">
          <StarsRating rating={props.review.rating} theme="warning" disabled={true} starDimension="30px"/>
        </div>
        <div className="card-description">
          <p>{props.review.text}</p>
        </div>
    </div>
  );
};


export default Review;
