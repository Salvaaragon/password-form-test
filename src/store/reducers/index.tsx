import { combineReducers } from 'redux';
import { PasswordFormReducer } from './passwordForm';

export const rootReducer = combineReducers({
  passwordFormReducer: PasswordFormReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
