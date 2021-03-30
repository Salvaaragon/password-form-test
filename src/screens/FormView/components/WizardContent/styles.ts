import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const WizardContentGrid = styled(Grid)`
  background-color: #fff;
`;

export const DataContainer = styled(Grid)`
  padding: 0 5rem;

  &.top-item {
    padding: 3rem 5rem 0.25rem 5rem;
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

export const TitleLine = styled(Grid)`
  background-color: ${(props) => props.theme.palette.info.main};
  content: '';
  height: 0.2rem;

  &.MuiGrid-item {
    margin: 0.2rem 5rem;
    width: 2.5rem;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    &.MuiGrid-item {
      margin-right: 2.5rem;
      margin-left: 2.5rem;
    }
  }
`;
