import { ACCEPT_TERMS, SET_PASSWORD, REQUEST_STATUS } from './constants';

export type StepType =
  | typeof ACCEPT_TERMS
  | typeof SET_PASSWORD
  | typeof REQUEST_STATUS;
