import { useCallback, useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';

const useForm = (initialData = {}) => {
  const [form, setForm] = useState(initialData);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    setForm(initialData);
  }, [initialData]);

  useEffect(() => {
    setHasChanges(!shallowEqual(initialData, form));
  }, [initialData, form]);

  const onChange = useCallback(
    (field, value) => {
      setForm({ ...form, [field]: value });
    },
    [form, setForm]
  );

  return { form, hasChanges, onChange, setForm };
};

export default useForm;
