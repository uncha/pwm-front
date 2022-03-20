import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as actions from "../reducers/user";

function loginApi(payload) {
  return axios.post("/api/auth/token", {
    ...payload.loginData,
    grantType: "password",
  });
}

function refeshTokenAPI(payload) {
  return axios.post(`/api/auth/token`, {
    grantType: "refresh_token",
    refreshToken: payload,
  });
}

function* login({ payload }) {
  try {
    const response = yield call(loginApi, payload);

    yield put({
      type: actions.LOGIN_SUCCESS,
      payload: {
        loginResponseData: response.data.data,
      },
    });
  } catch (error) {
    yield put({
      type: actions.LOGIN_FAILURE,
      payload: {
        loginFailReason: error.response.data.message,
      },
    });
  }
}

function* refeshTokenRequest({ payload }) {
  console.log("payload: ~~~~~~~~~~~~~~~ ", payload);

  try {
    const response = yield call(refeshTokenAPI, payload.refreshToken);

    yield put({
      type: actions.REFRESH_TOKEN_SUCCESS,
      payload: {
        loginResponseData: response.data,
      },
    });
  } catch (error) {
    yield put({
      type: actions.REFRESH_TOKEN_FAILURE,
      payload: {
        refreshTokenFailReason: error.response.data.message,
      },
    });
  }
}

function managerRoleAPI(payload) {
  return axios.get(`/api/st/manager-role/get/${payload}`);
}

function* managerRoleRequest({ payload }) {
  try {
    const response = yield call(managerRoleAPI, payload);
    console.log("response.data.data: ", response.data.data);

    yield put({
      type: actions.MANAGER_ROLE_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    console.log("error: ", error);

    yield put({
      type: actions.MANAGER_ROLE_FAILURE,
      payload: null,
    });
  }
}

function* watchLogin() {
  yield takeEvery(actions.LOGIN_REQUEST, login);
}

// function* watchRefeshTokenRequest() {
//   yield takeEvery(actions.REFRESH_TOKEN_REQUEST, refeshTokenRequest);
// }

function* watchManagerRoleRequest() {
  yield takeEvery(actions.MANAGER_ROLE_REQUEST, managerRoleRequest);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchManagerRoleRequest)]);
}
