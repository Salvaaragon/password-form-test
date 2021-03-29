import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const FormViewGrid = styled(Grid)`
  background-color: ${(props) => props.theme.palette.background.default};
  padding-top: 8rem;
`;
