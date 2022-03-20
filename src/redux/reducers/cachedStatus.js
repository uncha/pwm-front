import _ from "lodash";

const initialState = {
  type:'reset'
};

export const SET_STATUS = "SET_STATUS";
export const setStatusAction = (data) => ({
  type: SET_STATUS,
  payload: data
});

export default function cachedStatusReducer(state = initialState, action) {
  const { type, payload, error } = action;

  console.log("cachedStatusReducer type", type, "payload", payload);

  switch (type) {
    case SET_STATUS:
      return {
        ...state,
        type:payload
      };
    default:
      return state;
  }
}
