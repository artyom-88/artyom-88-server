import React from 'react';
import { useSelector } from 'react-redux';
import { blogSelector } from '../../../selectors';
import ListItem from '../ListItem';

const List = () => {
  const { list } = useSelector(blogSelector);

  return (
    <ul>
      {list.map((item) => {
        const { _id: id } = item;
        return (
          <li key={id}>
            <ListItem {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
