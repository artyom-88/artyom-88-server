import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const TextInput = ({field, label, onChange, required, type, value}) => {
  const inputHandler = useCallback((e) => {
    onChange(field, e.target.value);
  }, [onChange]);
  return (
    <div className={styles.container}>
      <label>
        {label}&nbsp;
        <input
          onChange={inputHandler}
          required={required}
          type={type}
          value={value}
        />
      </label>
    </div>
  );
};

TextInput.defaultProps = {
  label: '',
  required: false,
  type: 'text',
  value: ''
};

TextInput.propTypes = {
  field: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default TextInput;
