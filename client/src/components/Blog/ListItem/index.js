import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ _id: id, date, link, linkCaption, title, year, month, day }) => {
  return (
    <li className='list-group-item'>
      <Link className='row' to={`/blog/${id}`}>
        <div className='col-4'>{title}</div>
        <div className='col-3'>{link}</div>
        <div className='col-3'>{linkCaption}</div>
        <div className='col-2'>{(date && date.format('Do MMMM YYYY')) || `${year}-${month}-${day}`}</div>
      </Link>
    </li>
  );
};

export default ListItem;
