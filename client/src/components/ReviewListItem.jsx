import React from 'react';

const ReviewListItem = (props) => {

  return (
    <div className="review pad_top2 pad_btm2">
      <div className="head_wrap">
        <div className="score_wrap">
          <div className="metascore_w header_size movie positive indiv">Score</div>
        </div>
        <div className="pub_wrap title">
          <span className="source">
            <a href="#">Publication</a>
          </span>
          <span className="dash">-</span>
          <span className="author">
            <a href="#">Author</a>
          </span>
          <div className="date pad_top_half"></div>
        </div>
      </div>
      <div className="summary_wrap pad_top_half">
        <div className="summary">
          <a href="#" className="no_hover">Body</a>
          <a href="#" className="read_full">Ready Full Review</a>
        </div>
      </div>
    </div>
  );
};

export default ReviewListItem;
