import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as actions from "../../reducers/permission-management/regist";

function loadListAPI(payload) {
  return axios.get(`/api/st/manager-menu/tree-list`);
}

function* getMenuRequest({ payload }) {
  try {
    const response = yield call(loadListAPI, payload);

    _.forEach(response.data.data.managerMenuList, (item) => {
      item.checked = true;

      if (item.childMenus) {
        _.forEach(item.childMenus, (item) => {
          item.checked = true;

          if (item.childMenus) {
            _.forEach(item.childMenus, (item) => {
              item.checked = true;
            });
          }
        });
      }
    });

    yield put({
      type: actions.GET_MENU_SUCCESS,
      payload: response.data.data.managerMenuList,
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

function submitRequestAPI(payload) {
  return axios.post(`/api/st/manager-role/regist`, payload);
}

function* submitRequest({ payload }) {
  try {
    const response = yield call(submitRequestAPI, payload);
    console.log("response: ", response);
  } catch (error) {
    console.log("error: ", error);
  }
}

function submitModifyRequestAPI(payload) {
  return axios.post(`/api/st/manager-role/modify`, payload);
}

function* submitModifyRequest({ payload }) {
  try {
    const response = yield call(submitModifyRequestAPI, payload);
    console.log("response: ", response);
  } catch (error) {
    console.log("error: ", error);
  }
}

function getRegistDetailAPI(payload) {
  return axios.get(`/api/st/manager-role/get/${payload}`);
}

function* getRegistDetailRequest({ payload }) {
  try {
    const response = yield call(getRegistDetailAPI, payload);
    console.log("response: ", response);

    yield put({
      type: actions.GET_REGIST_DETAIL_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

function* watchGetMenuRequest() {
  yield takeEvery(actions.GET_MENU_REQUEST, getMenuRequest);
}

function* watchSubmitRequest() {
  yield takeEvery(actions.SUBMIT_REQUEST, submitRequest);
}

function* watchGetRegistDetailRequest() {
  yield takeEvery(actions.GET_REGIST_DETAIL_REQUEST, getRegistDetailRequest);
}

function* watchSubmitModifyRequest() {
  yield takeEvery(actions.SUBMIT_MODIFY_REQUEST, submitModifyRequest);
}

export default function* permissionManagementSaga() {
  yield all([
    fork(watchGetMenuRequest),
    fork(watchSubmitRequest),
    fork(watchSubmitModifyRequest),
    fork(watchGetRegistDetailRequest),
  ]);
}
