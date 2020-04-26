import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const ListItem = ({ id, date, link, linkCaption, title, year, month, day }) => {
  return (
    <li className={`list-group-item ${styles.container}`} title='Click to open card'>
      <Link className='row' to={`/blog/${id}`}>
        <div className='col-4'>{title}</div>
        <div className='col-3'>{(date && date.format('Do MMMM YYYY')) || `${year}-${month}-${day}`}</div>
        <div className='col-3'>{link}</div>
        <div className='col-2'>{linkCaption}</div>
      </Link>
    </li>
  );
};

export default ListItem;
