// Module imports
import React from 'react';
import {Text} from 'react-native';
import {green, red} from '../utils/colors';
import Form from './Form';
import {InfoText} from './styled';

const Quiz = () => (
  <Form
    title="Does React Native work with Android?"
    buttons={[
      {value: 'Correct', style: green, submit: () => {}},
      {value: 'Incorrect', style: red, submit: () => {}},
    ]}
    subTitle="Question"
  >
    <InfoText>
      <Text>{'1 / 2'}</Text>
    </InfoText>
  </Form>
);

export default Quiz;
