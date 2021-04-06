import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import {
  CustomTypographyProps,
  LoadTextColorFunction,
  TextColorType,
  TypographyColors,
  TypographyColorType,
} from './types';

export const isTypographyColor = (
  color: string,
): color is TypographyColorType => {
  return TypographyColors.includes(color);
};

export const loadTextColor: LoadTextColorFunction = (color: TextColorType) => {
  if (isTypographyColor(color)) {
    return { color: color };
  } else return { customcolor: color };
};

export const CustomTypography = styled(Typography).attrs(
  (props: CustomTypographyProps) => props,
)`
  &.MuiTypography-body1 {
    color: ${(props) => props.customcolor};
    font-family: ${(props) => props.fontFamily};
    font-size: ${(props) => props.fontSize};
    font-style: ${(props) => props.fontStyle};
    font-weight: ${(props) => props.fontWeight};
    letter-spacing: ${(props) => props.letterSpacing};
    line-height: ${(props) => props.lineHeight};
    text-align: ${(props) => props.align};
  }
`;
