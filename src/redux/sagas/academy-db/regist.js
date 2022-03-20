import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as actions from "../../reducers/academy-db/regist";

function registDatApi(payload) {
  return axios.get(`/api/ct/conference-information/regist`);
}

function getDistributorListApi(payload) {
  return axios.get(`/api/mb/distributer/search`);
}

function getNationCodeListApi(payload) {
  return axios.get(`/api/st/nation-code`, {
    params: {
      ncContntCd: payload,
    },
  });
}

function* getRegistData({ payload }) {
  try {
    const response = yield call(registDatApi, payload);

    yield put({
      type: actions.GET_REGISTDATA_SUCCESS,
      payload: {
        registData: response.data.data,
      },
    });
  } catch (error) {
    console.log("error", error);
  }
}

function* getNationCodeList({ payload }) {
  try {
    const response = yield call(getNationCodeListApi, payload);

    yield put({
      type: actions.GET_NATION_CODE_LIST_SUCCESS,
      payload: {
        nationCodeList: response.data.data.nationCodeList,
      },
    });
  } catch (error) {
    console.log("error", error);
  }
}

function* getDistributorList(payload) {
  try {
    const response = yield call(getDistributorListApi, payload);
    console.log("response ,,,,**************************,,,", response);

    yield put({
      type: actions.GET_DISTRIBUTOR_LIST_SUCCESS,
      payload: response.data.data.distributerList,
    });
  } catch (error) {
    console.log("error .............................", error);
  }
}

function submitAPI(payload) {
  return axios.post(`/api/ct/conference-information/regist`, payload);
}

function* submitData({ payload }) {
  try {
    const response = yield call(submitAPI, payload);
    console.log("response ------------", response);
    yield put({
      type: actions.SUBMIT_DATA_SUCCESS,
      payload: {
        submitData: payload,
        isSuccess: true,
      },
    });
  } catch (error) {
    console.log("error .............................", error);
    yield put({
      type: actions.SUBMIT_DATA_FAIL,
      payload: false,
    });
  }
}

function submitModifyAPI(payload) {
  return axios.post(`/api/ct/conference-information/modify`, payload);
}

function* submitModifyData({ payload }) {
  try {
    const response = yield call(submitModifyAPI, payload);
    console.log("response ------------", response);
    yield put({
      type: actions.SUBMIT_DATA_SUCCESS,
      payload: {
        submitData: payload,
        isSuccess: true,
      },
    });
  } catch (error) {
    console.log("error .............................", error);
    yield put({
      type: actions.SUBMIT_DATA_FAIL,
      payload: false,
    });
  }
}

function detailRequestAPI(payload) {
  return axios.get(`/api/ct/conference-information/get/${payload}`);
}

function* getDetailRequest({ payload }) {
  try {
    const response = yield call(detailRequestAPI, payload);
    console.log("response ------------", response);

    yield put({
      type: actions.GET_DETAIL_SUCCESS,
      payload: response.data.data.conferenceInformation,
    });
  } catch (error) {
    console.log("error .............................", error);
  }
}

function getRMRequestAPI() {
  return axios.get(`/api/mb/member/search`, {
    params: {
      schTps: 2,
    },
  });
}

function* getRMRequest() {
  try {
    const response = yield call(getRMRequestAPI);
    console.log("response ------------", response);

    yield put({
      type: actions.GET_RM_SUCCESS,
      payload: response.data.data.memberList,
    });
  } catch (error) {
    console.log("error .............................", error);
  }
}

function* watchRMRequest() {
  yield takeEvery(actions.GET_RM_REQUEST, getRMRequest);
}

function* watchRegistData() {
  yield takeEvery(actions.GET_REGISTDATA, getRegistData);
}

function* watchNationCodeList() {
  yield takeEvery(actions.GET_NATION_CODE_LIST, getNationCodeList);
}

function* watchGetDistributorList() {
  console.log("watchGetDistributorList ++++");
  yield takeEvery(actions.GET_DISTRIBUTOR_LIST, getDistributorList);
}

function* watchSubmitData() {
  yield takeEvery(actions.SUBMIT_DATA, submitData);
}

function* watchSubmitModifyData() {
  yield takeEvery(actions.SUBMIT_MODIFY_DATA, submitModifyData);
}

function* watchGetDetailRequest() {
  yield takeEvery(actions.GET_DETAIL_REQUEST, getDetailRequest);
}

export default function* academyDBRegistSaga() {
  yield all([
    fork(watchRegistData),
    fork(watchNationCodeList),
    fork(watchGetDistributorList),
    fork(watchSubmitData),
    fork(watchSubmitModifyData),
    fork(watchGetDetailRequest),
    fork(watchRMRequest),
  ]);
}
