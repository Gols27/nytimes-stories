import { all } from 'redux-saga/effects'
import storiesSaga from "./storiesSaga";
import articleSaga from './articleSaga';

export default function* rootSaga() {
  yield all([storiesSaga(), articleSaga()]);
}
