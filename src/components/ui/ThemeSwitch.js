import { Box, Button, IconButton, Tooltip } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { themeChange } from "../../redux/reducers/theme";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.text.main,
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export default function CustomizedSwitches() {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    selectTheme: cookies.get("isLight") === "true" ? false : true,
  });

  const handleChange = (flag) => {
    console.log("flag", flag);
    setState({ selectTheme: flag });

    // if (cookies.get("isLight") === "true") {
    //   cookies.set("isLight", "false", { path: "/" });
    // } else {
    //   cookies.set("isLight", "true", { path: "/" });
    // }
    console.log("state", state);
    if (state.selectTheme === false) {
      cookies.set("isLight", "false", { path: "/" });
      dispatch(themeChange(cookies.get("isLight")));
      return;
    } else if (state.selectTheme === true) {
      cookies.set("isLight", "true", { path: "/" });
      dispatch(themeChange(cookies.get("isLight")));
      return;
    }
    // dispatch(themeChange(cookies.get("isLight")));
    // window.location.reload();
  };

  return (
    <Box mt={0.5} mr={1}>
      {state.selectTheme ? (
        <Tooltip title="라이트 모드로 보기">
          <IconButton
            onClick={() => {
              handleChange(false);
            }}
          >
            <WbSunnyIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="다크 모드로 보기">
          <IconButton
            onClick={() => {
              handleChange(true);
            }}
          >
            <Brightness2Icon />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
}
