import React from 'react';
import {red} from '../utils/colors';
import Form from './Form';

const Deck = () => (
  <Form
    title="Deck 2"
    subTitle="0 cards"
    buttons={[
      {value: 'Add Card', submit: () => {}},
      {value: 'Start Quiz', submit: () => {}},
      {value: 'Delete Deck', style: red, submit: () => {}},
    ]}
  />
);

export default Deck;
