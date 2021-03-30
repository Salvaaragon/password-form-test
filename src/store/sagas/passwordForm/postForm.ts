import { submitForm } from '@Services/api';
import { ReduxAction } from '@Store/actions';
import { postFormDone, postFormError } from '@Store/actions/passwordForm';
import { POST_FORM } from '@Store/constants/passwordForm';
import { call, ForkEffect, put, takeLatest } from 'redux-saga/effects';

function* postForm(action: ReduxAction) {
  try {
    const response: Promise<unknown> = yield call(
      submitForm,
      action.payload.password,
      action.payload.repeatPassword,
      action.payload.hint,
    );

    if (response) yield put(postFormDone());
    else yield put(postFormError());
  } catch (error) {
    yield put(postFormError());
  }
}

export default function* (): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(POST_FORM, postForm);
}
