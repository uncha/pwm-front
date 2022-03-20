import _ from "lodash";

const initialState = {
  managerMenuList: [],
  submitData: {},
  managerRole: "",
  mode: "create",
};

export const INIT = "INIT";
export const initAction = () => ({
  type: INIT,
});

export const GET_MENU_REQUEST = "GET_MENU_REQUEST";
export const getMenuRequestAction = () => ({
  type: GET_MENU_REQUEST,
});

export const GET_MENU_SUCCESS = "GET_MENU_SUCCESS";
export const getMenuSuccessAction = (data) => ({
  type: GET_MENU_SUCCESS,
  payload: data,
});

export const GET_REGIST_DETAIL_REQUEST = "GET_REGIST_DETAIL_REQUEST";
export const getRegistDetailRequestAction = (data) => ({
  type: GET_REGIST_DETAIL_REQUEST,
  payload: data,
});

export const CHANGE_TREE_CHECKED = "CHANGE_TREE_CHECKED";
export const changeTreeCheckedAction = (cd, checked) => ({
  type: CHANGE_TREE_CHECKED,
  payload: {
    cd: cd,
    checked: checked,
  },
});

export const SUBMIT_REQUEST = "SUBMIT_REQUEST";
export const submitRequestAction = (data) => ({
  type: SUBMIT_REQUEST,
  payload: data,
});

export const GET_REGIST_DETAIL_SUCCESS = "GET_REGIST_DETAIL_SUCCESS";
export const getRegistDetailSuccessAction = (data) => ({
  type: GET_REGIST_DETAIL_SUCCESS,
  payload: data,
});

export const SUBMIT_MODIFY_REQUEST = "SUBMIT_MODIFY_REQUEST";
export const submitModifyRequestAction = (data) => ({
  type: SUBMIT_MODIFY_REQUEST,
  payload: data,
});

export default function permissionManagementRegistReducer(
  state = initialState,
  action
) {
  const { type, payload, error } = action;

  console.log(
    "permissionManagementRegistReducer = type",
    type,
    "payload",
    payload
  );

  function find(cd, managerRoleMenus) {
    let item = _.findDeep(managerRoleMenus, (value, key, parent) => {
      if (key == "cd" && value == cd) {
        return true;
      }
    });

    return item;
  }

  function childChecked(parent, checked) {
    if (parent.childMenus) {
      _.forEach(parent.childMenus, (item) => {
        item.checked = payload.checked;

        if (item.childMenus) {
          _.forEach(item.childMenus, (item) => {
            item.checked = payload.checked;
          });
        }
      });
    }
  }

  switch (type) {
    case INIT:
      return {
        ...initialState,
      };
    case GET_MENU_REQUEST:
      return {
        ...state,
      };
    case GET_MENU_SUCCESS:
      return {
        ...state,
        managerMenuList: [...payload],
      };
    case CHANGE_TREE_CHECKED:
      console.log("payload", payload);

      _.forEach(state.managerMenuList, (item) => {
        if (item.cd == payload.cd) {
          item.checked = payload.checked;
          childChecked(item);
        }

        if (item.childMenus) {
          _.forEach(item.childMenus, (item) => {
            if (item.cd == payload.cd) {
              item.checked = payload.checked;
            }

            if (item.childMenus) {
              _.forEach(item.childMenus, (item) => {
                if (item.cd == payload.cd) {
                  item.checked = payload.checked;
                }
              });
            }
          });
        }
      });

      return {
        ...state,
        managerMenuList: [...state.managerMenuList],
      };
    case SUBMIT_REQUEST:
      return {
        ...state,
      };
    case SUBMIT_MODIFY_REQUEST:
      return {
        ...state,
      };
    case GET_REGIST_DETAIL_REQUEST:
      return {
        ...state,
        mode: "modify",
      };
    case GET_REGIST_DETAIL_SUCCESS:
      let managerRoleMenus = payload.managerRole.managerRoleMenus;

      _.forEach(state.managerMenuList, (item) => {
        item.checked = false;

        let result = find(item.cd, managerRoleMenus);
        if (result) {
          item.checked = true;
        }

        if (item.childMenus) {
          _.forEach(item.childMenus, (item) => {
            item.checked = false;

            let result = find(item.cd, managerRoleMenus);
            if (result) {
              item.checked = true;
            }

            if (item.childMenus) {
              _.forEach(item.childMenus, (item) => {
                item.checked = false;

                let result = find(item.cd, managerRoleMenus);
                if (result) {
                  item.checked = true;
                }
              });
            }
          });
        }
      });

      return {
        ...state,
        managerMenuList: [...state.managerMenuList],
        managerRole: { ...payload.managerRole },
      };
    default:
      return state;
  }
}
