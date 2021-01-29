import React from 'react';
import PropTypes from 'prop-types';
import {red} from '../utils/colors';
import Form from './Form';

const Deck = ({navigation, route}) => (
  <Form
    title={route?.params?.title}
    subTitle="0 cards"
    buttons={[
      {
        value: 'Add Card',
        submit: () => navigation.navigate('Add Card'),
      },
      {
        value: 'Start Quiz',
        submit: () => navigation.navigate('Quiz'),
      },
      {value: 'Delete Deck', style: red, submit: () => {}},
    ]}
  />
);

Deck.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

Deck.defaultProps = {
  navigation: {},
  route: {},
};

export default Deck;
