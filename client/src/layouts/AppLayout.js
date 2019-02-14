import React from 'react';
import T from 'prop-types';

const AppLayout = ({ children }) => (
  <>
    <h3>App Layout</h3>
    {children}
  </>
);

AppLayout.propTypes = {
  children: T.oneOfType([T.element, T.arrayOf(T.element)]).isRequired,
};

export default AppLayout;