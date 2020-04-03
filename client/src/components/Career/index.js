import axios from 'axios';
import React from 'react';
import Form from '../Form';
import Page from '../Page';

const inputs = [{
  field: 'title',
  label: 'Title',
  required: true,
}, {
  field: 'site',
  label: 'Site',
  required: false,
}, {
  field: 'post',
  label: 'Post',
  required: true
}, {
  field: 'description',
  label: 'Description',
  required: true
}, {
  field: 'tools',
  label: 'Tools',
  required: true
}, {
  field: 'startDate',
  label: 'Start Date',
  required: true,
  type: 'date'
}, {
  field: 'endDate',
  label: 'End Date',
  type: 'date'
}];

const onSubmit = (form, setForm) => {
  axios.post('/api/career', form)
    .then(function (response) {
      console.log(JSON.stringify(response, null, 1));
      if (response.status === 200) {
        setForm({});
      } else {
        setForm({...form});
      }
    })
    .catch(function (error) {
      setForm({...form});
      console.log(error);
    });
};

const Career = () => {
  return (
    <Page title='Career'>
      <Form
        inputs={inputs}
        onSubmit={onSubmit}
      />
    </Page>
  );
};

export default Career;
