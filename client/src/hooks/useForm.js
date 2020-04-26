import { useCallback, useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';

const useForm = (onSubmit, initialData = {}) => {
  const [form, setForm] = useState(initialData);
  const [hasChanges, setHasChanges] = useState(false);

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

  const reset = useCallback(
    (e) => {
      e.preventDefault();
      setForm(initialData);
    },
    [initialData, setForm]
  );

  useEffect(() => {
    setForm(initialData);
  }, [initialData]);

  useEffect(() => {
    setHasChanges(!shallowEqual(initialData, form));
  }, [initialData, form]);

  return { form, hasChanges, onChange, submit, reset };
};

export default useForm;
