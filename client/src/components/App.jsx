import axios from 'axios';
import {uniqueId} from 'lodash';
import React, {useCallback, useState} from 'react';
import styles from './App.module.css';
import TextInput from './TextInput';

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

const renderItems = (form, onChange) => {
  return inputs.map(({field, label, required, type}) => (
    <TextInput
      key={uniqueId()}
      field={field}
      label={label}
      onChange={onChange}
      required={required}
      type={type}
      value={form[field]}
    />
  ));
};

const App = () => {
  const [form, setForm] = useState({});

  const onChange = useCallback((field, value) => {
    setForm({...form, [field]: value});
  }, [form, setForm]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
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
  }, [form]);

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        {renderItems(form, onChange)}
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
};

export default App;
