import CombineWithStyles from "assets/js/combine";
import axios from "axios";
import deepdash from "deepdash";
import jwt_decode from "jwt-decode";
import lodash from "lodash";
import { default as React, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CacheRoute, { CacheSwitch } from "react-router-cache-route";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  useHistory,
} from "react-router-dom";
import { setStatusAction } from "redux/reducers/cachedStatus";
import {
  managerRoleRequestAction,
  setUserInfoAction,
} from "redux/reducers/user";
import "./App.scss";
import Main from "./assets/js/main";
import Menu from "./components/ui/Menu";
import Routes from "./routes/Routes";

let previousPath = "/";

const _ = deepdash(lodash);

function RouteWatch(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    userInfo,
    loginFail,
    loginFailReason,
    userAuth,
    managerRole,
    accessiblePages,
  } = useSelector((state) => state.user);

  useEffect(() => {
    return history.listen((location) => {
      console.log(`You changed the page to: ${location.pathname}`);

      beforeMounted(previousPath, location.pathname);
      authCheck(location.pathname);

      previousPath = location.pathname;
    });
  }, [history]);

  useEffect(() => {
    if (accessiblePages.indexOf(window.location.pathname) == -1) {
      authCheck(window.location.pathname);
    }
  }, [managerRole]);

  const authCheck = (next) => {
    if (managerRole) {
      let menu = _.find(managerRole.managerRole.managerRoleMenus, (item) => {
        return next.indexOf(item.managerMenu.url) > -1;
      });

      if (!menu) window.location.href = "/login";
    }
  };

  const beforeMounted = (prev, next) => {
    _.forEach(Routes, (route) => {
      if (route.path == next) {
        if (route.cache && route.cache == true) {
          let cachedPage = _.find(route.cacheLocation, (item) => {
            return comparePath(item, prev);
          });

          if (!cachedPage) {
            dispatch(setStatusAction("reset"));
          } else {
            dispatch(setStatusAction("fetch"));
          }
        }
      }
    });
  };

  const comparePath = (path1, path2) => {
    if (path1.indexOf(":") > -1) {
      let arr1 = path1.split("/");
      let arr2 = path2.split("/");
      let isSame = true;

      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].indexOf(":") == -1) {
          if (arr1[i] != arr2[i]) {
            isSame = false;
          }
        }
      }

      return isSame;
    } else {
      return path1 == path2 ? true : false;
    }
  };

  return <></>;
}

function App(props) {
  const dispatch = useDispatch();
  const {
    userInfo,
    loginFail,
    loginFailReason,
    userAuth,
    managerRole,
  } = useSelector((state) => state.user);
  const [path, setPath] = useState(location.pathname.split("/"));
  const { tokenRefreshFail, loginSuccess, loginResponseData } = useSelector(
    (state) => state.user
  );
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    if (location.pathname != "/login") {
      if (loginSuccess) {
        window.localStorage.setItem(
          "X-AUTH-TOKEN-ADMIN",
          `${loginResponseData.tokenType} ${loginResponseData.accessToken}`
        );

        window.localStorage.setItem(
          "X-REFRESH-TOKEN-ADMIN",
          `${loginResponseData.refreshToken}`
        );

        const myDecodedToken = jwt_decode(loginResponseData.accessToken);
        dispatch(setUserInfoAction(myDecodedToken));

        axios.defaults.headers.Authorization = `${
          loginResponseData.tokenType
        } ${loginResponseData.accessToken}`;

        dispatch(managerRoleRequestAction(myDecodedToken.mrSeq));
      } else {
        const accessToken = window.localStorage.getItem("X-AUTH-TOKEN-ADMIN");
        const refreshToken = window.localStorage.getItem(
          "X-REFRESH-TOKEN-ADMIN"
        );
        if (!accessToken && !refreshToken) {
          window.location.href = "/login";
        }

        const myDecodedToken = jwt_decode(accessToken);
        dispatch(setUserInfoAction(myDecodedToken));

        axios.defaults.headers.Authorization = accessToken;

        dispatch(managerRoleRequestAction(myDecodedToken.mrSeq));
      }
    } else {
      setIsRender(true);
    }
  }, [loginSuccess]);

  useEffect(() => {
    if (managerRole === null) {
      window.alert("접속 권한이 없습니다.");
      window.location.href = "/login";
    } else {
      if (managerRole.managerRole) {
        _.forEach(Routes, (item) => {
          let roleItem = _.find(
            managerRole.managerRole.managerRoleMenus,
            (role) => {
              return role.mmCd == item.code;
            }
          );

          if (roleItem) {
            roleItem.role = true;
            item.role = true;
          }
        });
      }

      setIsRender(true);
    }
  }, [managerRole]);

  if (isRender == false) <></>;

  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <RouteWatch />
          {location.pathname !== "/login" && (
            <div className="App-header">
              <Menu />
            </div>
          )}
          <Suspense fallback={<div />}>
            <div
              className="App-contents"
              style={{
                paddingTop: location.pathname !== "/login" ? null : 0,
              }}
            >
              {Routes.map((route) => {
                if (route.cache == true) {
                  return (
                    <CacheSwitch>
                      <CacheRoute
                        key={route.path}
                        exact
                        path={route.path}
                        component={route.component}
                      />
                    </CacheSwitch>
                  );
                } else {
                  return (
                    <Route
                      key={route.path}
                      exact
                      path={route.path}
                      component={route.component}
                    />
                  );
                }
              })}
            </div>
          </Suspense>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default CombineWithStyles(Main)(App);
