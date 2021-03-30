import {
  CHECK_TERMS,
  POST_FORM,
  POST_FORM_DONE,
  POST_FORM_ERROR,
  RESET_FORM,
  SET_ACTIVE_STEP,
  SET_HINT,
  SET_PASSWORD,
  SET_REPEAT_PASSWORD,
  SET_SHOW_PASSWORD,
  SET_SHOW_REPEAT_PASSWORD,
} from '@Store/constants/passwordForm';
import { StepType } from '@Types/passwordForm';
import { ReduxAction } from '..';

export const setActiveStep = (step: StepType): ReduxAction => {
  return {
    type: SET_ACTIVE_STEP,
    payload: step,
  };
};

export const checkTerms = (checked: boolean): ReduxAction => {
  return {
    type: CHECK_TERMS,
    payload: checked,
  };
};

export const setPassword = (password: string): ReduxAction => {
  return {
    type: SET_PASSWORD,
    payload: password,
  };
};

export const setShowPassword = (display: boolean): ReduxAction => {
  return {
    type: SET_SHOW_PASSWORD,
    payload: display,
  };
};

export const setRepeatPassword = (repeatPassword: string): ReduxAction => {
  return {
    type: SET_REPEAT_PASSWORD,
    payload: repeatPassword,
  };
};

export const setShowRepeatPassword = (display: boolean): ReduxAction => {
  return {
    type: SET_SHOW_REPEAT_PASSWORD,
    payload: display,
  };
};

export const setHint = (hint: string): ReduxAction => {
  return {
    type: SET_HINT,
    payload: hint,
  };
};

export const postForm = (
  password: string,
  repeatPassword: string,
  hint?: string,
): ReduxAction => {
  return {
    type: POST_FORM,
    payload: {
      password: password,
      repeatPassword: repeatPassword,
      hint: hint,
    },
  };
};

export const postFormDone = (): ReduxAction => {
  return { type: POST_FORM_DONE };
};

export const postFormError = (): ReduxAction => {
  return { type: POST_FORM_ERROR };
};

export const resetForm = (): ReduxAction => {
  return { type: RESET_FORM };
};
