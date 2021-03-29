import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const WizardFooterGrid = styled(Grid)`
  border-top: solid 1px ${(props) => props.theme.palette.background.default};
  padding: 1.5rem 5rem;
  background-color: #fff;

  ${(props) => props.theme.breakpoints.down('xs')} {
    padding: 1.5rem 2rem;
  }
`;

export const WizardFooterCancelGrid = styled(Grid)`
  &.MuiGrid-item {
    margin: auto;
  }
`;
