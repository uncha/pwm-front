import _ from "lodash";

const initialState = {
  d1Menu: [],
  d2Menu: [],
  d3Menu: [],
  selectMenu: "",
  mode: "create",
};

export const INIT = "INIT";
export const init = () => ({
  type: INIT,
});

/* 메뉴 추가 모드로 변경 */
export const CHANGE_CREATE = "CHANGE_CREATE";
export const changeCreateAction = (depth) => ({
  type: CHANGE_CREATE,
  payload: depth,
});

/* 메뉴 목록 조회 */
export const GET_MENU_LIST = "GET_MENU_LIST";
export const getMenuListAction = () => ({
  type: GET_MENU_LIST,
});

/* 메뉴 목록 조회 성공 */
export const GET_MENU_LIST_SUCCESS = "GET_MENU_LIST_SUCCESS";
export const getMenuListSuccess = () => ({
  type: GET_MENU_LIST_SUCCESS,
});

/* 메뉴 등록 요청 */
export const MENU_REGIST_REQUEST = "MENU_REGIST_REQUEST";
export const menuRegistRequestAction = (data) => ({
  type: MENU_REGIST_REQUEST,
  payload: data,
});

/* 메뉴 수정 요청 */
export const MENU_MODIFY_REQUEST = "MENU_MODIFY_REQUEST";
export const menuModifyRequestAction = (data) => ({
  type: MENU_MODIFY_REQUEST,
  payload: data,
});

/* 메뉴 상세 조회 */
export const MENU_DETAIL = "MENU_DETAIL";
export const menuDetailAction = (cd) => ({
  type: MENU_DETAIL,
  payload: cd,
});

/* 메뉴 상세 조회 성공 */
export const MENU_DETAIL_SUCCESS = "MENU_DETAIL_SUCCESS";
export const menuDetailSuccessAction = (data) => ({
  type: MENU_DETAIL_SUCCESS,
  payload: data,
});

/* 메뉴 삭제 */
export const DELETE_MENU = "DELETE_MENU";
export const deleteMenuAction = (cd) => ({
  type: DELETE_MENU,
  payload: cd,
});

/* 메뉴 삭제 성공 */
export const DELETE_MENU_COMPLETE = "DELETE_MENU_COMPLETE";
export const deleteMenuCompleteAction = (cd) => ({
  type: DELETE_MENU_COMPLETE,
  payload: cd,
});

/* 메뉴 정렬 반영 */
export const MENU_SORT = "MENU_SORT";
export const menuSortAction = (payload) => ({
  type: MENU_SORT,
  payload: payload,
});

/* 메뉴 정렬 저장 */
export const SAVE_SORT = "SAVE_SORT";
export const saveSortAction = (payload) => ({
  type: SAVE_SORT,
  payload: payload,
});

export default function menuManagementRegistReducer(
  state = initialState,
  action
) {
  const { type, payload, error } = action;

  console.log("menuManagementRegistReducer = type", type, "payload", payload);

  switch (type) {
    case INIT:
      return {
        ...initialState,
      };
    case CHANGE_CREATE:
      let result = {
        ...state,
        mode: "create",
      };

      if (payload == "depth1") {
        result = {
          ...state,
          mode: "create",
          selectMenu: "",
        };
      }

      return result;
    case GET_MENU_LIST:
      return {
        ...state,
      };
    case GET_MENU_LIST_SUCCESS:
      let rslt = {
        ...state,
        [`d${payload.depth}Menu`]: payload.managerMenuList,
      };

      if (payload.depth === 2) {
        rslt = {
          ...state,
          [`d${payload.depth}Menu`]: payload.managerMenuList,
          d3Menu: [],
        };
      }

      // return {
      //   ...state,
      //   [`d${payload.depth}Menu`]: payload.managerMenuList,
      // };
      return rslt;

    case MENU_DETAIL:
      return {
        ...state,
        d3Menu: payload.depth === 1 ? [] : [...state.d3Menu],
      };
    case MENU_DETAIL_SUCCESS:
      return {
        ...state,
        selectMenu: payload,
        mode: "modify",
      };
    case DELETE_MENU:
      return {
        ...state,
      };
    case MENU_SORT:
      return {
        ...state,
        [`d${payload.depth}Menu`]: payload.list,
      };
    case SAVE_SORT:
      return {
        ...state,
      };
    case DELETE_MENU_COMPLETE:
      _.remove(state.d1Menu, (item) => {
        return item.cd == state.selectMenu.cd;
      });

      _.remove(state.d2Menu, (item) => {
        return item.cd == state.selectMenu.cd;
      });

      _.remove(state.d3Menu, (item) => {
        return item.cd == state.selectMenu.cd;
      });

      return {
        ...state,
        selectMenu: "",
      };
    default:
      return state;
  }
}
