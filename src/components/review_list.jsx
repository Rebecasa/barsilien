import React from 'react';
import Review from './review';

const ReviewList = (props) => {
  const renderList = () => {
    return props.reviews.map((review, index) => {
      return (
        <Review
          key={index}
          review={review}
        />
      );
    });
  };

  return (renderList());
};



export default ReviewList;
