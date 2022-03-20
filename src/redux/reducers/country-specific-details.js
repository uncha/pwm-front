const initialState = {
  listStatus: false,
};

export const LIST_STATUS = "LIST_STATUS";
export const DETAIL_STATUS = "DETAIL_STATUS";
export const NATION_STATUS = "NATION_STATUS";

export const listStatusAction = (data) => ({
  type: LIST_STATUS,
  payload: data,
});

export default function CountrySpecificDetailsReducer(
  state = initialState,
  action
) {
  const { type, payload, error } = action;
  console.log("payload: ", payload);

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
