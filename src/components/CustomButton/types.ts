import { ButtonProps, SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export type CustomButtonProps = {
  backgroundcolor: string;
  onClick: () => void;
  text: string;
  textcolor: string;
  icon?: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;
} & ButtonProps;

export type CustomBtnProps = {
  backgroundcolor: string;
  haveIcon: boolean;
  textcolor: string;
};
