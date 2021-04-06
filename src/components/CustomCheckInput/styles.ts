import { FormControlLabel } from '@material-ui/core';
import styled from 'styled-components';

export const CustomFormControlLabel = styled(FormControlLabel)`
  color: ${(props) => props.theme.palette.secondary.main};

  .MuiTypography-body1 {
    font-size: 0.9rem;
    font-weight: bold;
  }
`;
