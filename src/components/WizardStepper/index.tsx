import React from 'react';
import {
  CustomStep,
  CustomStepConnector,
  CustomStepLabel,
  CustomStepper,
} from './styles';
import { WizardStepperProps } from './types';

const WizardStepper: React.FC<WizardStepperProps> = (
  props: WizardStepperProps,
) => {
  const { activeStep, steps } = props;

  return (
    <CustomStepper
      activeStep={activeStep}
      alternativeLabel
      connector={<CustomStepConnector />}
    >
      {steps.map((step) => (
        <CustomStep key={step}>
          <CustomStepLabel />
        </CustomStep>
      ))}
    </CustomStepper>
  );
};

export default WizardStepper;
