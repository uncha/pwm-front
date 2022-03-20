import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
  InputLabel,
  makeStyles,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { decodeToken } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction, setUserInfoAction } from "redux/reducers/user";

const useStyles = makeStyles((theme) => ({
  loginWrap: {
    width: "100%",
    maxWidth: "500px",
    fontSize: "12px",
    margin: "0 auto",
  },
}));
// test
export default function login(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = useState({ open: false, type: null });
  const {
    userInfo,
    loginFail,
    loginFailReason,
    loginSuccess,
    loginData,
    loginResponseData,
  } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback((data) => {
    dispatch(loginRequestAction(data));
  });

  const handleOpenAlert = (type) => {
    setOpenAlert({ open: true, type: type });
  };

  const handleCloseAlert = () => {
    setOpenAlert({ ...openAlert, open: false });
  };

  useEffect(() => {
    if (loginSuccess) {
      window.localStorage.setItem(
        "X-AUTH-TOKEN-ADMIN",
        `${loginResponseData.tokenType} ${loginResponseData.accessToken}`
      );

      window.localStorage.setItem(
        "X-REFRESH-TOKEN-ADMIN",
        `${loginResponseData.refreshToken}`
      );

      const myDecodedToken = decodeToken(loginResponseData.accessToken);
      console.log("myDecodedToken3: ", myDecodedToken);
      dispatch(setUserInfoAction(myDecodedToken));

      axios.defaults.headers.Authorization = `${loginResponseData.tokenType} ${
        loginResponseData.accessToken
      }`;

      props.history.push("/");
    }
  }, [loginSuccess]);

  useEffect(() => {
    if (loginFail) {
      handleOpenAlert("loginFail");
    }
  }, [loginFail]);

  return (
    <div className={classes.loginWrap}>
      <Box fontSize="h6.fontSize" mt={6}>
        LOGIN
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">
                <InputLabel required htmlFor="username">
                  아이디
                </InputLabel>
              </th>
              <td>
                <TextField
                  id="username"
                  fullWidth
                  defaultValue={"secho@seegene.com"}
                  {...register("username", { required: true })}
                />

                {errors.username?.type === "required" && (
                  <FormHelperText>아이디를 입력해 주세요</FormHelperText>
                )}
              </td>
            </tr>
            <tr>
              <th scope="row">
                <InputLabel required htmlFor="password">
                  비밀번호
                </InputLabel>
              </th>
              <td>
                <TextField
                  id="password"
                  fullWidth
                  {...register("password", { required: true })}
                  type="password"
                  defaultValue={"1111"}
                />

                {errors.password?.type === "required" && (
                  <FormHelperText>비밀번호를 입력해 주세요</FormHelperText>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <Button fullWidth variant="contained" color="primary" type="submit">
          로그인
        </Button>
      </form>

      <Dialog
        id="alert-dialog"
        fullWidth={true}
        open={openAlert.open}
        onClose={handleCloseAlert}
        className="alert-dialog"
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitle id="customized-dialog-title">알림</DialogTitle>
        <DialogContent dividers>{loginFailReason}</DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={handleCloseAlert}
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
