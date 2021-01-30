import React from 'react';
import PropTypes from 'prop-types';
import {red} from '../utils/colors';
import Form from './Form';
import {deleteDeck} from '../redux/actions/decks';
import {connect} from 'react-redux';
import {getDeckCardsCount} from '../redux/selectors';

const Deck = (props) => (
  <Form
    title={props.route?.params?.title}
    subTitle={`${props.deckCardsCount} cards`}
    buttons={[
      {
        value: 'Add Card',
        submit: () =>
          props.navigation.navigate('Add Card', {
            title: props.route?.params?.title,
          }),
      },
      {
        value: 'Start Quiz',
        submit: () =>
          props.navigation.navigate('Quiz', {
            title: props.route?.params?.title,
          }),
      },
      {
        value: 'Delete Deck',
        style: red,
        submit: () => {
          props.deleteDeck(props.route?.params?.title);
          props.navigation.navigate('Decks');
        },
      },
    ]}
  />
);

Deck.propTypes = {
  deckCardsCount: PropTypes.number,
  deleteDeck: PropTypes.func,
  navigation: PropTypes.object,
  route: PropTypes.object,
};

Deck.defaultProps = {
  deckCardsCount: 0,
  deleteDeck: () => {},
  navigation: {},
  route: {},
};

const mapStateToProps = ({decks}, {route}) => ({
  deckCardsCount: getDeckCardsCount(decks, route?.params?.title),
});

export default connect(mapStateToProps, {deleteDeck})(Deck);
