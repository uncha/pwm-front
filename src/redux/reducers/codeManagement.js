const initialState = {
  codeList: [],
  codeGroupList: [],
  selectGroupCode: "",
  selectGroupDetail: {},
  selectCode: "",
  codeSortDirection: "",
};

/* 코드그룹 로드 */
export const LOAD_CODEGROUP = "LOAD_CODEGROUP";
export const loadCodeGroupAction = (data) => ({
  type: LOAD_CODEGROUP,
});

/* 코드그룹 로드 성공 */
export const LOAD_CODEGROUP_SUCCESS = "LOAD_CODEGROUP_SUCCESS";
export const loadCodeGroupSuccessAction = (data) => ({
  type: LOAD_CODEGROUP_SUCCESS,
});

/* 코드 로드 */
export const LOAD_CODE = "LOAD_CODE";
export const loadCodeAction = (data) => ({
  type: LOAD_CODE,
  payload: {
    groupCode: data,
  },
});

/* 코드 로드 성공 */
export const LOAD_CODE_SUCCESS = "LOAD_CODE_SUCCESS";
export const loadCodeSuccessAction = (data) => ({
  type: LOAD_CODE_SUCCESS,
  payload: data,
});

/* 코드그룹 등록 */
export const CODEGROUP_CREATE_REQUEST = "CODEGROUP_CREATE_REQUEST";
export const codeGroupCreateRequestAction = (data) => ({
  type: CODEGROUP_CREATE_REQUEST,
  payload: data,
});

/* 코드그룹 등록 성공 */
export const CODEGROUP_CREATE_SUCCESS = "CODEGROUP_CREATE_SUCCESS";
export const codeGroupCreateSuccessAction = (data) => ({
  type: CODEGROUP_CREATE_SUCCESS,
});

/* 코드그룹 수정 */
export const CODEGROUP_MODIFY_REQUEST = "CODEGROUP_MODIFY_REQUEST";
export const codeGroupModifyRequestAction = (data) => ({
  type: CODEGROUP_MODIFY_REQUEST,
  payload: data,
});

/* 코드그룹 수정 성공 */
export const CODEGROUP_MODIFY_SUCCESS = "CODEGROUP_MODIFY_SUCCESS";
export const codeGroupModifySuccessAction = (data) => ({
  type: CODEGROUP_MODIFY_SUCCESS,
});

/* 코드그룹 선택 */
export const CODEGROUP_SELECT = "CODEGROUP_SELECT";
export const codeGroupSelectAction = (data) => ({
  type: CODEGROUP_SELECT,
  payload: {
    groupCode: data,
  },
});

/* 코드그룹 상세 조회 성공 */
export const CODEGROUP_SELECT_SUCCESS = "CODEGROUP_SELECT_SUCCESS";
export const codeGroupSelectSuccessAction = (data) => ({
  type: CODEGROUP_SELECT_SUCCESS,
});

/* 코드그룹 삭제 요청 */
export const DELETE_CODEGROUP_REQUEST = "DELETE_CODEGROUP_REQUEST";
export const deleteCodeGroupRequestAction = (data) => ({
  type: DELETE_CODEGROUP_REQUEST,
  payload: data,
});

/* 코드그룹 삭제 성공 */
export const DELETE_CODEGROUP_SUCCESS = "DELETE_CODEGROUP_SUCCESS";
export const deleteCodeGroupSuccessAction = (data) => ({
  type: DELETE_CODEGROUP_SUCCESS,
});

/* 코드그룹 입력 취소 */
export const CANCEL_CODEGROUP = "CANCEL_CODEGROUP";
export const cancelCodeGroupAction = () => ({
  type: CANCEL_CODEGROUP,
});

/* 코드 등록 */
export const CODE_CREATE_REQUEST = "CODE_CREATE_REQUEST";
export const codeCreateRequestAction = (data) => ({
  type: CODE_CREATE_REQUEST,
  payload: {
    data: data,
    selectGroupCode: initialState.selectGroupCode,
  },
});

/* 코드 등록 성공 */
export const CODE_CREATE_SUCCESS = "CODE_CREATE_SUCCESS";
export const codeCreateSuccessAction = (data) => ({
  type: CODE_CREATE_SUCCESS,
});

/* 코드 선택 */
export const CODE_SELECT = "CODE_SELECT";
export const codeSelectAction = (data) => ({
  type: CODE_SELECT,
  payload: {
    code: data,
  },
});

/* 코드 수정 */
export const CODE_MODIFY_REQUEST = "CODE_MODIFY_REQUEST";
export const codeModifyRequestAction = (data) => ({
  type: CODE_MODIFY_REQUEST,
  payload: {
    data: data,
    selectGroupCode: initialState.selectGroupCode,
  },
});

/* 코드 수정 성공 */
export const CODE_MODIFY_SUCCESS = "CODE_MODIFY_SUCCESS";
export const codeModifySuccessAction = (data) => ({
  type: CODE_MODIFY_SUCCESS,
});

/* 코드 삭제 */
export const DELETE_CODE_REQUEST = "DELETE_CODE_REQUEST";
export const deleteCodeRequestAction = (data) => ({
  type: DELETE_CODE_REQUEST,
  payload: {
    code: data,
    selectCode: initialState,
  },
});

/* 코드 삭제 성공 */
export const DELETE_CODE_SUCCESS = "DELETE_CODE_SUCCESS";
export const deleteCodeSuccessAction = (data) => ({
  type: DELETE_CODE_SUCCESS,
});

/* 코드 정렬 반영 */
export const CODE_SORT = "CODE_SORT";
export const codeSortAction = (data) => ({
  type: CODE_SORT,
  payload: data,
});

/* 코드 정렬 저장 */
export const SAVE_SORT = "SAVE_SORT";
export const saveSortAction = (data) => ({
  type: SAVE_SORT,
  payload: data,
});

export default function codeManagementReducer(state = initialState, action) {
  const { type, payload, error } = action;

  console.log("codeManagementReducer type", type, "payload", payload);

  switch (type) {
    case LOAD_CODEGROUP:
      return {
        ...state,
      };
    case LOAD_CODEGROUP_SUCCESS:
      return {
        ...state,
        codeGroupList: [...payload.codeGroupList],
      };

    case CODEGROUP_CREATE_REQUEST:
      return {
        ...state,
      };
    case CODEGROUP_CREATE_SUCCESS:
      return {
        ...state,
      };
    case CODEGROUP_MODIFY_REQUEST:
      return {
        ...state,
      };
    case CODEGROUP_MODIFY_SUCCESS:
      return {
        ...state,
        codeGroupList: [...mockCodeGroupList],
      };
    case CODEGROUP_SELECT:
      return {
        ...state,
        selectGroupCode: payload.groupCode,
      };
    case CODEGROUP_SELECT_SUCCESS:
      return {
        ...state,
        selectGroupDetail: payload.categoryCode,
        codeList: payload.codeList,
      };
    case DELETE_CODEGROUP_REQUEST:
      return {
        ...state,
        selectGroupCode: "",
      };
    case DELETE_CODEGROUP_SUCCESS:
      return {
        ...state,
        codeGroupList: mockCodeGroupList,
        selectGroupCode: "",
      };
    case CANCEL_CODEGROUP:
      return {
        ...state,
      };
    case LOAD_CODE:
      return {
        ...state,
      };
    case LOAD_CODE_SUCCESS:
      return {
        ...state,
        codeList: payload.codeList,
      };
    case CODE_CREATE_REQUEST:
      return {
        ...state,
      };
    case CODE_CREATE_SUCCESS:
      return {
        ...state,
      };
    case CODE_SELECT:
      return {
        ...state,
        selectCode: payload.code,
      };
    case CODE_MODIFY_REQUEST:
      return {
        ...state,
      };
    case CODE_MODIFY_SUCCESS:
      return {
        ...state,
      };
    case DELETE_CODE_REQUEST:
      return {
        ...state,
      };
    case DELETE_CODE_SUCCESS:
      return {
        ...state,
        codeList: "",
        selectCode: "",
      };
    case CODE_SORT:
      console.log("payload ~~~~~~~~~~~~~~~~~", payload);
      return {
        ...state,
        codeList: payload,
      };
    case SAVE_SORT:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
}
