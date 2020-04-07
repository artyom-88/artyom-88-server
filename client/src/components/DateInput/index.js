import { isMoment, utc } from 'moment';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({ autocomplete, className, field, label, onChange, required, value }) => {
  const date = value && value.toDate();
  const onDateChange = useCallback(
    (newDate) => {
      onChange(field, utc(newDate));
    },
    [field, onChange]
  );

  return (
    <label className={className}>
      <div className='col-2'>{label}&nbsp;</div>
      <DatePicker
        autoComplete={autocomplete}
        dateFormat='MM/dd/yyyy'
        selected={date}
        onChange={onDateChange}
        required={required}
      />
    </label>
  );
};

DateInput.defaultProps = {
  autocomplete: undefined,
  className: 'alignItemsCenter row',
  label: '',
  required: false,
  value: null,
};

DateInput.propTypes = {
  autocomplete: PropTypes.string,
  className: PropTypes.string,
  field: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  value: isMoment,
};

export default DateInput;
