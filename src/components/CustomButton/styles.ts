import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { CustomBtnProps } from './types';

export const CustomBtn = styled(Button).attrs((props: CustomBtnProps) => props)`
  &.MuiButton-root {
    background-color: ${(props) => props.backgroundcolor};
    color: ${(props) => props.textcolor};
    font-family: Quicksand;
    text-transform: none;
    font-weight: bold;
    border-radius: 0;

    &.have-icon {
      padding-left: 1.2rem;
    }

    &:hover {
      background-color: ${(props) => props.backgroundcolor};
      color: ${(props) => props.textcolor};
      opacity: 0.8;
    }

    .MuiButton-label {
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
    }
  }
`;
