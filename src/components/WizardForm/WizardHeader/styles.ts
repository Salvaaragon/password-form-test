import {
  Grid,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
} from '@material-ui/core';
import styled from 'styled-components';

export const WizardHeaderGrid = styled(Grid)`
  background-color: ${(props) => props.theme.palette.terciary.main};
  border-bottom: solid 1px ${(props) => props.theme.palette.terciary.dark};
`;

export const WizardStepper = styled(Stepper)`
  &.MuiStepper-root {
    background-color: transparent;
  }
`;

export const WizardStep = styled(Step)`
  height: 100%;
  align-items: center;
  display: flex;
`;

export const WizardStepLabel = styled(StepLabel)`
  padding: 0rem 2rem;
  margin: auto;

  .MuiStepIcon-root {
    color: ${(props) => props.theme.palette.secondary.light};

    &.MuiStepIcon-active {
      color: ${(props) => props.theme.palette.secondary.main};
      font-size: 2rem;
    }
  }
`;

export const WizardStepConnector = styled(StepConnector)`
  &.MuiStepConnector-alternativeLabel {
    top: 15px;
    left: calc(-50% + 12px);
    right: calc(50% + 12px);

    &.MuiStepConnector-active {
      left: calc(-50% + 16px);
      right: calc(50% + 16px);
    }
  }

  &.MuiStepConnector-active {
    .MuiStepConnector-line {
      background-color: ${(props) => props.theme.palette.primary.main};
    }
  }

  &.MuiStepConnector-completed {
    .MuiStepConnector-line {
      background-color: ${(props) => props.theme.palette.primary.main};
    }
  }

  .MuiStepConnector-line {
    height: 3px;
    border: 0;
    background-color: ${(props) => props.theme.palette.secondary.light};
    border-radius: 1px;
  }
`;
