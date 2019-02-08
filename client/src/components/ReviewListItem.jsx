import React from 'react';
import PropTypes from 'prop-types';

const ReviewListItem = (props) => {
  var options = { month: 'short', day: 'numeric', year: 'numeric' };
  let date = new Date(props.review.publishDate).toLocaleDateString("en-US", options)

  let reaction = props.review.score > 60 ? "positive" : props.review.score > 39 ? "mixed" : "negative";

  return (
    <div className="review pad_top2 pad_btm2">
      <div className="head_wrap">
        <div className="score_wrap">
          <div className={`metascore_w header_size movie ${reaction} indiv`}>{props.review.score.toFixed(0)}</div>
        </div>
        <div className="pub_wrap title">
          <span className="source">
            <a href="#">{props.review.publication}</a>
          </span>
          <span className="dash"> &ndash; </span>
          <span className="author">
            <a href="#">{props.review.author}</a>
          </span>
          <div className="date pad_top_half">{date}</div>
        </div>
      </div>
      <div className="summary_wrap pad_top_half">
        <div className="summary">
          <a href="#" className="no_hover">{props.review.body}</a>
          <br />
          <a href="#" className="read_full">Read Full Review</a>
        </div>
      </div>
    </div>
  );
};

export default ReviewListItem;

ReviewListItem.propTypes = {
  review: PropTypes.object
};
