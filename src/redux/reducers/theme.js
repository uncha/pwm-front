import { Cookies } from "react-cookie";

const cookies = new Cookies();

let isLight = cookies.get("isLight")
  ? cookies.get("isLight")
  : cookies.set("isLight", "true", { path: "/" });

const initialState = {
  isLight: isLight,
};

export const THEME_CHANGE = "THEME_CHANGE";
export const themeChange = (data) => ({
  type: THEME_CHANGE,
  payload: {
    isLight: data,
  },
});

export default function userReducer(state = initialState, action) {
  const { type, payload, error } = action;

  console.log("userReducer type", type, "payload", payload);

  switch (type) {
    case THEME_CHANGE:
      return {
        ...state,
        isLight: payload.isLight,
      };
    default:
      return state;
  }
}
