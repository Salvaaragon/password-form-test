import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { CustomTypographyProps } from './types';

export const CustomTypography = styled(Typography).attrs(
  (props: CustomTypographyProps) => props,
)`
  color: ${(props) => props.customcolor} !important;
  font-family: ${(props) => props.fontFamily} !important;
  font-size: ${(props) => props.fontSize} !important;
  font-style: ${(props) => props.fontStyle} !important;
  font-weight: ${(props) => props.fontWeight} !important;
  letter-spacing: ${(props) => props.letterSpacing} !important;
  line-height: ${(props) => props.lineHeight} !important;
  text-align: ${(props) => props.align} !important;
`;
