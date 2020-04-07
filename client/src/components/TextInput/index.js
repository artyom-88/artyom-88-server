import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

const TextInput = ({ autocomplete, className, field, label, onChange, placeholder, required, type, value }) => {
  const inputHandler = useCallback(
    (e) => {
      onChange(field, e.target.value);
    },
    [field, onChange]
  );

  return (
    <label className={className}>
      {label && <div className='col-2'>{label}&nbsp;</div>}
      <input
        autoComplete={autocomplete}
        className='col-10'
        onChange={inputHandler}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value || ''}
      />
    </label>
  );
};

TextInput.defaultProps = {
  autocomplete: undefined,
  className: 'alignItemsCenter row',
  label: '',
  placeholder: undefined,
  required: false,
  type: 'text',
  value: '',
};

TextInput.propTypes = {
  autocomplete: PropTypes.string,
  className: PropTypes.string,
  field: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default TextInput;
