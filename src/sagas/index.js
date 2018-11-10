import { call, put, takeLatest, all, fork, select } from 'redux-saga/effects';
import * as Api from '../api';
import {
  setConvertCurrecy,
  setScrollerData,
  fetchCurrencyError,
  fetchCurrencies,
  fetchCurrency,
  nextCurrencyPage,
  prevCurrencyPage,
  setCurrencyData,
} from '../actions';

export function* fetchScrollerData() {
  try {
    const { page, currency } = yield select(state => state.currencies);
    const response = yield call(Api.fetchCurrencies, page, currency);
    const data = yield response.json();
    yield put(setScrollerData(data));
  } catch (e) {
    yield put(fetchCurrencyError({ message: e.message }));
  }
}

function* watchScroller() {
  yield takeLatest(fetchCurrencies.toString(), fetchScrollerData);
  yield takeLatest(nextCurrencyPage.toString(), fetchScrollerData);
  yield takeLatest(prevCurrencyPage.toString(), fetchScrollerData);
  yield takeLatest(setConvertCurrecy.toString(), fetchScrollerData);
}

export function* fetchCurrencyData(action) {
  try {
    const { id, currency } = action.payload
    const response = yield call(Api.fetchCurrency, id, currency);
    const data = yield response.json();
    debugger
    yield put(setCurrencyData(data));
  } catch (e) {
    yield put(fetchCurrencyError({ message: e.message }));
  }
}

function* watchCurrencyPage() {
  yield takeLatest(fetchCurrency.toString(), fetchCurrencyData);
}

export default function* saga() {
  yield all([fork(watchScroller), fork(watchCurrencyPage)]);
}
