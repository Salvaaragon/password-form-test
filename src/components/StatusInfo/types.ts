import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export type StatusInfoProps = {
  description: string;
  icon: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;
  idLink: string;
  onClickLink: () => void;
  textLink: string;
  title: string;
  type: 'success' | 'error';
};
