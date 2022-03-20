const initialState = {
  params: {
    schFld: "whle",
    schTxt: "",
    pg: 1,
    pgSz: 10,
    schUseYn: "",
  },
  managerRoleList: "",
};

export const INIT = "INIT";
export const init = () => ({
  type: INIT,
});

export const LOAD_LIST = "LOAD_LIST";
export const loadListAction = (params) => ({
  type: LOAD_LIST,
  payload: params,
});

export const LOAD_LIST_SUCCESS = "LOAD_LIST_SUCCESS";
export const loadListSuccessAction = (list) => ({
  type: LOAD_LIST_SUCCESS,
  payload: list,
});

export default function permissionManagementReducer(
  state = initialState,
  action
) {
  const { type, payload, error } = action;

  console.log("permissionManagementReducer = type", type, "payload", payload);

  switch (type) {
    case INIT:
      return {
        ...initialState,
      };
    case LOAD_LIST:
      return {
        ...state,
        params: payload,
      };
    case LOAD_LIST_SUCCESS:
      return {
        ...state,
        managerRoleList: payload,
      };
    default:
      return state;
  }
}
