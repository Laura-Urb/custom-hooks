import { useState } from "react";

export const useForm = (initialState) => {
  const [valuesState, setValuesState] = useState(initialState);

  const resetValues = () => {
    setValuesState(initialState);
  };

  const handleInputchnage = ({ target }) => {
    setValuesState({
      ...valuesState,
      [target.name]: target.value,
    });
  };

  return [valuesState, handleInputchnage, resetValues];
};
