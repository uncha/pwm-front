import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as actions from "../reducers/codeManagement";

function loadCodeGroupAPI(payload) {
  return axios.get("/api/st/category-code");
}

function* loadCodeGroup() {
  try {
    const response = yield call(loadCodeGroupAPI);

    yield put({
      type: actions.LOAD_CODEGROUP_SUCCESS,
      payload: {
        codeGroupList: response.data.data.categoryCodeList,
      },
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

function codeGroupSelectAPI(payload) {
  return axios.get(`/api/st/category-code/get/${payload.groupCode}`);
}

function loadCodeAPI(payload) {
  return axios.get(`/api/st/code/${payload.groupCode}`);
}

function* codeGroupSelect({ payload }) {
  try {
    const response = yield call(codeGroupSelectAPI, payload);
    const responseCodeAPI = yield call(loadCodeAPI, payload);

    yield put({
      type: actions.CODEGROUP_SELECT_SUCCESS,
      payload: {
        categoryCode: response.data.data.categoryCode,
        codeList: responseCodeAPI.data.data.codeList,
        selectGroupCode: payload.groupCode,
      },
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

function createCodeGroupAPI(payload) {
  return axios.post(`/api/st/category-code/regist`, {
    cd: payload.code,
    nm: payload.nm,
    desc: payload.description,
    useYn: payload.useYn,
  });
}

function* createCodeGroup({ payload }) {
  try {
    const response = yield call(createCodeGroupAPI, payload);

    yield put({
      type: actions.LOAD_CODEGROUP,
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

function modifyCodeGroupAPI(payload) {
  return axios.post(`/api/st/category-code/modify`, {
    cd: payload.code,
    nm: payload.nm,
    desc: payload.description,
    useYn: payload.useYn,
  });
}

function* modifyCodeGroup({ payload }) {
  try {
    const response = yield call(modifyCodeGroupAPI, payload);

    yield put({
      type: actions.LOAD_CODEGROUP,
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

function deleteCodeGroupAPI(payload) {
  return axios.post(`/api/st/category-code/remove?cd=${payload}`);
}

function* deleteCodeGroup({ payload }) {
  try {
    const response = yield call(deleteCodeGroupAPI, payload);

    yield put({
      type: actions.LOAD_CODEGROUP,
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

function* loadCode({ payload }) {
  try {
    const responseCodeAPI = yield call(loadCodeAPI, payload);

    yield put({
      type: actions.LOAD_CODE_SUCCESS,
      payload: {
        codeList: responseCodeAPI.data.data.codeList,
      },
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

function createCodeAPI(payload) {
  return axios.post(`/api/st/code/regist`, {
    cd: payload.code,
    nm: payload.nm,
    desc: payload.description,
    useYn: payload.useYn,
  });
}

function* createCode({ payload }) {
  try {
    const response = yield call(createCodeAPI, payload.data);
    const groupCode = payload.data.code.slice(0, 3);

    yield put({
      type: actions.LOAD_CODE,
      payload: {
        groupCode: groupCode,
      },
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

function modifyCodeAPI(payload) {
  return axios.post(`/api/st/code/modify`, {
    cd: payload.code,
    nm: payload.nm,
    desc: payload.description,
    useYn: payload.useYn,
  });
}

function* modifyCode({ payload }) {
  try {
    const response = yield call(modifyCodeAPI, payload.data);
    const groupCode = payload.data.code.slice(0, 3);

    yield put({
      type: actions.LOAD_CODE,
      payload: {
        groupCode: groupCode,
      },
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

function deleteCodeAPI(payload) {
  return axios.post(`/api/st/code/remove?cd=${payload.code}`);
}

function* deleteCode({ payload }) {
  try {
    const response = yield call(deleteCodeAPI, payload);
    const groupCode = payload.code.slice(0, 3);

    yield put({
      type: actions.LOAD_CODE,
      payload: {
        groupCode: groupCode,
      },
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

function saveSortAPI(payload) {
  return axios.post(`/api/st/code/save-sort`, payload);
}

function* saveSort({ payload }) {
  try {
    const response = yield call(saveSortAPI, payload);
  } catch (error) {}
}

function* watchLoadCodeGroup() {
  yield takeEvery(actions.LOAD_CODEGROUP, loadCodeGroup);
}

function* watchCreateCodeGroup() {
  yield takeEvery(actions.CODEGROUP_CREATE_REQUEST, createCodeGroup);
}

function* watchModifyCodeGroup() {
  yield takeEvery(actions.CODEGROUP_MODIFY_REQUEST, modifyCodeGroup);
}

function* watchCodeGroupSelect() {
  yield takeEvery(actions.CODEGROUP_SELECT, codeGroupSelect);
}

function* watchDeleteCodeGroup() {
  yield takeEvery(actions.DELETE_CODEGROUP_REQUEST, deleteCodeGroup);
}

function* watchLoadCode() {
  yield takeEvery(actions.LOAD_CODE, loadCode);
}

function* watchCreateCode() {
  yield takeEvery(actions.CODE_CREATE_REQUEST, createCode);
}

function* watchModifyCode() {
  yield takeEvery(actions.CODE_MODIFY_REQUEST, modifyCode);
}

function* watchDeleteCode() {
  yield takeEvery(actions.DELETE_CODE_REQUEST, deleteCode);
}

function* watchSaveSort() {
  yield takeEvery(actions.SAVE_SORT, saveSort);
}

export default function* codeManagementSaga() {
  yield all([
    fork(watchLoadCodeGroup),
    fork(watchCreateCodeGroup),
    fork(watchCodeGroupSelect),
    fork(watchDeleteCodeGroup),
    fork(watchLoadCode),
    fork(watchCreateCode),
    fork(watchModifyCodeGroup),
    fork(watchModifyCode),
    fork(watchDeleteCode),
    fork(watchSaveSort),
  ]);
}
