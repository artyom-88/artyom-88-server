import { useCallback, useState } from 'react';

const useToggleValue = (initialValue = false): [value: boolean, toggleValue: () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = useCallback(() => {
    setValue((prev) => !prev);
  }, [setValue]);

  return [value, toggleValue];
};

export default useToggleValue;
