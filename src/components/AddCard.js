import React from 'react';
import Form from './Form';

const AddCard = () => (
  <Form
    inputs={[{name: 'question'}, {name: 'answer'}]}
    buttons={[{value: 'Submit', submit: () => {}}]}
  />
);

export default AddCard;
