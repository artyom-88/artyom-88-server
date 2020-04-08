import React, { useCallback, useState } from 'react';
import DateInput from '../../DateInput';
import TextInput from '../../TextInput';
import styles from './styles.module.scss';

const ListEditor = ({ onCancel, onSave }) => {
  const [form, setForm] = useState({});

  const onChange = useCallback(
    (field, value) => {
      setForm({ ...form, [field]: value });
    },
    [form, setForm]
  );

  const cancel = useCallback(() => {
    setForm({});
    onCancel();
  }, [setForm, onCancel]);

  const save = useCallback(
    (e) => {
      e.preventDefault();
      setForm({});
      onSave(form);
    },
    [form, onSave, setForm]
  );

  return (
    <li className='list-group-item'>
      <form onSubmit={save}>
        <div className='row'>
          <div className='col-4'>
            <TextInput field='title' onChange={onChange} required={true} value={form.title} />
          </div>
          <div className='col-3'>
            <DateInput field='date' onChange={onChange} required={true} value={form.date} />
          </div>
          <div className='col-3'>
            <TextInput field='link' onChange={onChange} value={form.link} />
          </div>
          <div className='col-2'>
            <TextInput field='linkCaption' onChange={onChange} value={form.linkCaption} />
          </div>
        </div>
        <div className='flexBox justifyContentEnd'>
          <input className={`btn btn-success ${styles.button}`} type='submit' value='Save' />
          <button className={`btn btn-danger ${styles.button}`} type='button' onClick={cancel}>
            Cancel
          </button>
        </div>
      </form>
    </li>
  );
};

export default ListEditor;
