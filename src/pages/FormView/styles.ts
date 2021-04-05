import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const FormViewGrid = styled(Grid)`
  background-color: ${(props) => props.theme.palette.background.default};
`;

export const FormContainerGrid = styled(Grid)`
  padding-top: 4rem;
  padding-bottom: 4rem;

  ${(props) => props.theme.breakpoints.down('sm')} {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

export const WizardFormGrid = styled(Grid)`
  -webkit-box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.25);
`;
