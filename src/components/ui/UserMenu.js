import { Avatar, Button, makeStyles, Popover } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    "& .logoutButton": {
      width: "35px",
      height: "35px",
      "& .MuiAvatar-root": {
        width: "35px",
        height: "35px",
      },
    },
  },
  paperContainer: {
    "& .MuiButton-root": {
      background: "transparent",
      "& span": {
        "text-decoration": "underline",
      },
    },
  },
}));

export default function UserMenu({ props }) {
  const classes = useStyles();
  const { userInfo, loginFail, loginFailReason } = useSelector(
    (state) => state.user
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleLogout = () => {
    axios.get(`/api/auth/logout`).then((res) => {
      setOpenModal(false);
      window.localStorage.removeItem("X-AUTH-TOKEN");
      window.localStorage.removeItem("X-REFRESH-TOKEN");
      window.location.href = "/login";
    });
  };

  return (
    <div>
      {userInfo && (
        <>
          <div className={classes.container}>
            <Button
              className="logoutButton"
              onClick={(e) => {
                handleClick(e);
              }}
            >
              <Avatar />
            </Button>
          </div>
          <Popover
            className={classes.paperContainer}
            open={openModal}
            anchorEl={anchorEl}
            onClose={handleCloseModal}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <Button color="primary" onClick={handleLogout}>
              로그아웃
            </Button>
          </Popover>
        </>
      )}
    </div>
  );
}
