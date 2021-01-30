import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {saveDeck} from '../redux/actions/decks';
import Form from './Form';

const AddDeck = (props) => (
  <Form
    title="What is the title of your new deck?"
    inputs={[{name: 'title'}]}
    buttons={[
      {
        value: 'Submit',
        submit: ({title}) => {
          props.saveDeck(title, props.navigation);
          props.navigation.navigate('Decks');
        },
      },
    ]}
  />
);

AddDeck.propTypes = {
  navigation: PropTypes.object,
  saveDeck: PropTypes.func,
};

AddDeck.defaultProps = {
  navigation: {},
  saveDeck: () => {},
};

export default connect(null, {saveDeck})(AddDeck);
