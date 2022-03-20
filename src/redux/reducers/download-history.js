const initialState = {
  listStatus: false,
};

export const LIST_STATUS = "LIST_STATUS";

export const listStatusAction = (data) => ({
  type: LIST_STATUS,
  payload: data,
});

export default function downloadHistoryReducer(state = initialState, action) {
  const { type, payload, error } = action;

  switch (type) {
    case LIST_STATUS:
      return {
        ...state,
        listStatus: payload,
      };
    default:
      return state;
  }
}
