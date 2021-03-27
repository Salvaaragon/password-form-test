import { IconButton } from '@material-ui/core';
import styled from 'styled-components';
import { CustomIconButtonProps, CustomIconProps } from './types';

export const CustomIcon = styled.img.attrs((props: CustomIconProps) => props)`
  width: ${(props) => props.width};
`;

export const CustomIconButton = styled(IconButton).attrs(
  (props: CustomIconButtonProps) => props,
)`
  opacity: ${(props) => props.disabled && 0.5};
`;
