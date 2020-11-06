import { AppState } from "./../types";
import { logInFailed, getUserProfile } from "./../actions/index";
import axios from "axios";
import { put, takeLatest, select } from "redux-saga/effects";
const url = "http://localhost:5000/api/auth/login";
const getInput = (state: AppState) => state.authReducer.formData;

function* logInSaga() {
  try {
    const data = yield select(getInput);
    const res = yield axios.post(url, data);
    yield put(getUserProfile(res.data));
    yield localStorage.setItem("token", res.data.token);
  } catch (e) {
    yield put(logInFailed(e));
  }
}
export default [takeLatest("LOGIN_SUCCESS", logInSaga)];
