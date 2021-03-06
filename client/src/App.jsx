import React from 'react';
import axios from 'axios';
import _ from 'underscore';

import ReviewList from './components/ReviewList';
import Metascore from './components/Metascore';
import styles from './style.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      scores: [],
    };
    this.queryData = this.queryData.bind(this);
  }

  componentDidMount() {
    this.queryData()
      .then((res) => {
        const reviews = _.sortBy(res.data, 'score').reverse();
        this.setState({ reviews });
        return res;
      })
      .then((res) => {
        let scores = res.data.map(review => review.score);
        scores = _.sortBy(scores);
        this.setState({ scores });
      });
  }

  // eslint-disable-next-line class-methods-use-this
  queryData(movieId = 1) {
    return axios.get(`/api/movies/${movieId}/reviews`);
  }

  render() {
    const { scores } = this.state;
    const { reviews } = this.state;
    if (scores.length === 0 || reviews.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <div className={styles.container}>
        <div className={`${styles.fxdcol} ${styles.reviews}`}>
          <Metascore scores={scores} type="critic" />
          <ReviewList reviews={reviews} type="critic" />
        </div>
        <div className={`${styles.fxdcol} ${styles.reviews}`}>
          <Metascore scores={scores} type="user" />
          <ReviewList reviews={reviews} type="user" />
        </div>
      </div>
    );
  }
}

export default App;
