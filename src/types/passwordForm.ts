import {
  ACCEPT_TERMS_STEP,
  REQUEST_STATUS_STEP,
  SET_PASSWORD_STEP,
} from '@Constants/passwordForm';

export type StepType =
  | typeof ACCEPT_TERMS_STEP
  | typeof SET_PASSWORD_STEP
  | typeof REQUEST_STATUS_STEP;
