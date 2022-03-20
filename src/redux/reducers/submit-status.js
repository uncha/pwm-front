const initialState = {
  submitStatus: false,
};

export const SUBMIT_STATUS = "SUBMIT_STATUS";
export const submitStatusAction = (data) => ({
  type: SUBMIT_STATUS,
  payload: data,
});

export default function submitStatusReducer(state = initialState, action) {
  const { type, payload, error } = action;
  console.log("payload: ", payload);

  switch (type) {
    case SUBMIT_STATUS:
      return {
        ...state,
        submitStatus: payload,
      };
    default:
      return state;
  }
}
