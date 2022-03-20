import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as actions from "../../reducers/menu-management/regist";

function getMenuListAPI(payload) {
  let depth = 1;
  let path = `/api/st/manager-menu?schDepth=${depth}`;

  if (payload && payload.cd) {
    if (payload.cd.length == 2) {
      depth = 2;
    } else if (payload.cd.length == 4) {
      depth = 3;
    }

    path = `/api/st/manager-menu?schCd=${payload.cd}&schDepth=${depth}`;
  }

  return axios.get(path);
}

function* getMenuList({ payload }) {
  let depth = 1;

  if (payload && payload.cd) {
    if (payload.cd.length == 2) {
      depth = 2;
    } else {
      depth = 3;
    }
  }

  try {
    const response = yield call(getMenuListAPI, payload);

    yield put({
      type: actions.GET_MENU_LIST_SUCCESS,
      payload: {
        managerMenuList: response.data.data.managerMenuList,
        depth: depth,
      },
    });
  } catch (error) {
    console.log("error", error);
  }
}

function menuRegistAPI(payload) {
  payload.useYn = "Y";
  return axios.post(`/api/st/manager-menu/regist`, payload);
}

function* menuRegistRequest({ payload }) {
  try {
    const response = yield call(menuRegistAPI, payload);

    payload.depth = Number(payload.depth - 1);
    payload.cd = payload.parentCd;

    yield put({
      type: actions.GET_MENU_LIST,
      payload: payload,
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

function menuModifyAPI(payload) {
  return axios.post(`/api/st/manager-menu/modify`, payload);
}

function* menuModifyRequest({ payload }) {
  try {
    const response = yield call(menuModifyAPI, payload);

    payload.depth = Number(payload.depth - 1);
    payload.cd = payload.parentCd;

    yield put({
      type: actions.GET_MENU_LIST,
      payload: payload,
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

function menuDetailAPI(payload) {
  return axios.get(`/api/st/manager-menu/get/${payload}`);
}

function* menuDetail({ payload }) {
  try {
    const response = yield call(menuDetailAPI, payload);

    yield put({
      type: actions.MENU_DETAIL_SUCCESS,
      payload: response.data.data.managerMenu,
    });

    if (payload.length <= 4) {
      yield put({
        type: actions.GET_MENU_LIST,
        payload: {
          cd: payload,
        },
      });
    }
  } catch (error) {
    console.log("error: ", error);
  }
}

function deleteMenuAPI(payload) {
  return axios.post(`/api/st/manager-menu/remove?cd=${payload}`);
}

function* deleteMenu({ payload }) {
  console.log(
    "delete payload: ******************************************** ",
    payload
  );

  try {
    const response = yield call(deleteMenuAPI, payload);
    console.log("response: ", response);

    yield put({
      type: actions.DELETE_MENU_COMPLETE,
      payload: payload,
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

function saveSortAPI(payload) {
  return axios.post(`/api/st/manager-menu/save-sort`, payload);
}

function* saveSort({ payload }) {
  try {
    const response = yield call(saveSortAPI, payload);
  } catch (error) {
    console.log("error: ", error);
  }
}

function* watchGetMenuList() {
  yield takeEvery(actions.GET_MENU_LIST, getMenuList);
}

function* watchMenuRegistRequest() {
  yield takeEvery(actions.MENU_REGIST_REQUEST, menuRegistRequest);
}

function* watchMenuModifyRequest() {
  yield takeEvery(actions.MENU_MODIFY_REQUEST, menuModifyRequest);
}

function* watchMenuDetail() {
  yield takeEvery(actions.MENU_DETAIL, menuDetail);
}

function* watchDeleteMenu() {
  yield takeEvery(actions.DELETE_MENU, deleteMenu);
}

function* watchSaveSort() {
  yield takeEvery(actions.SAVE_SORT, saveSort);
}

export default function* menuManagementRegistSaga() {
  yield all([
    fork(watchGetMenuList),
    fork(watchMenuRegistRequest),
    fork(watchMenuModifyRequest),
    fork(watchMenuDetail),
    fork(watchDeleteMenu),
    fork(watchSaveSort),
  ]);
}
