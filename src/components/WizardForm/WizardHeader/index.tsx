import React from 'react';
import {
  WizardHeaderGrid,
  WizardStep,
  WizardStepConnector,
  WizardStepLabel,
  WizardStepper,
} from './styles';
import { WizardHeaderProps } from './types';

const WizardHeader: React.FC<WizardHeaderProps> = (
  props: WizardHeaderProps,
) => {
  const { activeStep, steps } = props;

  return (
    <WizardHeaderGrid container justify="center" alignContent="center">
      <WizardStepper
        activeStep={activeStep}
        alternativeLabel
        connector={<WizardStepConnector />}
      >
        {steps.map((step) => (
          <WizardStep key={step}>
            <WizardStepLabel />
          </WizardStep>
        ))}
      </WizardStepper>
    </WizardHeaderGrid>
  );
};

export default WizardHeader;
