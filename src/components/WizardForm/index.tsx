import React, { useState } from 'react';
import { ACCEPT_TERMS, REQUEST_STATUS, SET_PASSWORD } from './constants';
import { WizardFormGrid } from './styles';
import { StepType } from './types';
import WizardContent from './WizardContent';
import WizardHeader from './WizardHeader';

const steps: StepType[] = [ACCEPT_TERMS, SET_PASSWORD, REQUEST_STATUS];

const WizardForm: React.FC = () => {
  const [activeStep, setActiveStep] = useState<StepType>(ACCEPT_TERMS);

  return (
    <WizardFormGrid container item xs={11} sm={8} md={8} lg={6}>
      <WizardHeader activeStep={activeStep} steps={steps} />
      <WizardContent
        activeStep={activeStep}
        setStep={(step: StepType) => setActiveStep(step)}
      />
    </WizardFormGrid>
  );
};

export default WizardForm;
