import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as actions from "../../reducers/permission-management/list";

function loadListAPI(payload) {
  return axios.get(`/api/st/manager-role`, {
    params: { ...payload },
  });
}

function* loadList({ payload }) {
  console.log("payload: ============================== ", payload);

  try {
    const response = yield call(loadListAPI, payload);
    console.log("response: ", response);
    console.log(
      "response.data.data.managerRoleList: ",
      response.data.data.managerRoleList
    );

    yield put({
      type: actions.LOAD_LIST_SUCCESS,
      payload: response.data.data.managerRoleList,
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

function* watchLoadList() {
  yield takeEvery(actions.LOAD_LIST, loadList);
}

export default function* permissionManagementSaga() {
  yield all([fork(watchLoadList)]);
}
