import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

const ReviewList = (props) => {

  return (
    <div className="review_list">
      <div className="subsection_title">
        <a href="#">Critic Reviews</a>
      </div>
      <div className="list pad_top_half pad_btm1">
        <div className="critic_reviews2">
          <ReviewListItem />
          <ReviewListItem />
          <ReviewListItem />
        </div>
      </div>
      <div className="pad_btm1">
        <a href="#" className="see_all boxed oswald">SEE ALL {props.length} REVIEWS</a>
      </div>
    </div>
  );
};

export default ReviewList;
