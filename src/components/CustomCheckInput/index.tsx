import CustomInputError from '@Components/CustomInputError';
import { Checkbox, FormControl } from '@material-ui/core';
import React from 'react';
import { CustomFormControlLabel } from './styles';
import { CustomCheckInputProps } from './types';

const CustomCheckInput: React.FC<CustomCheckInputProps> = (
  props: CustomCheckInputProps,
) => {
  const { id, checked, errors, label, onChange } = props;

  return (
    <FormControl required error={errors !== undefined}>
      <CustomFormControlLabel
        id={id}
        control={<Checkbox {...props} checked={checked} onChange={onChange} />}
        color="secondary"
        label={label}
      />
      {errors && <CustomInputError errors={errors} />}
    </FormControl>
  );
};

CustomCheckInput.defaultProps = {
  errors: '',
};

export default CustomCheckInput;
