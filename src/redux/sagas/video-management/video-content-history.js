import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as actions from "../../reducers/video-management/video-content-history";

function loadVideoAccessDataAPI(payload) {
  return axios.get("/api/gmt/video-access-log", {
    params: payload,
  });
}

function* loadVideoAccessData({ payload }) {
  try {
    const response = yield call(loadVideoAccessDataAPI, payload);

    let list = response.data.data.videoContentsList.list;

    list.map((item, i) => {
      item.id = item.seq;
      item.index = i;
    });

    yield put({
      type: actions.GET_VIDEO_ACCESS_LOG_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

function* watchAll() {
  yield takeEvery(actions.GET_VIDEO_ACCESS_LOG, loadVideoAccessData);
}

export default function* videoContentHistorySaga() {
  yield all([fork(watchAll)]);
}
