// Module imports
import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { blue, white } from '../../utils/colors';
import { Button } from '../styled';

const Btn = ({ onSubmit, value, style }) => (
  <Button style={{ backgroundColor: style || blue }} onPress={onSubmit}>
    <Text style={{ color: white, textAlign: 'center' }}>{value}</Text>
  </Button>
);

Btn.propTypes = {
  /**
   * Btn onSubmit
   */
  onSubmit: PropTypes.func,
  /**
   * Btn style
   */
  style: PropTypes.string,
  /**
   * Btn value
   */
  value: PropTypes.string
};

Btn.defaultProps = {
  onSubmit: () => {},
  style: '',
  value: ''
};

// Btn export
export default Btn;
