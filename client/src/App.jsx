import React from 'react';
import axios from 'axios';
import _ from 'underscore';

import ReviewList from './components/ReviewList';
import Metascore from './components/Metascore';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      scores: [],
    };
  }

  componentDidMount() {
    this.queryData();
  }

  queryData(movieId = 1) {
    axios.get(`/api/movies/${movieId}/reviews`)
      .then((res) => {
        const reviews = _.sortBy(res.data, 'score').reverse();
        this.setState({ reviews });
        return res;
      })
      .then((res) => {
        let scores = res.data.map(review => review.score);
        scores = _.sortBy(scores);
        this.setState({ scores });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { scores } = this.state;
    const { reviews } = this.state;

    if (scores.length === 0 || reviews.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <div className="fxdcol gu4 reviews">
        <Metascore scores={scores} />
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

export default App;
