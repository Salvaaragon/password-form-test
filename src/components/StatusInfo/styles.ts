import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const StatusInfoContainer = styled(Grid)`
  padding: 2rem 4rem;

  ${(props) => props.theme.breakpoints.down('sm')} {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;

export const IconContainer = styled(Grid)`
  &.MuiGrid-item {
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const LinkContainer = styled(Grid)`
  border-top: solid 1px ${(props) => props.theme.palette.background.default};
  padding: 2rem 4rem;

  ${(props) => props.theme.breakpoints.down('sm')} {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;
