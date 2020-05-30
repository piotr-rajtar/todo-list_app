import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsFromAllLists} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;

  return {
    cards: getCardsFromAllLists(state, searchString),
  };
  
};

export default connect(mapStateToProps)(SearchResults);