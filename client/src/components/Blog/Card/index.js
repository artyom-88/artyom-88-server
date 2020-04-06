import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { blogLoad } from '../../../actions';
import { blogSelector } from '../../../selectors';
import Form from '../../Form';
import Page from '../../Page';

const inputs = [
  {
    field: 'title',
    label: 'Title',
    required: true,
  },
  {
    field: 'link',
    label: 'Link',
    required: false,
  },
  {
    field: 'linkCaption',
    label: 'Link Caption',
    required: false,
  },
  {
    field: 'date',
    label: 'Date',
    required: true,
    type: 'date',
  },
];

const Card = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { list } = useSelector(blogSelector);
  const item = list.filter(({ _id }) => _id === id)[0];

  const onSubmit = useCallback(() => {
    // TODO:
  }, []);

  useEffect(() => {
    dispatch(blogLoad(id));
  }, [dispatch, id]);

  return (
    <Page title={`Edit blog record`}>
      <div>{`Id: ${id}`}</div>
      {item && <div>{`Old date: ${item.year}-${item.month}-${item.day}`}</div>}
      <Form initialData={item} inputs={inputs} onSubmit={onSubmit} />
    </Page>
  );
};

export default Card;
