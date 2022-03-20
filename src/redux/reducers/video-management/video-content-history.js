const initialState = {
  videoAccessLogData: {
    distributerType: {},
    memberType: {},
    nationCodeList: [],
    videoChTps: {},
    videoContentsList: {
      totalPageSize: 0,
      totalSize: 0,
      number: 0,
      list: [],
    },
  },
};

export const INIT = "INIT";
export const init = () => ({
  type: INIT,
});

export const GET_VIDEO_ACCESS_LOG = "GET_VIDEO_ACCESS_LOG";
export const getVideoAccessLog = (data) => ({
  type: GET_VIDEO_ACCESS_LOG,
  payload: data,
});

export const GET_VIDEO_ACCESS_LOG_SUCCESS = "GET_VIDEO_ACCESS_LOG_SUCCESS";
export const getVideoAccessLogSuccess = (data) => ({
  type: GET_VIDEO_ACCESS_LOG_SUCCESS,
  payload: data,
});

export default function videoAccessLogData(state = initialState, action) {
  const { type, payload, error } = action;

  switch (type) {
    case INIT:
      return {
        ...initialState,
      };
    case GET_VIDEO_ACCESS_LOG:
      return {
        ...state,
      };
    case GET_VIDEO_ACCESS_LOG_SUCCESS:
      return {
        ...state,
        videoAccessLogData: payload,
      };
    default:
      return state;
  }
}
