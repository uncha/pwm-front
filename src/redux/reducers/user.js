const initialState = {
  loginFail: false,
  loginFailReason: "",
  loginSuccess: false,
  userInfo: null,
  userAuth: [],
  loginData: null,
  loginResponseData: null,
  tokenRefreshFail: false,
  managerRole: "",
  accessiblePages: ["/", "/login", "/guide"],
};

/* 로그인 요청 */
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const loginRequestAction = (data) => ({
  type: LOGIN_REQUEST,
  payload: {
    loginData: data,
  },
});

/* 로그인 성공 , -스토리지에 토큰 저장, -store에 user 저장 */
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const loginSuccessAction = (data) => ({
  type: LOGIN_SUCCESS,
  payload: {
    loginResponseData: data,
  },
});

/* 로그인 실패 */
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const loginFailureAction = (data) => ({
  type: LOGIN_FAILURE,
  payload: {
    loginFailReason: data,
  },
});

/* 메뉴 접근 권한 요청  */
export const USER_AUTH_REQUEST = "USER_AUTH_REQUEST";
export const userAuthRequestAction = (data) => ({
  type: USER_AUTH_REQUEST,
});

/* 메뉴 접근 권한 성공  */
export const USER_AUTH_SUCCESS = "USER_AUTH_SUCCESS";
export const userAuthSuccessAction = (data) => ({
  type: USER_AUTH_SUCCESS,
});

/* header에 토근 넘겼을경우 401에러시 리프레시토큰으로 토큰갱신 요청 */
export const REFRESH_TOKEN_REQUEST = "REFRESH_TOKEN_REQUEST";
export const refreshTokenRequestAction = (data) => ({
  type: REFRESH_TOKEN_REQUEST,
  payload: {
    refreshToken: data,
  },
});

/* 리프레시 토큰 성공시 */
export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
export const refreshTokenSuccessAction = (data) => ({
  type: REFRESH_TOKEN_SUCCESS,
  payload: data,
});

/* 리프레시 토큰 에러시 로그아웃, -스토리지 삭제 */
export const REFRESH_TOKEN_FAILURE = "REFRESH_TOKEN_FAILURE";
export const refreshTokenFailureAction = (data) => ({
  type: REFRESH_TOKEN_FAILURE,
});

/* 관리자 권한 요청 */
export const MANAGER_ROLE_REQUEST = "MANAGER_ROLE_REQUEST";
export const managerRoleRequestAction = (data) => ({
  type: MANAGER_ROLE_REQUEST,
  payload: data,
});

/* 관리자 권한 성공 */
export const MANAGER_ROLE_SUCCESS = "MANAGER_ROLE_SUCCESS";
export const managerRoleSuccessAction = (data) => ({
  type: MANAGER_ROLE_SUCCESS,
  payload: data,
});

/* 관리자 권한 실패 */
export const MANAGER_ROLE_FAILURE = "MANAGER_ROLE_FAILURE";
export const managerRoleFailureAction = (data) => ({
  type: MANAGER_ROLE_FAILURE,
  payload: data,
});

/* 토큰 값 저장 */
export const SET_USER_INFO = "SET_USER_INFO";
export const setUserInfoAction = (data) => ({
  type: SET_USER_INFO,
  payload: data,
});

/* 로그아웃 */
export const LOGOUT = "LOGOUT";
export const logoutAction = (data) => ({
  type: LOGOUT,
});

export default function userReducer(state = initialState, action) {
  const { type, payload, error } = action;

  console.log("userReducer type", type, "payload", payload);

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginFail: false,
        loginSuccess: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginFail: false,
        loginSuccess: true,
        loginResponseData: { ...payload.loginResponseData },
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginFail: true,
        loginFailReason: payload.loginFailReason,
      };
    case REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        loginSuccess: false,
      };
    case REFRESH_TOKEN_SUCCESS:
      console.log("payload.loginResponseData: ", payload.data);

      return {
        ...state,
        loginSuccess: true,
        tokenRefreshFail: false,
        loginResponseData: { ...payload.data },
      };
    case REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        tokenRefreshFail: true,
      };
    case LOGOUT:
      return {
        ...state,
        userInfo: null,
      };
    case MANAGER_ROLE_REQUEST:
      return {
        ...state,
      };
    case MANAGER_ROLE_SUCCESS:
      console.log(
        "MANAGER_ROLE_SUCCESS ==================== payload: ",
        payload
      );

      return {
        ...state,
        managerRole: payload,
      };
    case MANAGER_ROLE_FAILURE:
      return {
        ...state,
        managerRole: payload,
      };
    case SET_USER_INFO:
      console.log("SET_USER_INFO: ", payload);
      return {
        ...state,
        userInfo: payload,
      };
    default:
      return state;
  }
}
