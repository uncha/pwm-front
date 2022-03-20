const initData = {
  registData: {},
  isRegistDataLoadSuccess: false,
  nationCodeList: [],
  submitData: {
    conferenceMainTopicList: [],
    conferenceScheduleList: [
      {
        conferenceScheduleFileList: [],
        conferenceScheduleCompanyList: [],
        conferenceScheduleImageList: [],
        symposiumList: [
          {
            symposiumScheduleDateList: [
              {
                symposiumScheduleTimeList: [],
              },
            ],
          },
        ],
      },
    ],
  },
  distributorList: [],
  selectConferenceSchedule: 0,
  detailData: "",
  rmList: [],
  isSubmit: false,
  isSuccess: false,
};

const initialState = {
  ...JSON.parse(JSON.stringify(initData)),
};

export const INIT = "INIT";
export const init = () => ({
  type: INIT,
});

export const GET_REGISTDATA = "GET_REGISTDATA";
export const getRegistData = () => ({
  type: GET_REGISTDATA,
});

export const GET_REGISTDATA_SUCCESS = "GET_REGISTDATA_SUCCESS";
export const getRegistDataSuccess = (data) => ({
  type: GET_REGISTDATA_SUCCESS,
  payload: data,
});

export const GET_NATION_CODE_LIST = "GET_NATION_LIST";
export const getNationCodeList = (cd) => ({
  type: GET_NATION_CODE_LIST,
  payload: cd,
});

export const GET_NATION_CODE_LIST_SUCCESS = "GET_NATION_CODE_LIST_SUCCESS";
export const getNationCodeListSuccess = (data) => ({
  type: GET_NATION_CODE_LIST_SUCCESS,
  payload: data,
});

export const SUBMIT_DATA = "SUBMIT_DATA";
export const submitDataAction = (data) => ({
  type: SUBMIT_DATA,
  payload: data,
});

export const SUBMIT_DATA_SUCCESS = "SUBMIT_DATA_SUCCESS";
export const submitDataSuccessAction = (data) => ({
  type: SUBMIT_DATA_SUCCESS,
  payload: data,
});

export const SUBMIT_DATA_FAIL = "SUBMIT_DATA_FAIL";
export const submitDataFailAction = (data) => ({
  type: SUBMIT_DATA_FAIL,
  payload: data,
});

export const SUBMIT_MODIFY_DATA = "SUBMIT_MODIFY_DATA";
export const submitModifyDataAction = (data) => ({
  type: SUBMIT_MODIFY_DATA,
  payload: data,
});

export const GET_DISTRIBUTOR_LIST = "GET_DISTRIBUTOR_LIST";
export const getDistributorList = () => ({
  type: GET_DISTRIBUTOR_LIST,
});

export const GET_DISTRIBUTOR_LIST_SUCCESS = "GET_DISTRIBUTOR_LIST_SUCCESS";
export const getDistributorListSuccess = (distributorList) => ({
  type: GET_DISTRIBUTOR_LIST_SUCCESS,
  payload: distributorList,
});

export const CHANGE_SELECT_CONFERENCESCHEDULE =
  "CHANGE_SELECT_CONFERENCESCHEDULE";
export const changeSelectConferenceScheduleAction = (index) => ({
  type: CHANGE_SELECT_CONFERENCESCHEDULE,
  payload: index,
});

export const GET_DETAIL_REQUEST = "GET_DETAIL_REQUEST";
export const getDetailRequestAction = (seq) => ({
  type: GET_DETAIL_REQUEST,
  payload: seq,
});

export const GET_DETAIL_SUCCESS = "GET_DETAIL_SUCCESS";
export const getDetailSuccessAction = (data) => ({
  type: GET_DETAIL_SUCCESS,
  payload: data,
});

export const SET_SYMPOSIUM = "SET_SYMPOSIUM";
export const setSymposiumAction = (data) => ({
  type: SET_SYMPOSIUM,
  payload: data,
});

export const GET_RM_SUCCESS = "GET_RM_SUCCESS";
export const getRMSuccessAction = () => ({
  type: GET_RM_SUCCESS,
});

export const GET_RM_REQUEST = "GET_RM_REQUEST";
export const getRMRequestAction = () => ({
  type: GET_RM_REQUEST,
});

export const UPDATE_DETAIL = "UPDATE_DETAIL";
export const updateDetailAction = (data, num) => ({
  type: UPDATE_DETAIL,
  payload: {
    data: data,
    num: num,
  },
});

export default function academyDBRegistReducer(state = initialState, action) {
  const { type, payload, error } = action;

  console.log("academyDBRegistReducer = type", type, "payload", payload);

  console.log("initialState: ", initialState);

  switch (type) {
    case INIT:
      return {
        ...JSON.parse(JSON.stringify(initData)),
      };
    case GET_REGISTDATA:
      return {
        ...state,
      };
    case GET_REGISTDATA_SUCCESS:
      return {
        ...state,
        registData: { ...payload.registData },
        isRegistDataLoadSuccess: true,
      };
    case GET_NATION_CODE_LIST:
      return {
        ...state,
        nationCodeList: [...payload],
      };
    case GET_NATION_CODE_LIST_SUCCESS:
      return {
        ...state,
        nationCodeList: [...payload.nationCodeList],
      };
    case SUBMIT_DATA:
      return {
        ...state,
        // submitData: {
        //   ...payload,
        // },
      };

    case SUBMIT_DATA_SUCCESS:
      return {
        ...state,
        submitData: {
          ...payload.submitData,
        },
        isSubmit: true,
        isSuccess: payload.isSuccess,
      };

    case SUBMIT_DATA_FAIL:
      return {
        ...state,
        isSubmit: true,
        isSuccess: payload,
      };

    case SUBMIT_MODIFY_DATA:
      return {
        ...state,
        submitData: {
          ...payload,
        },
      };
    case GET_DISTRIBUTOR_LIST:
      return {
        ...state,
      };
    case GET_DISTRIBUTOR_LIST_SUCCESS:
      return {
        ...state,
        distributorList: payload,
      };
    case GET_DETAIL_REQUEST:
      return {
        ...state,
      };
    case CHANGE_SELECT_CONFERENCESCHEDULE:
      return {
        ...state,
        selectConferenceSchedule: payload,
      };
    case SET_SYMPOSIUM:
      state.submitData.conferenceScheduleList[
        state.selectConferenceSchedule
      ].symposiumList[0] = {
        ...payload,
        setSymposium: true,
      };

      return {
        ...state,
        submitData: { ...state.submitData },
      };
    case GET_RM_REQUEST:
      return {
        ...state,
      };
    case GET_RM_SUCCESS:
      return {
        ...state,
        rmList: payload,
      };
    case GET_DETAIL_SUCCESS:
      _.forEach(payload.conferenceScheduleList, (scheduleItem) => {
        state.submitData.conferenceScheduleList.push({
          conferenceScheduleFileList: [],
          conferenceScheduleCompanyList: [],
          conferenceScheduleImageList: [],
          symposiumList: [
            {
              symposiumScheduleDateList: [
                {
                  symposiumScheduleTimeList: [],
                },
              ],
            },
          ],
        });
      });

      return {
        ...state,
        detailData: payload,
        submitData: {
          ...state.submitData,
          conferenceScheduleList: [...state.submitData.conferenceScheduleList],
        },
      };

    case UPDATE_DETAIL:
      state.detailData.conferenceScheduleList[payload.num].symposiumList[0] =
        payload.data;

      return {
        ...state,
      };
    default:
      return state;
  }
}
