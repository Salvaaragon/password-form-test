import { InputLabel, OutlinedInput } from '@material-ui/core';
import styled from 'styled-components';

export const CustomOutlinedInput = styled(OutlinedInput)`
  &.MuiOutlinedInput-root {
    border-radius: 0;

    &.Mui-focused {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${(props) => props.theme.palette.terciary.dark};
      }
    }

    &:hover {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${(props) => props.theme.palette.terciary.dark};
      }
    }

    &.MuiInputBase-root {
      font-family: Quicksand;
      color: ${(props) => props.theme.palette.secondary.main};
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.palette.terciary.main};

    legend {
      width: 0;
    }
  }
`;

export const CustomInputLabel = styled(InputLabel)`
  &.MuiFormLabel-root {
    color: ${(props) => props.theme.palette.secondary.dark};
    font-family: Quicksand;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
