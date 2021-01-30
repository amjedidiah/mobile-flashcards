import React from 'react';
import PropTypes from 'prop-types';
import Btn from './Button';

const ButtonGroup = ({ buttons, inputs }) =>
  buttons.map(({ value, style, submit }, i) => (
    <Btn
      key={`${value}${i}`}
      value={value}
      style={style}
      onSubmit={() => submit(inputs)}
    />
  ));

ButtonGroup.propTypes = {
  /**
   * ButtonGroup buttons
   */
  buttons: PropTypes.array,
  /**
   * ButtonGroup inputs
   */
  inputs: PropTypes.object
};

ButtonGroup.defaultProps = {
  buttons: [],
  inputs: {}
};

export default ButtonGroup;
