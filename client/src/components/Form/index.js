import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import useForm from '../../hooks/useForm';
import DateInput from '../DateInput';
import TextInput from '../TextInput';
import styles from './styles.module.scss';

const Form = ({ className, initialData, inputs, onSubmit }) => {
  const { form, hasChanges, onChange, setForm } = useForm(initialData);

  const submit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(form);
    },
    [form, onSubmit]
  );

  const reset = useCallback(
    (e) => {
      e.preventDefault();
      setForm(initialData);
    },
    [initialData, setForm]
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
        <div className={`flexBox justifyContentCenter col-12 ${styles.buttons}`}>
          {hasChanges && (
            <>
              <input
                className={`btn btn-${hasChanges ? 'warning' : 'secondary'}`}
                type='reset'
                value='Reset'
                onClick={reset}
              />
              &nbsp;
              <input className={`btn btn-${hasChanges ? 'success' : 'secondary'}`} type='submit' value='Submit' />
            </>
          )}
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
