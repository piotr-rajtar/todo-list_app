import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './SearchResults.scss';
import Hero from '../Hero/Hero';
import {searchResultsData} from '../../data/dataStore';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.string,
  }

  render() {
    const {cards} = this.props;

    return(
      <section className={styles.component}>
        <Hero titleText={searchResultsData.title} image={searchResultsData.image} />

        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))} 
        </div>

      </section>
    );
  }
}

export default SearchResults;