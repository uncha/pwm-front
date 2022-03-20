const initialState = {
  academicDataDocumentCategoryType: {},
  academicDataType: {},
  academicDataByYearList: {
    //Article by Year (Line Chart)
    totalSize: 0,
    totalPageSize: 0,
    number: 0,
    list: [],
  },
  academicDataByCategoryBarList: {
    //Article by Year (Bar Chart)
    totalSize: 0,
    totalPageSize: 0,
    number: 0,
    list: [],
  },
  academicDataByCategoryPieList: {
    //Article by Year (Pie Chart)
    totalSize: 0,
    totalPageSize: 0,
    number: 0,
    list: [],
  },
  topViewerCustomerList: {
    totalSize: 0,
    totalPageSize: 0,
    number: 0,
    list: [],
    isFirst: true,
  },
  topViewerCountryList: {
    totalSize: 0,
    totalPageSize: 0,
    number: 0,
    list: [],
    isFirst: true,
  },
  academicDataList: {
    totalSize: 0,
    totalPageSize: 0,
    number: 0,
    list: [],
  },
  successCnt: 0,
  isDataLoaded: false,
};

export const INIT = "INIT";
export const init = () => ({
  type: INIT,
});

export const GET_ACADEMICDATALINE = "GET_ACADEMICDATALINE";
export const getAcademicDataLine = (data) => ({
  type: GET_ACADEMICDATALINE,
  payload: data,
});

export const GET_ACADEMICDATALINE_SUCCESS = "GET_ACADEMICDATALINE_SUCCESS";
export const getAcademicDataLineSuccess = (data) => ({
  type: GET_ACADEMICDATALINE_SUCCESS,
  payload: data,
});

export const GET_ACADEMICDATABAR = "GET_ACADEMICDATABAR";
export const getAcademicDataBar = (data) => ({
  type: GET_ACADEMICDATABAR,
  payload: data,
});

export const GET_ACADEMICDATABAR_SUCCESS = "GET_ACADEMICDATABAR_SUCCESS";
export const getAcademicDataBarSuccess = (data) => ({
  type: GET_ACADEMICDATABAR_SUCCESS,
  payload: data,
});

export const GET_ACADEMICDATAPIE = "GET_ACADEMICDATAPIE";
export const getAcademicDataPie = (data) => ({
  type: GET_ACADEMICDATAPIE,
  payload: data,
});

export const GET_ACADEMICDATAPIE_SUCCESS = "GET_ACADEMICDATAPIE_SUCCESS";
export const getAcademicDataPieSuccess = (data) => ({
  type: GET_ACADEMICDATAPIE_SUCCESS,
  payload: data,
});

export const GET_TOPVIEWERCUSTOMERLIST = "GET_TOPVIEWERCUSTOMERLIST";
export const getTopViewerCustomerList = (data) => ({
  type: GET_TOPVIEWERCUSTOMERLIST,
  payload: data,
});

export const GET_TOPVIEWERCUSTOMERLIST_SUCCESS =
  "GET_TOPVIEWERCUSTOMERLIST_SUCCESS";
export const getTopViewerCustomerListSuccess = (data) => ({
  type: GET_TOPVIEWERCUSTOMERLIST_SUCCESS,
  payload: data,
});

export const GET_TOPVIEWERCOUNTRYLIST = "GET_TOPVIEWERCOUNTRYLIST";
export const getTopViewerCountryList = (data) => ({
  type: GET_TOPVIEWERCOUNTRYLIST,
  payload: data,
});

export const GET_TOPVIEWERCOUNTRYLIST_SUCCESS =
  "GET_TOPVIEWERCOUNTRYLIST_SUCCESS";
export const getTopViewerCountryListSuccess = (data) => ({
  type: GET_TOPVIEWERCOUNTRYLIST_SUCCESS,
  payload: data,
});

export const GET_ACADEMICDATALIST = "GET_ACADEMICDATALIST";
export const getAcademicDataList = (data) => ({
  type: GET_ACADEMICDATALIST,
  payload: data,
});

export const GET_ACADEMICDATALIST_SUCCESS = "GET_ACADEMICDATALIST_SUCCESS";
export const getAcademicDataListSuccess = (data) => ({
  type: GET_ACADEMICDATALIST_SUCCESS,
  payload: data,
});

export default function paperRegistrationStatus(state = initialState, action) {
  const { type, payload, error } = action;
  const { academicDataList } = state;

  switch (type) {
    case INIT:
      return {
        ...state,
      };

    case GET_ACADEMICDATALINE:
      return {
        ...state,
      };

    case GET_ACADEMICDATALINE_SUCCESS:
      return {
        ...state,
        academicDataByYearList: { ...payload.academicDataByYearList },
        academicDataDocumentCategoryType: {
          ...payload.academicDataDocumentCategoryType,
        },
        successCnt:
          state.successCnt < 6 ? state.successCnt + 1 : state.successCnt,
      };

    case GET_ACADEMICDATABAR:
      return {
        ...state,
      };

    case GET_ACADEMICDATABAR_SUCCESS:
      return {
        ...state,
        academicDataByCategoryBarList: {
          ...payload.academicDataByCategoryBarList,
        },
        academicDataType: {
          ...payload.academicDataType,
        },
        successCnt:
          state.successCnt < 6 ? state.successCnt + 1 : state.successCnt,
      };

    case GET_ACADEMICDATAPIE:
      return {
        ...state,
      };

    case GET_ACADEMICDATAPIE_SUCCESS:
      return {
        ...state,
        academicDataByCategoryPieList: {
          ...payload.academicDataByCategoryPieList,
        },
        successCnt:
          state.successCnt < 6 ? state.successCnt + 1 : state.successCnt,
      };

    case GET_TOPVIEWERCUSTOMERLIST:
      return {
        ...state,
      };

    case GET_TOPVIEWERCUSTOMERLIST_SUCCESS:
      return {
        ...state,
        topViewerCustomerList: {
          ...payload.topViewerCustomerList,
          isFirst: false,
        },
        successCnt:
          state.successCnt < 6 ? state.successCnt + 1 : state.successCnt,
      };

    case GET_TOPVIEWERCOUNTRYLIST:
      return {
        ...state,
      };

    case GET_TOPVIEWERCOUNTRYLIST_SUCCESS:
      return {
        ...state,
        topViewerCountryList: {
          ...payload.topViewerCountryList,
          isFirst: false,
        },
        successCnt:
          state.successCnt < 6 ? state.successCnt + 1 : state.successCnt,
      };

    case GET_ACADEMICDATALIST:
      return {
        ...state,
      };

    case GET_ACADEMICDATALIST_SUCCESS:
      return {
        ...state,
        academicDataList: {
          ...payload.academicDataList,
        },
        successCnt:
          state.successCnt < 6 ? state.successCnt + 1 : state.successCnt,
      };

    default:
      return state;
  }
}
