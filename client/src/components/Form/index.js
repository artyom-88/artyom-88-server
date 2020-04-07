import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import DateInput from '../DateInput';
import TextInput from '../TextInput';

const Form = ({ className, initialData = {}, inputs, onSubmit }) => {
  const [form, setForm] = useState(initialData);

  useEffect(() => {
    setForm(initialData);
  }, [initialData]);

  const onChange = useCallback(
    (field, value) => {
      setForm({ ...form, [field]: value });
    },
    [form, setForm]
  );

  const submit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(form);
    },
    [form, onSubmit]
  );

  return (
    <form className={className} onSubmit={submit}>
      {inputs.map(({ autocomplete, className: inputClassName, field, label, required, type }) => {
        const Control = type === 'date' ? DateInput : TextInput;
        return (
          <Control
            autocomplete={autocomplete}
            className={inputClassName}
            field={field}
            key={field}
            label={label}
            onChange={onChange}
            required={required}
            type={type}
            value={form[field]}
          />
        );
      })}
      <div className='row'>
        <div className='flexBox justifyContentCenter col-12'>
          <input type='submit' value='Submit' />
        </div>
      </div>
    </form>
  );
};

Form.defaultProps = {
  className: 'flexBox flexColumn justifyContentCenter',
  initialData: {},
};

Form.propTypes = {
  className: PropTypes.string,
  initialData: PropTypes.object,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      autocomplete: PropTypes.string,
      className: PropTypes.string,
      field: PropTypes.string.isRequired,
      label: PropTypes.string,
      required: PropTypes.bool,
      type: PropTypes.string,
      value: PropTypes.string,
    }).isRequired
  ),
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
