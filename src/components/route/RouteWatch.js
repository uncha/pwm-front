import axios from "axios";
import deepdash from "deepdash";
import lodash from "lodash";
import { default as React } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
let previousPath = "/";

const _ = deepdash(lodash);

export default function RouteWatch() {
  const dispatch = useDispatch();
  const history = useHistory();

  const registLog = (data) => {
    let result = _.findDeep(
      data,
      (item, key, parentValue, context) => item.id == history.location.pathname,
      {
        childrenPath: "items",
      }
    );

    if (result) {
      axios
        .post("/api/st/manager-connect-log/detail/regist", {
          mclSeq: "3", //로그인 데이터가 없어서 일단 3번 고정
          cont: `${result.parent.value} > ${result.value.value}`,
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };

  // useEffect(() => {
  //   fetch(`${process.env.PUBLIC_URL}/data/menu_lower.json`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       registLog(data);
  //     });

  //   return history.listen((location, type) => {
  //     let route = _.find(Routes, (item) => {
  //       return location == item.path;
  //     });

  //     beforeMounted(previousPath, location.pathname);
  //     previousPath = location.pathname;
  //   });
  // }, [history]);

  // const beforeMounted = (prev, next) => {
  //   _.forEach(Routes, (route) => {
  //     if (route.path == next) {
  //       if (route.cache && route.cache == true) {
  //         let cachedPage = _.find(route.cacheLocation, (item) => {
  //           return comparePath(item, prev);
  //         });

  //         if (!cachedPage) {
  //           dispatch(setStatusAction("reset"));
  //         } else {
  //           dispatch(setStatusAction("fetch"));
  //         }
  //       }
  //     }
  //   });
  // };

  // const comparePath = (path1, path2) => {
  //   if (path1.indexOf(":") > -1) {
  //     let arr1 = path1.split("/");
  //     let arr2 = path2.split("/");
  //     let isSame = true;

  //     for (let i = 0; i < arr1.length; i++) {
  //       if (arr1[i].indexOf(":") == -1) {
  //         if (arr1[i] != arr2[i]) {
  //           isSame = false;
  //         }
  //       }
  //     }

  //     return isSame;
  //   } else {
  //     return path1 == path2 ? true : false;
  //   }
  // };

  return <div />;
}
