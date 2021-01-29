import React from 'react';
import PropTypes from 'prop-types';
import Btn from './Button';

const ButtonGroup = ({buttons}) =>
  buttons.map(({value, style, submit}, i) => (
    <Btn key={`${value}${i}`} value={value} style={style} onSubmit={submit} />
  ));

ButtonGroup.propTypes = {
  /**
   * ButtonGroup buttons
   */
  buttons: PropTypes.array,
};

ButtonGroup.defaultProps = {
  buttons: [],
};

export default ButtonGroup;
