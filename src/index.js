import { CssBaseline } from "@material-ui/core/";
import { ThemeProvider } from "@material-ui/styles";
import axios from "axios";
import { createContext, default as React } from "react";
import { Cookies } from "react-cookie";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { darkTheme, lightTheme } from "Theme";
import App from "./App";
import GlobalStyles from "./assets/js/global";
import rootReducer from "./redux/reducers";
import rootSaga from "./redux/sagas";
import reportWebVitals from "./reportWebVitals";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
const cookies = new Cookies();

sagaMiddleware.run(rootSaga);

axios.defaults.baseURL = "http://175.116.227.108:18081";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.Authorization = window.localStorage.getItem(
  "X-AUTH-TOKEN-ADMIN"
);

const refreshTokenAPI = () => {
  console.log("refreshTokenAPI");

  return new Promise((resolve) => {
    axios
      .post(`/api/auth/token`, {
        grantType: "refresh_token",
        refreshToken: window.localStorage.getItem("X-REFRESH-TOKEN-ADMIN"),
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        console.log("error: ", error);
        window.location.href = "/login";
      });
  });
};

axios.interceptors.response.use(
  (config) => {
    console.log("config: ", config);
    return config;
  },
  async (error) => {
    console.log("error: ==================================== ", error);
    console.log("error.response.data.status: ", error.response.data.status);
    if (error.response.data.status == 401) {
      const newToken = await refreshTokenAPI();

      window.localStorage.setItem(
        "X-AUTH-TOKEN-ADMIN",
        `${newToken.data.tokenType} ${newToken.data.accessToken}`
      );

      window.localStorage.setItem(
        "X-REFRESH-TOKEN-ADMIN",
        `${newToken.data.refreshToken}`
      );

      axios.defaults.headers.Authorization = `${newToken.data.tokenType} ${
        newToken.data.accessToken
      }`;

      error.config.headers.Authorization = `${newToken.data.tokenType} ${
        newToken.data.accessToken
      }`;

      return axios.request(error.config);
    }
    return Promise.reject(error);
  }
);

const customTheme = () => {
  let isLight = cookies.get("isLight");
  if (isLight === "true") {
    return lightTheme;
  } else {
    return darkTheme;
  }
};
export const rootContext = createContext();
const apiKey = "dj0t0m0cbm8a0bqhu9gyez5hnm9mr8fuq66d3nvzcc5pahmr";
function render() {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={customTheme()}>
        <CssBaseline />
        <GlobalStyles />
        <rootContext.Provider value={{ apiKey }}>
          <App />
        </rootContext.Provider>
      </ThemeProvider>
    </Provider>,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
reportWebVitals();
