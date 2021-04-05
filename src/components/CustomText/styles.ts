import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { CustomTypographyProps } from './types';

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
