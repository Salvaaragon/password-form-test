import { CheckboxProps } from '@material-ui/core';

export type CustomCheckInputProps = {
  checked: boolean;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: string;
} & CheckboxProps;
