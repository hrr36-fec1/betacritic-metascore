import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';
import PropTypes from 'prop-types';

const ReviewList = (props) => {
  let reviewListItems = props.reviews.map(review => <ReviewListItem review={review} key={review._id} />);

  return (
    <div className="review_list">
      <div className="subsection_title">
        <a href="#">Critic Reviews</a>
      </div>
      <div className="list pad_top_half pad_btm1">
        <div className="critic_reviews2">
          {reviewListItems}
        </div>
      </div>
      <div className="pad_btm1">
        <a href="#" className="see_all boxed oswald">SEE ALL {props.reviews.length} REVIEWS</a>
      </div>
    </div>
  );
};

export default ReviewList;

ReviewList.propTypes = {
  reviews: PropTypes.array
};
