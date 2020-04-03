import PropTypes from 'prop-types';
import React from 'react';

const Page = ({className, title, children}) => (
  <div className={className}>
    {title && <h1>{title}</h1>}
    {children}
  </div>
);

Page.defaultProps = {
  className: 'flexBox flexColumn',
  title: ''
};

Page.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
};

export default Page;
