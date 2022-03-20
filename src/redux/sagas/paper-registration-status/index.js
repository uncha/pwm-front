import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as actions from "../../reducers/paper-registration-status";

function getAcademicDataLineApi(payload) {
  return axios.get(`/api/cit/academic-data-circumstance/year`, {
    params: payload,
  });
}

function getAcademicDataBarApi(payload) {
  return axios.get(`/api/cit/academic-data-circumstance/category/bar`, {
    params: payload,
  });
}

function getAcademicDataPieApi(payload) {
  return axios.get(`/api/cit/academic-data-circumstance/category/pie`, {
    params: payload,
  });
}

function getTopViewerCustomerListApi(payload) {
  return axios.get(`/api/cit/academic-data-circumstance/viewer/customer`, {
    params: payload,
  });
}

function getTopViewerCountryListApi(payload) {
  return axios.get(`/api/cit/academic-data-circumstance/viewer/country`, {
    params: payload,
  });
}

function getAcademicDataListApi(payload) {
  return axios.get(`/api/cit/academic-data-circumstance/academic-data`, {
    params: payload,
  });
}

function* getAcademicDataLine({ payload }) {
  try {
    const response = yield call(
      getAcademicDataLineApi,
      payload ? payload : { pg: 1, pgSz: 9999 }
    );

    yield put({
      type: actions.GET_ACADEMICDATALINE_SUCCESS,
      payload: {
        academicDataByYearList: response.data.data.academicDataByYearList,
        academicDataDocumentCategoryType:
          response.data.data.academicDataDocumentCategoryType,
      },
    });
  } catch (error) {
    console.log("error!!!!!!!!!!!!!!!!!!!!!", error);
  }
}

function* getAcademicDataBar({ payload }) {
  try {
    const response = yield call(
      getAcademicDataBarApi,
      payload ? payload : { pg: 1, pgSz: 9999 }
    );
    yield put({
      type: actions.GET_ACADEMICDATABAR_SUCCESS,
      payload: {
        academicDataByCategoryBarList:
          response.data.data.academicDataByCategoryBarList,
        academicDataType: response.data.data.academicDataType,
      },
    });
  } catch (error) {
    console.log("error!!!!!!!!!!!!!!!!!!!!!", error);
  }
}

function* getAcademicDataPie({ payload }) {
  try {
    const response = yield call(
      getAcademicDataPieApi,
      payload ? payload : { pg: 1, pgSz: 9999 }
    );
    yield put({
      type: actions.GET_ACADEMICDATAPIE_SUCCESS,
      payload: {
        academicDataByCategoryPieList:
          response.data.data.academicDataByCategoryPieList,
      },
    });
  } catch (error) {
    console.log("error!!!!!!!!!!!!!!!!!!!!!", error);
  }
}

function* getTopViewerCustomerList({ payload }) {
  try {
    const response = yield call(
      getTopViewerCustomerListApi,
      payload ? payload : { pg: 1, pgSz: 5 }
    );

    response.data.data.topViewerCustomerList.list.map((item, i) => {
      item.id = i;
    });

    yield put({
      type: actions.GET_TOPVIEWERCUSTOMERLIST_SUCCESS,
      payload: {
        topViewerCustomerList: response.data.data.topViewerCustomerList,
      },
    });
  } catch (error) {
    console.log("error!!!!!!!!!!!!!!!!!!!!!", error);
  }
}

function* getTopViewerCountryList({ payload }) {
  try {
    const response = yield call(
      getTopViewerCountryListApi,
      payload ? payload : { pg: 1, pgSz: 5 }
    );

    response.data.data.topViewerCountryList.list.map((item, i) => {
      item.id = i;
    });

    yield put({
      type: actions.GET_TOPVIEWERCOUNTRYLIST_SUCCESS,
      payload: {
        topViewerCountryList: response.data.data.topViewerCountryList,
      },
    });
  } catch (error) {
    console.log("error!!!!!!!!!!!!!!!!!!!!!", error);
  }
}

function* getAcademicDataList({ payload }) {
  try {
    const response = yield call(
      getAcademicDataListApi,
      payload ? payload : { pg: 1, pgSz: 5 }
    );

    response.data.data.academicDataList.list.map((item, i) => {
      item.id = i;
    });

    yield put({
      type: actions.GET_ACADEMICDATALIST_SUCCESS,
      payload: {
        academicDataList: response.data.data.academicDataList,
      },
    });
  } catch (error) {
    console.log("error!!!!!!!!!!!!!!!!!!!!!", error);
  }
}

function* watchAll() {
  yield takeEvery(actions.GET_ACADEMICDATALINE, getAcademicDataLine);
  yield takeEvery(actions.GET_ACADEMICDATABAR, getAcademicDataBar);
  yield takeEvery(actions.GET_ACADEMICDATAPIE, getAcademicDataPie);
  yield takeEvery(actions.GET_TOPVIEWERCUSTOMERLIST, getTopViewerCustomerList);
  yield takeEvery(actions.GET_TOPVIEWERCOUNTRYLIST, getTopViewerCountryList);
  yield takeEvery(actions.GET_ACADEMICDATALIST, getAcademicDataList);
}

export default function* PaperRegistrationStatusSaga() {
  yield all([fork(watchAll)]);
}
