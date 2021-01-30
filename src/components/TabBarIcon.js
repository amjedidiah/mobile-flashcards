import React from 'react';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

/**
 * TabBarIcon component
 * @component
 * @return {object} - The UI DOM object
 */
const TabBarIcon = ({ screenName, tintColor }) =>
  ({
    Home: <FontAwesome name="home" size={30} color={tintColor} />
  }[screenName] || <Ionicons name="add" size={30} color={tintColor} />);

TabBarIcon.propTypes = {
  screenName: PropTypes.string,
  tintColor: PropTypes.string
};

TabBarIcon.defaultProps = {
  screenName: '',
  tintColor: ''
};

// TabBarIcon export
export default TabBarIcon;
