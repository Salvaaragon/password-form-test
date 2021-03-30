import { StepType } from '@Types/passwordForm';

export type WizardStepperProps = {
  activeStep: StepType;
  steps: StepType[];
};
