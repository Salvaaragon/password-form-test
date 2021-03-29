import { StepType } from '@Components/WizardForm/types';

export type ThirdStepProps = {
  setStep: (step: StepType) => void;
  type: 'success' | 'error';
};
