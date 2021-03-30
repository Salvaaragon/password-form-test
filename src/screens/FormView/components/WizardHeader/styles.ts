import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const WizardHeaderGrid = styled(Grid)`
  background-color: ${(props) => props.theme.palette.terciary.main};
  border-bottom: solid 1px ${(props) => props.theme.palette.terciary.dark};
`;
