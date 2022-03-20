import { Box, Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cookies, withCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import UserMenu from "./UserMenu.js";

const cookies = new Cookies();

function Menu(props) {
  const history = useHistory();
  let currentPath = useLocation();
  const [menus, setMenus] = useState([]);
  const [open, setOpen] = useState({ bool: false, index: "", id: "" });

  const {
    userInfo,
    loginFail,
    loginFailReason,
    userAuth,
    managerRole,
  } = useSelector((state) => state.user);

  const getMenu = (props) => {
    if (managerRole) {
      let menu = [];
      _.forEach(managerRole.managerMenuTreeList, (treeItem) => {
        let obj = {
          id: treeItem.url,
          value: treeItem.nm,
          items: [],
        };
        menu.push(obj);

        _.forEach(treeItem.childMenus, (childItem) => {
          obj.items.push({
            id: childItem.url,
            value: childItem.nm,
          });
        });
      });

      console.log("menu: ", menu);
      setMenus([...menu]);
    }
  };

  useEffect(() => {
    getMenu();
  }, [managerRole]);

  const registLog = (data) => {
    if (userInfo && managerRole && data) {
      let menuList = managerRole.managerMenuTreeList;
      let result = _.findDeep(
        menuList,
        (item, key, parentValue, context) =>
          item.url === data && item.depth !== "1",
        {
          childrenPath: "childMenus",
        }
      );

      if (result) {
        axios
          .post("/api/st/manager-connect-log/detail/regist", {
            mclSeq: userInfo.mclSeq,
            cont: `${result.parent.nm} > ${result.value.nm}`,
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }
    }
  };

  return (
    <div id="sidebar">
      <nav id="nav">
        <Grid container className="top" alignItems="center">
          <Grid item xs={6}>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                props.history.push("/");
              }}
            >
              <img src="/images/icon/logo-seegene.svg" />
            </a>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" justifyContent="flex-end">
              {/* <ThemeSwitch /> */}
              <UserMenu props={props} />
            </Box>
          </Grid>
        </Grid>
        <div className="menu-wrapper">
          <div className="depth-01">
            <ul>
              {menus.map((d1, index) => (
                <li
                  key={index}
                  onMouseEnter={() => {
                    setOpen({ bool: true, index: index, id: d1.id });
                  }}
                  onMouseLeave={() => {
                    setOpen({ ...open, bool: false, index: "" });
                  }}
                >
                  {d1.items[0] && (
                    <a
                      href={d1.items[0].id}
                      className={
                        currentPath.pathname.includes(d1.id)
                          ? "active-menu"
                          : ""
                      }
                      onClick={(e) => {
                        e.preventDefault();

                        if (props.location.pathname !== d1.items[0].id) {
                          props.history.push(d1.items[0].id);
                          registLog(d1.items[0].id);
                        }
                      }}
                    >
                      {d1.value}
                    </a>
                  )}

                  {open.bool && open.index == index && (
                    <div
                      className={
                        index === menus.length - 1
                          ? "depth-02 depth-02-right"
                          : "depth-02"
                      }
                    >
                      <ul>
                        {d1.items.map((d2, idx) => (
                          <li key={idx}>
                            <a
                              href={d2.id}
                              className={
                                currentPath.pathname === d2.id
                                  ? "active-menu "
                                  : ""
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                if (props.location.pathname !== d2.id) {
                                  props.history.push(d2.id);
                                  registLog(d2.id);
                                }
                              }}
                            >
                              {d2.value}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(withCookies(Menu));
