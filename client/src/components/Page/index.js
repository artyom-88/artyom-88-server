import PropTypes from 'prop-types';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { appSelector } from '../../selectors';
import LoadingIndicator from '../LoadingIndicator';
import styles from './styles.module.scss';

const Page = ({ className, title, children }) => {
  const { loading, error } = useSelector(appSelector, shallowEqual);
  return (
    <div className={`${styles.container} ${className}`}>
      {title && <h1>{title}</h1>}
      <div className={styles.content}>
        {children}
        {loading && <LoadingIndicator className={styles.indicator} />}
      </div>
      {error && (
        <div className='alert alert-danger' role='alert'>
          {error}
        </div>
      )}
    </div>
  );
};

Page.defaultProps = {
  className: 'flexBox flexColumn',
  title: '',
};

Page.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Page;
