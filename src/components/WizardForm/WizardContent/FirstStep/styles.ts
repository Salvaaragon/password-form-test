import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const InfoIconContainer = styled(Grid)`
  padding: 2rem;
`;

export const InfoTextContainer = styled(Grid)`
  padding: 1rem 5rem;

  ${(props) => props.theme.breakpoints.down('sm')} {
    padding-right: 2.5rem;
    padding-left: 2.5rem;
  }
`;
