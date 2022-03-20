import { combineReducers } from "redux";
import academyDBRegist from "./academy-db/regist";
import businessProgress from "./business-progress";
import cachedStatus from "./cachedStatus";
import codeManagement from "./codeManagement";
import countrySpecificDetails from "./country-specific-details";
import downloadHistory from "./download-history";
import menuManagementRegist from "./menu-management/regist";
import paperRegistrationStatus from "./paper-registration-status";
import permissionManagement from "./permission-management/list";
import permissionManagementRegist from "./permission-management/regist";
import submitStatus from "./submit-status";
import theme from "./theme";
import user from "./user";
import videoManagement from "./video-management";
import videoContentHistory from "./video-management/video-content-history";

const rootReducer = combineReducers({
  user,
  theme,
  codeManagement,
  cachedStatus,
  videoManagement,
  videoContentHistory,
  submitStatus,
  businessProgress,
  countrySpecificDetails,
  academyDBRegist,
  downloadHistory,
  paperRegistrationStatus,
  menuManagementRegist,
  permissionManagement,
  permissionManagementRegist,
});

export default rootReducer;
