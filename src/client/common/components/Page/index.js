import PropTypes from 'prop-types';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { appSelector } from '../../selectors';
import LoadingIndicator from '../LoadingIndicator';
import styles from './styles.module.scss';

const Page = ({ className, title, children, buttons }) => {
  const { loading, error } = useSelector(appSelector, shallowEqual);
  return (
    <div className={`${styles.container} ${className}`}>
      <div className='ag-flex'>
        {title && <h1 className={styles.title}>{title}</h1>}
        {buttons}
      </div>
      <div className={styles.content}>{loading ? <LoadingIndicator className={styles.indicator} /> : children}</div>
      {error && (
        <div className='alert alert-danger' role='alert'>
          {error}
        </div>
      )}
    </div>
  );
};

Page.defaultProps = {
  buttons: null,
  className: 'flexBox flexColumn',
  title: '',
};

Page.propTypes = {
  buttons: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Page;
