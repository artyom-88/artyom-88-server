import PropTypes from 'prop-types';
import React from 'react';

const LoadingIndicator = ({ className }) => (
  <div className={`ag-flexbox flexGrow-1 justifyContentCenter alignItemsCenter ${className}`}>
    <div>Loading...</div>
  </div>
);

LoadingIndicator.defaultProps = {
  className: '',
};

LoadingIndicator.propTypes = {
  className: PropTypes.string,
};

export default LoadingIndicator;
