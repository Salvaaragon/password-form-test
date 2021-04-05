import { ReduxAction } from '@Store/actions';
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

export interface PasswordFormState {
  activeStep: StepType;
  checkTerms: boolean;
  password: string;
  showPassword: boolean;
  repeatPassword: string;
  showRepeatPassword: boolean;
  hint: string;
  isPosting: boolean;
  isFailed: boolean;
}

const initialState: PasswordFormState = {
  activeStep: 0,
  checkTerms: false,
  password: '',
  showPassword: false,
  repeatPassword: '',
  showRepeatPassword: false,
  hint: '',
  isPosting: false,
  isFailed: false,
};

export const PasswordFormReducer = (
  state: PasswordFormState = initialState,
  action: ReduxAction,
): PasswordFormState => {
  switch (action.type) {
    case CHECK_TERMS: {
      return {
        ...state,
        checkTerms: action.payload,
      };
    }
    case POST_FORM: {
      return {
        ...state,
        isPosting: true,
        isFailed: false,
      };
    }
    case POST_FORM_DONE: {
      return {
        ...state,
        isPosting: false,
        isFailed: false,
      };
    }
    case POST_FORM_ERROR: {
      return {
        ...state,
        isPosting: false,
        isFailed: true,
      };
    }
    case SET_ACTIVE_STEP: {
      return {
        ...state,
        activeStep: action.payload,
      };
    }
    case SET_HINT: {
      return {
        ...state,
        hint: action.payload,
      };
    }
    case SET_PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case SET_SHOW_PASSWORD: {
      return {
        ...state,
        showPassword: action.payload,
      };
    }
    case SET_REPEAT_PASSWORD: {
      return {
        ...state,
        repeatPassword: action.payload,
      };
    }
    case SET_SHOW_REPEAT_PASSWORD:
      return {
        ...state,
        showRepeatPassword: action.payload,
      };
    case RESET_FORM:
      return initialState;

    default:
      return state;
  }
};
