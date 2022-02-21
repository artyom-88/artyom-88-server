import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { blogLoad, blogUpdate } from '../../../action-creators';
import { blogItemSelector } from '../../../selectors';
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
  const item = useSelector(blogItemSelector(id));

  const onSubmit = useCallback(
    (formData) => {
      // TODO: form data doesn't have toDto() method
      item.update(formData);
      dispatch(blogUpdate(id, item));
    },
    [dispatch, id, item]
  );

  useEffect(() => {
    dispatch(blogLoad(id));
  }, [dispatch, id]);

  return (
    <Page title={`Blog card`}>
      <h5 className='card-title'>{`Id: ${id}`}</h5>
      {item && <h6 className='card-subtitle mb-2 text-muted'>{`Old date: ${item.year}-${item.month}-${item.day}`}</h6>}
      <div className='card'>
        <div className='card-body'>
          <Form initialData={item} inputs={inputs} onSubmit={onSubmit} />
        </div>
      </div>
    </Page>
  );
};

export default Card;
