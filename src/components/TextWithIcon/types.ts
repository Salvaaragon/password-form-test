import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export type TextWithIconProps = {
  text: string;
  icon: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>> | string;
};
