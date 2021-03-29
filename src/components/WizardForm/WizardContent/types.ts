import { StepType } from '../types';

export type WizardContentProps = {
  activeStep: StepType;
  setStep: (step: StepType) => void;
};
