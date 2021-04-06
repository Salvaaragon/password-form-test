import React from 'react';
import { CustomFormHelperText } from './styles';
import { CustomInputErrorProps } from './types';

const CustomInputError: React.FC<CustomInputErrorProps> = (
  props: CustomInputErrorProps,
) => {
  const { errors } = props;

  return <CustomFormHelperText>{errors}</CustomFormHelperText>;
};

export default CustomInputError;
