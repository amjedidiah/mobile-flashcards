import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addCardToDeck} from '../redux/actions/decks';
import Form from './Form';

const AddCard = (props) => (
  <Form
    inputs={[{name: 'question'}, {name: 'answer'}]}
    buttons={[
      {
        value: 'Submit',
        submit: ({question, answer}) => {
          props.addCardToDeck(props.route?.params?.title, {question, answer});
          props.navigation.navigate('Deck', {
            title: props.route?.params?.title,
          });
        },
      },
    ]}
  />
);

AddCard.propTypes = {
  addCardToDeck: PropTypes.func,
  navigation: PropTypes.object,
  route: PropTypes.object,
};

AddCard.defaultProps = {
  addCardToDeck: () => {},
  navigation: {},
  route: {},
};

export default connect(null, {addCardToDeck})(AddCard);
