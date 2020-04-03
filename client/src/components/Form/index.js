import PropTypes from 'prop-types';
import React, {useCallback, useState} from 'react';
import TextInput from '../TextInput';

const Form = ({className, inputs, onSubmit}) => {
  const [form, setForm] = useState({});

  const onChange = useCallback((field, value) => {
    setForm({...form, [field]: value});
  }, [form, setForm]);

  const submit = useCallback((e) => {
    e.preventDefault();
    onSubmit(form, setForm);
  }, [form, setForm, onSubmit]);

  return (
    <form className={className} onSubmit={submit}>
      {inputs.map(({autocomplete, className: inputClassName, field, label, required, type}) => (
        <TextInput
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
      ))}
      <div className='flexBox justifyContentCenter'>
        <input type="submit" value="Submit"/>
      </div>
    </form>
  );
};

Form.defaultProps = {
  className: 'flexBox flexColumn justifyContentCenter'
};

Form.propTypes = {
  className: PropTypes.string,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      autocomplete: PropTypes.string,
      className: PropTypes.string,
      field: PropTypes.string.isRequired,
      label: PropTypes.string,
      required: PropTypes.bool,
      type: PropTypes.string,
      value: PropTypes.string,
    }).isRequired),
  onSubmit: PropTypes.func.isRequired
};

export default Form;
