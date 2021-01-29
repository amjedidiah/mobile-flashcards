import React from 'react';
import PropTypes from 'prop-types';
import {Container} from './styled';

const Layout = ({children}) => <Container>{children}</Container>;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

Layout.defaultProps = {
  children: <></>,
};

export default Layout;
