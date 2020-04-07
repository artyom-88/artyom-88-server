import React from 'react';
import { useSelector } from 'react-redux';
import { blogSelector } from '../../../selectors';
import ListEditor from '../Editor';
import ListItem from '../ListItem';
import styles from './styles.module.scss';

const Header = () => (
  <li className={`list-group-item ${styles.container}`}>
    <div className='row'>
      <h5 className='col-4'>Title</h5>
      <h5 className='col-3'>Date</h5>
      <h5 className='col-3'>Link</h5>
      <h5 className='col-2'>Link caption</h5>
    </div>
  </li>
);

const List = ({ onCancel, edit, onSave }) => {
  const { list } = useSelector(blogSelector);
  return (
    <ul className='list-group'>
      <Header />
      {edit && <ListEditor onSave={onSave} onCancel={onCancel} />}
      {list.map((item) => (
        <ListItem {...item} key={item['_id']} />
      ))}
    </ul>
  );
};

export default List;
