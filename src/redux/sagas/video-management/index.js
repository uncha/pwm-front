import { all, fork, put, takeEvery } from "redux-saga/effects";
import * as actions from "../../reducers/video-management";

function* loadVodSuccess({ payload }) {
  yield put({
    type: actions.LOAD_VOD_SUCCESS,
  });
}

function* selectVodSuccess({ payload }) {
  yield put({
    type: actions.SELECT_VOD_SUCCESS,
    payload: {
      seq: payload.seq,
    },
  });
}

function* addVodSuccess({ payload }) {
  yield put({
    type: actions.ADD_VOD_SUCCESS,
    payload: {
      file: payload.file,
    },
  });
}

function* deleteFolderSuccess({ payload }) {
  yield put({
    type: actions.DELETE_FOLDER_SUCCESS,
    payload: {
      seq: payload.seq,
    },
  });
}

function* watchAddVod() {
  yield takeEvery(actions.ADD_VOD, addVodSuccess);
}

function* watchLoadVod() {
  yield takeEvery(actions.LOAD_VOD, loadVodSuccess);
}

function* watchSelectVod() {
  yield takeEvery(actions.SELECT_VOD, selectVodSuccess);
}

function* watchDeleteFolder() {
  yield takeEvery(actions.DELETE_FOLDER, deleteFolderSuccess);
}

export default function* videoManagementSaga() {
  yield all([
    fork(watchLoadVod),
    fork(watchSelectVod),
    fork(watchAddVod),
    fork(watchDeleteFolder),
  ]);
}
