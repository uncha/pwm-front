import { all, fork } from "redux-saga/effects";
import academyDBRegist from "./academy-db/regist";
import codeManagement from "./codeManagement";
import menuManagementRegist from "./menu-management/regist";
import paperRegistrationStatus from "./paper-registration-status";
import permissionManagement from "./permission-management/list";
import permissionManagementRegist from "./permission-management/regist";
import user from "./user";
import videoManagement from "./video-management";
import videoContentHistory from "./video-management/video-content-history";

export default function* rootSaga() {
  yield all([
    fork(user),
    fork(codeManagement),
    fork(videoManagement),
    fork(videoContentHistory),
    fork(paperRegistrationStatus),
    fork(academyDBRegist),
    fork(menuManagementRegist),
    fork(permissionManagement),
    fork(permissionManagementRegist),
  ]);
}
