import { OutlinedInputProps, SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export type CustomInputProps = {
  label: string;
  errors?: string;
  icon?: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;
  iconClick?: () => void;
} & OutlinedInputProps;
