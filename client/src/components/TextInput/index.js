import PropTypes from 'prop-types';
import React, {useCallback} from 'react';

const TextInput = ({autocomplete, className, field, label, onChange, required, type, value}) => {

  const inputHandler = useCallback((e) => {
    onChange(field, e.target.value);
  }, [field, onChange]);

  return (
    <label className={className}>
      {label}&nbsp;
      <input
        autoComplete={autocomplete}
        onChange={inputHandler}
        required={required}
        type={type}
        value={value}
      />
    </label>
  );
};

TextInput.defaultProps = {
  autocomplete: undefined,
  className: 'flexBox justifyContentBetween alignItemsCenter',
  label: '',
  required: false,
  type: 'text',
  value: ''
};

TextInput.propTypes = {
  autocomplete: PropTypes.string,
  className: PropTypes.string,
  field: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default TextInput;
