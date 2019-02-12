import React from 'react';
import PropTypes from 'prop-types';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(expanded) {
    this.setState({ expanded: !expanded });
  }

  render() {
    const { review } = this.props;

    // format date
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const date = new Date(review.publishDate).toLocaleDateString('en-US', options);

    // hash scores for styling
    let reaction;
    if (review.score > 60) {
      reaction = 'positive';
    } else if (review.score > 39) {
      reaction = 'mixed';
    } else {
      reaction = 'negative';
    }

    // break review up into paragraphs
    const summary = review.body.split('\n').map(el => (
      <p key={el}>
        {el}
        <br />
      </p>
    ));

    // get state info for "view more"
    const { expanded } = this.state;
    const toggledClass = expanded ? 'expanded' : 'collapsed';

    return (
      <div className="review pad_top2 pad_btm2">
        <div className="head_wrap">
          <div className="score_wrap">
            <div className={`metascore_w header_size movie ${reaction} indiv`}>{review.score.toFixed(0)}</div>
          </div>
          <div className="pub_wrap title">
            <span>
              <a href="/">{review.publication}</a>
            </span>
            <span className="dash"> &ndash; </span>
            <span className="author">
              <a href="/">{review.author}</a>
            </span>
            <div className="date pad_top_half">{date}</div>
          </div>
        </div>
        <div className="summary_wrap pad_top_half">
          <div className={`summary ${toggledClass}`}>
            <a href="/" className="no_hover">{summary}</a>
            <br />
          </div>
          <button type="button" onClick={() => this.onClick(expanded)} className="read_full">{ expanded ? 'View Less' : 'Read Full Review'}</button>
        </div>
      </div>
    );
  }
}

export default ReviewListItem;

ReviewListItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    publication: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};
