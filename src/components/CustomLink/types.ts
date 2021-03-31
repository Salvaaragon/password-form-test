import { CustomTextProps } from '@Components/CustomText/types';
import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export type CustomLinkProps = {
  id?: string;
  onClick: () => void;
  icon?: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;
} & CustomTextProps;
