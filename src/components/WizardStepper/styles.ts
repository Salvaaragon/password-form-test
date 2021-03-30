import { Step, StepConnector, StepLabel, Stepper } from '@material-ui/core';
import styled from 'styled-components';

export const CustomStepper = styled(Stepper)`
  &.MuiStepper-root {
    background-color: transparent;
  }
`;

export const CustomStep = styled(Step)`
  height: 100%;
  align-items: center;
  display: flex;
`;

export const CustomStepLabel = styled(StepLabel)`
  padding: 0rem 2rem;
  margin: auto;

  .MuiStepIcon-root {
    color: ${(props) => props.theme.palette.secondary.light};

    &.MuiStepIcon-active {
      color: ${(props) => props.theme.palette.secondary.main};
      font-size: 2rem;
    }

    &.MuiStepIcon-completed {
      background: white;
      border-radius: 100%;
    }
  }
`;

export const CustomStepConnector = styled(StepConnector)`
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
