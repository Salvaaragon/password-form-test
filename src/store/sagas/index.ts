import { all, AllEffect, ForkEffect } from 'redux-saga/effects';
import postForm from './passwordForm/postForm';

export default function* rootSaga(): Generator<
  AllEffect<Generator<ForkEffect<never>, void, unknown>>,
  void,
  unknown
> {
  yield all([postForm()]);
}
