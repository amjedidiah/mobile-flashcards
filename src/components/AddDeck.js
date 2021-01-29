import React from 'react';
import Form from './Form';

const AddDeck = () => (
  <Form
    title="What is the title of your new deck?"
    inputs={[{name: 'title'}]}
    buttons={[{value: 'Submit', submit: () => {}}]}
  />
);

export default AddDeck;
