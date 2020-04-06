import React from 'react';
import { useSelector } from 'react-redux';
import { blogSelector } from '../../../selectors';
import ListItem from '../ListItem';

const Header = () => (
  <li className='list-group-item'>
    <div className='row'>
      <h5 className='col-4'>Title</h5>
      <h5 className='col-3'>Link</h5>
      <h5 className='col-3'>Link caption</h5>
      <h5 className='col-2'>Date/Old date</h5>
    </div>
  </li>
);

const List = () => {
  const { list } = useSelector(blogSelector);
  return (
    <ul className='list-group'>
      <Header />
      {list.map((item) => (
        <ListItem {...item} key={item['_id']} />
      ))}
    </ul>
  );
};

export default List;
