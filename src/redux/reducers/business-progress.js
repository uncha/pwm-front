const initialState = {
  listStatus: false,
  selectedData: {
    certificationWorkProgressType: "",
    certificationWork: "",
  },
  nationList: [],
};

export const LIST_STATUS = "LIST_STATUS";
export const DETAIL_STATUS = "DETAIL_STATUS";
export const NATION_STATUS = "NATION_STATUS";

export const listStatusAction = (data) => ({
  type: LIST_STATUS,
  payload: data,
});

export const selectedDataAction = (data) => ({
  type: DETAIL_STATUS,
  payload: data,
});

export const getNationListAction = (data) => ({
  type: NATION_STATUS,
  payload: data,
});

export default function businessProgressReducer(state = initialState, action) {
  const { type, payload, error } = action;
  console.log("payload: ", payload);

  switch (type) {
    case LIST_STATUS:
      return {
        ...state,
        listStatus: payload,
      };
    case DETAIL_STATUS:
      return {
        ...state,
        selectedData: payload,
      };
    case NATION_STATUS:
      return {
        ...state,
        nationList: payload,
      };
    default:
      return state;
  }
}
