import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const WizardContentGrid = styled(Grid)`
  background-color: #fff;
`;

export const DataContainer = styled(Grid)`
  padding: 0 5rem;

  &.top-item {
    padding: 3rem 5rem 0 5rem;
  }

  &.bottom-item {
    padding: 0 5rem 3rem 5rem;
  }

  &.text-item {
    padding-top: 2rem;
    padding-bottom: 0.5rem;
  }

  &.input-item {
    padding: 0.5rem 0;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    padding-right: 2.5rem;
    padding-left: 2.5rem;

    &.top-item {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }

    &.bottom-item {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
  }
`;
