import { useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
const useInputState = (initialVal) => {
  const [value, setValue] = useState(initialVal);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue('');
  };
  return [value, handleChange, reset];
};
export default useInputState;
