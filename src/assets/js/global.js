import { withStyles } from "@material-ui/core";
import { Cookies } from "react-cookie";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "Theme";

function Global(theme) {
  let cookies = new Cookies();
  const { isLight } = useSelector((state) => state.theme);
  // const palette = isLight === "true" ? lightTheme.palette : darkTheme.palette;
  let palette;
  if (cookies.get("isLight")) {
    palette =
      cookies.get("isLight") === "true"
        ? lightTheme.palette
        : darkTheme.palette;
  } else {
    palette = lightTheme.palette;
  }

  const fontsize = "12px !important";
  const tableHeight = "36px !important";
  const tableLineHeight = "35px !important";

  const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.

    "@global": {
      /**************************************************************************************************
      color
      **************************************************************************************************/

      body: {
        "background-color": palette.background.main,
        color: palette.text.main,
        "& svg": {
          color: `${palette.text.main}`,
        },
      },

      ".color-black": {
        color: `${palette.text.black} !important`,
      },

      ".MuiCard-root": {
        overflow: "visible",
        background: palette.background.sub.tab01,
        color: palette.text.main,
      },

      ".color-primary": {
        color: palette.primary.main,
      },

      ".color-secondary": {
        color: palette.secondary.main,
      },

      ".color-info": {
        color: palette.info.main,
      },

      ".width-100": {
        width: "100% !important",
      },

      /**************************************************************************************************
      button
      **************************************************************************************************/

      ".menu-theme-button": {
        "font-family": "Rubik",
        height: "30px",
        padding: "0 10px",
        "font-size": "12px",
        "line-height": "30px",
        "text-transform": "none",
        border: "0",
        "border-radius": "4px",
        "box-shadow": "none",
        color: "#fff",
        "background-color": "#cf000e",
      },

      // 추가

      /**************************************************************************************************
      alert
      **************************************************************************************************/
      ".MuiAlert-root": {
        "margin-bottom": "20px !important",
        "font-size": fontsize,
        "& .MuiAlert-icon": {
          "font-size": "19px !important",
          padding: "3px 0 !important",
          "flex-direction": "column",
          "justify-content": "space-around",
        },
        "& .MuiAlert-message": {
          padding: "4px 0 !important",
        },
      },

      ".custom-tab-panel": {
        "& >div >div": {
          padding: "6px 0",
        },
      },

      /**************************************************************************************************
      button
      **************************************************************************************************/

      // "div + .MuiButton-root": {
      //   "margin-top": "10px !important",
      // },

      ".btn + .btn": {
        "margin-left": "8px",
      },
      ".MuiButton-root + .MuiButton-root": {
        "margin-left": "8px",
      },
      ".MuiButton-root": {
        height: "30px",
        "line-height": "30px",
        "font-size": "12px",
        padding: "0 10px",
        "text-transform": "none",
      },
      ".MuiButton-sizeSmall": {
        height: "28px",
        padding: "0 8px",
        "line-height": "28px",
      },
      ".MuiButton-outlinedPrimary": {
        "border-color": palette.primary.main,
      },

      ".MuiButton-outlinedSecondary": {
        "border-color": palette.secondary.main,
      },
      ".MuiButton-outlinedInfo": {
        "border-color": palette.info.main,
        color: palette.info.main,
        "&:hover": {
          "background-color": palette.info.outlinedHover,
        },
      },
      ".MuiButton-containedInfo": {
        //   borderColor: palette.info.main,
        "background-color": palette.info.main,
        color: palette.text.white,
        "&:hover": {
          "background-color": palette.info.containedHover,
        },
      },
      ".MuiButton-outlinedMuted": {
        "border-color": palette.muted.main,
        color: palette.text.sub.gray01,
      },
      ".MuiButton-containedMuted": {
        "background-color": palette.muted.main,
        color: palette.text.white,
      },
      ".MuiButton-outlinedDefault": {
        "border-color": palette.muted.main,
        color: palette.text.black,
      },
      ".btn-fixed": {
        padding: 0,
        width: "70px !important",
      },

      ".btn-link": {
        "text-decoration": "none",
        "&:hover,:visited,:active": {
          "text-decoration": "none !important",
        },
        "& +.btn-link": {
          "margin-left": "8px",
        },
      },
      ".btn-icon": {
        "min-width": "initial",
        width: "auto",
        height: "auto",
      },
      ".btn-icon-clip": {
        "padding-left": "17px",
        "&:after": {
          "background-image": `url(${
            process.env.PUBLIC_URL
          }/images/icon/icon-clip-orange.svg)`,
          width: "11px",
          height: "14px",
          left: 0,
        },
      },
      ".MuiButton-startIcon ": {
        "& .MuiIcon-root": {
          position: "relative",
          "& img": {
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
          },
        },
      },
      ".MuiButton-endIcon ": {
        "& .MuiIcon-root": {
          position: "relative",
          "& img": {
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
          },
        },
      },
      ".MuiButton-downloadIcon": {
        "min-width": "80px",
        "& .MuiButton-startIcon": {
          "margin-right": 0,
        },
      },
      ".rounded-wrap + .MuiButton-rounded": {
        "margin-top": "10px",
      },

      ".MuiButton-rounded": {
        height: "62px",
        padding: "0 45px",
        "font-size": "18px",
        "border-radius": "1000px",
      },

      ".MuiButton-text": {
        padding: 0,
        "&:hover": {
          "background-color": "transparent",
        },
        "& .MuiButton-startIcon": {
          "margin-right": "-8px",
        },
        "& .MuiButton-endIcon": {
          "margin-left": "-8px",
        },
      },

      ".MuiButtonGroup-grouped": {
        margin: "0 !important",
        padding: "0",
      },
      /**************************************************************************************************
      tab
      **************************************************************************************************/
      ".MuiTabs-root": {
        "& .MuiTabs-flexContainer": {
          "& .MuiTab-textColorPrimary": {
            color: palette.text.black,
            "&.Mui-selected": {
              color: palette.primary.main,
            },
          },
          "& .MuiTab-root": {
            padding: "0",
            "min-width": "100px",
            "font-size": "16px",
            "text-transform": "none",
            "&+.MuiTab-root": {
              "margin-left": "24px",
            },
          },

          "& + .MuiTabs-indicator": {
            // bottom: "5px",
            "border-radius": "10px",
            "background-color": palette.primary.main,
          },
          "& .MuiIconButton-root": {
            width: "20px",
            height: "20px",
            "margin-left": "12px",
            padding: 0,
            "& .MuiSvgIcon-root": {
              width: "100%",
              height: "100%",
            },
          },
        },
        // "& .MuiTabScrollButton-root.Mui-disabled": {
        // display: "none",
        // },

        // "& .MuiTab-root": {
        //   padding: "0",
        //   "min-width": "0",
        //   "font-size": "16px",
        //   "text-transform": "none",
        // },
      },
      "[role='tabpanel']": {
        "& >.MuiBox-root": {
          padding: "24px 0 0 0",
        },
      },
      /********************************************************************************************************************************************
      grid
      **************************************************************************************************/
      ".MuiGrid-root": {
        "& .MuiTableContainer-root": {
          "& .MuiTableHead-root": {
            "& .MuiTableCell-head": {
              color: palette.text.main,
              "border-bottom": `1px solid ${palette.line.border01}`,
              "&:after": {
                color: palette.line.border01,
              },
            },
          },
          "& .MuiTableBody-root": {
            "& .MuiTableCell-root": {
              color: palette.text.main,
              "border-bottom": `1px solid ${palette.line.border01}`,
              "& .MuiButton-text": {
                "& .MuiButton-label": {
                  color: palette.text.main,
                },
              },
            },
          },
        },
      },
      /********************************************************************************************************************************************
      form
      **************************************************************************************************/
      // radio,checkbox
      ".MuiButtonBase-root.MuiIconButton-root": {
        // color: palette.text.main,
        "&:hover": {
          background: "transparent !important",
        },
      },

      ".MuiFormGroup-row": {
        "& .MuiFormControlLabel-root": {
          "&:not(:last-of-type)": {
            "margin-right": "9px",
          },
        },
      },

      ".MuiFormGroup-root:not(.MuiFormGroup-row)": {
        "& .MuiFormControlLabel-root": {
          "&:not(:first-of-type)": {
            "margin-top": "9px",
          },
        },
      },

      ".MuiFormGroup-root": {
        "min-height": "30px",
        // "& .MuiFormControlLabel-root": {
        //   'min-height':'30px',
        //   "margin-left": 0,
        //   "margin-right": 0,

        //   "& .MuiButtonBase-root": {
        //     padding: "0 9px 0 0",
        //   },
        // },
      },

      ".custom-checkbox-row": {
        "&:not(:last-of-type)": {
          "margin-right": "9px",
        },
      },

      ".custom-checkbox-column": {
        width: "100%",
        "&:not(:first-of-type)": {
          "margin-top": "9px",
        },
      },

      ".MuiFormControlLabel-root": {
        "min-height": "30px",
        "margin-left": 0,
        "margin-right": 0,

        "& .MuiButtonBase-root": {
          padding: "0 9px 0 0 !important",
        },

        "& span": {
          "font-size": "12px",
        },

        "& .radio-icon": {
          display: "block",
          width: "20px",
          height: "20px",
          border: `solid 1px ${palette.line.gray01}`,
          "border-radius": "50%",
        },

        "& .radio-icon-checked": {
          position: "relative",
          display: "block",
          width: "20px",
          height: "20px",
          border: `solid 1px ${palette.primary.main}`,
          "border-radius": "50%",
          "background-color": palette.primary.main,
          "&:before": {
            content: '""',
            display: "block",
            width: "8px",
            height: "8px",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            "background-color": palette.background.white,
            "border-radius": "50%",
          },
        },
        "& .checkbox-icon": {
          display: "block",
          width: "20px",
          height: "20px",
          border: `solid 1px ${palette.line.gray01}`,
          "border-radius": "4px",
        },
        "& .checkbox-icon-checked": {
          position: "relative",
          display: "block",
          width: "20px",
          height: "20px",
          border: `solid 1px ${palette.primary.main}`,
          "border-radius": "4px",
          "background-color": palette.primary.main,
          "&:before": {
            content: '""',
            display: "block",
            width: "12px",
            height: "8.5px",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            "background-image": `url(${
              process.env.PUBLIC_URL
            }/images/icon/icon-check.svg)`,
            "background-repeat": "no-repeat",
            "background-size": "100% auto",
          },
        },
      },
      ".Mui-disabled": {
        "& .radio-icon": {
          "background-color": palette.background.gray02,
        },
        "& .radio-icon-checked": {
          "background-color": palette.background.gray01,
          "border-color": palette.line.gray01,
        },
        "& .checkbox-icon": {
          "background-color": palette.background.gray02,
          "border-color": palette.line.gray01,
        },
        "& .checkbox-icon-checked": {
          "background-color": palette.background.gray01,
          "border-color": palette.line.gray01,
        },
      },

      // autocomplete

      ".MuiAutocomplete-root": {
        position: "relative",
        // "padding-right": "28px",
        border: `solid 1px ${palette.line.border01}`,
        "border-radius": "4px",
        background: palette.background.sub.input,
        "& .MuiFormControl-root": {
          "min-height": "28px",
        },

        "& + p": {
          "margin-top": "3px",
        },

        "& .MuiInputBase-root": {
          "min-height": "28px",
        },
        "& .MuiAutocomplete-inputRoot": {
          // padding: "0 !important",
          position: "relative",

          "&:after": {
            content: '""',
            display: "block",
            width: "10px",
            height: "6px",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "10px",
            "background-image": `url(${
              process.env.PUBLIC_URL
            }/images/icon/icon-select-arrow.svg)`,
            "background-repeat": "no-repeat",
            "background-size": "100% auto",
          },
        },

        "& .MuiAutocomplete-tag": {
          background: palette.primary.main,
          color: palette.text.white,
          margin: "4px 0 4px 4px",
          height: "20px",
          "border-radius": "4px",
          "font-size": "12px",
          // transition: "none",

          "& .MuiChip-label": {
            "line-height": "20px",
          },

          "& .MuiChip-deleteIcon": {
            width: "16px",
            height: "16px",
            background: "transparent",
            color: "white",
          },
        },

        "& .MuiInputBase-input": {
          background: "transparent",
          "min-height": "28px",
          "line-height": "initial",
          border: "none",
          overflow: "hidden",
          "white-space": "nowrap",
          "text-overflow": "ellipsis",
          "line-height": "initial",
          "&::placeholder": {
            color: palette.text.sub.gray01,
          },
        },

        "& .MuiAutocomplete-endAdornment": {
          right: "25px",
          top: "50%",
          transform: "translateY(-50%)",

          "& .MuiSvgIcon-root": {
            color: palette.text.main,
          },
        },
      },

      ".MuiAutocomplete-root[aria-expanded='true']": {
        "background-color": palette.primary.main,
        "border-color": palette.primary.main,

        "& .MuiAutocomplete-tag": {
          background: "rgba(255,255,255,0.9)",
          color: palette.primary.main,

          "& .MuiChip-deleteIcon": {
            color: palette.primary.main,
          },
        },
        "& .MuiAutocomplete-endAdornment": {
          "& .MuiSvgIcon-root": {
            color: "white",
          },
        },

        "& .MuiAutocomplete-inputRoot": {
          "&:after": {
            "background-image": `url(${
              process.env.PUBLIC_URL
            }/images/icon/icon-select-arrow-active.svg)`,
          },
        },

        "& .MuiInputBase-root": {
          "& .MuiInputBase-input": {
            color: `${palette.text.white}`,
            "&::placeholder": {
              color: `${palette.text.white} !important`,
            },
          },
        },
      },

      ".MuiAutocomplete-popper": {
        // "transition-duration": "251ms, 167ms",

        "& .MuiAutocomplete-noOptions": {
          padding: "5px 12px",
          "font-size": "12px",
          // color: palette.text.main,
        },
      },

      ".MuiAutocomplete-listbox": {
        overflow: "overlay !important",

        " overflow-x": "hidden",
        "border-radius": "4px",
        // scrollbar 스타일
        "&::-webkit-scrollbar": {
          width: "16px",
        },
        "&::-webkit-scrollbar-thumb": {
          "border-radius": "9999px",
          "box-shadow": "inset 0 0 10px 10px rgba(0,0,0,0.1)",
          border: "solid 5px transparent",
        },
        "& .MuiAutocomplete-option": {
          padding: "5px 0",
          "font-size": "12px",
          height: "30px",
          "padding-left": "12px",
          "&:hover,:focus,:active": {
            "background-color": `${palette.primary.translucent} !important`,
          },
        },
        "& .MuiAutocomplete-option[data-focus='true']": {
          // "background-color": "transparent",
        },
        "& .MuiAutocomplete-option[aria-selected='true']": {
          "background-color": palette.primary.translucent,
          color: palette.primary.main,
        },
      },

      ".MuiAutocomplete-inputRoot": {
        "padding-right": "50px !important",
      },
      ".MuiAutocomplete-input": {
        padding: "0 50px 0 10px  !important",
      },

      ".MuiInputBase-root + .MuiInputBase-root": {
        "margin-left": "8px",
      },

      ".MuiInputBase-root + .custom-datepicker": {
        "margin-left": "8px",
      },

      ".MuiAutocomplete-root + .MuiInputBase-root": {
        "margin-left": "8px",
      },

      ".MuiInputBase-root + .MuiButton-root": {
        "margin-left": "8px",
      },

      ".custom-datepicker + .custom-datepicker": {
        "margin-left": "8px",
      },

      ".MuiFormLabel-root.MuiInputLabel-root": {
        display: "inline-block",
        color: palette.text.main,
        "font-size": "12px",
        "word-break": "break-all",
        // "margin-top": "10px",
      },
      ".MuiInputLabel-shrink": {
        position: "relative",
        transform: "none",
      },
      "& .MuiInputBase-input": {
        // height: "28px",
        // "line-height": "28px",
        // // padding: "0 10px",
        // padding: "0 10px",
        // "font-size": "12px",
        // border: `solid 1px ${palette.line.gray01}`,
        // "border-radius": "4px",
      },
      ".valid-confirm": {
        "padding-right": "35px !important",
        background: `url(${
          process.env.PUBLIC_URL
        }/images/icon/icon-check-secondary.svg) no-repeat center right 13px !important`,
      },
      ".MuiInput-input-rounded": {
        height: "62px !important",
        "border-radius": "1000px !important",
        "background-color": "rgba(255,255,255,0.5)",
        padding: "0 35px !important",
        border: "none !important",
        "font-size": "18px !important",
        color: palette.text.white,
        "&::placeholder": {
          color: "white ",
        },
      },

      ".MuiInputBase-input": {
        height: "28px",
        "line-height": "28px",
        padding: "0 10px",
        "font-size": "12px",
        border: `solid 1px ${palette.line.border01}`,
        color: palette.text.main,
        background: palette.background.sub.input,

        "border-radius": "4px",
        "&:focus": {
          "border-radius": "4px",
        },
        "&::placeholder": {
          color: palette.text.sub.gray01,
          opacity: "1 !important",
        },
      },

      ".MuiInputBase-input.Mui-disabled": {
        "background-color": palette.background.gray02,
        color: palette.text.sub.gray01,
      },

      ".form-table": {
        width: "100%",
        "& tr": {
          "& +tr": {
            "margin-top": "10px",
          },
          display: "flex",
          "& th": {
            display: "flex",
            width: "auto",
            flex: "1 0 150px",
            "& .MuiFormLabel-root": {
              "margin-top": "10px",
            },
            // "align-items": "center",
          },
          "& td": {
            flex: "1 1 100%",
            width: "100%",
            "& +th": {
              "margin-left": "50px",
            },
          },
        },
        // "& +Button": {
        //   "margin-top": "10px",
        // },
      },

      ".MuiFormControl-wrap": {
        "flex-direction": "row",
        "align-items": "center",

        "& label": {
          display: "inline-block",
          "font-weight": "400",

          // "margin-top": "8px",
        },
      },

      ".MuiFormControl-root": {
        "& +.rounded-wrap": {
          "margin-top": "10px",
        },

        // "& +.MuiFormControl-root": {
        //   "margin-left": "15px",
        // },

        "& .MuiBox-root": {
          "& .DatePicker__input": {
            "background-color": palette.background.sub.input,
            "border-color": palette.line.border01,
          },
          "& .MuiInputBase-root": {
            color: palette.text.main,
          },
          "& .MuiFormLabel-root": {
            color: palette.text.sub.sub01,
          },

          // "padding-right": "8px",
          // flex: "0 0 150px",
          "& + .MuiBox-root": {
            padding: "0 !important",
            flex: "1",
            width: "100%",
          },
        },

        "& .MuiInputLabel-formControl": {
          position: "relative",
          transform: "none",
        },
      },
      ".MuiFormHelperText-root": {
        color: "#cf000e !important",
      },
      ".Mui-required": {
        position: "relative",
        "&:after": {
          content: '""',
          display: "block",
          width: "4px",
          height: "4px",
          position: "absolute",
          right: "-8px",
          top: 0,
          background: `url(${
            process.env.PUBLIC_URL
          }/images/icon/red-dot.svg) no-repeat`,
          "background-size": "100% auto",
        },
      },
      ".MuiFormLabel-asterisk": {
        display: "none",
      },
      ".border-danger": {
        "border-color": "#cf000e !important",
      },
      // textarea
      ".MuiInputBase-multiline": {
        padding: 0,
        "& .MuiInputBase-inputMultiline": {
          padding: "0 10px !important",
        },
      },
      // select-box
      ".select-placeholder": {
        color: palette.text.sub.gray01,
      },
      ".MuiSelect-icon": {
        display: "none !important",
      },

      ".MuiSelect-root": {
        position: "relative",
        "line-height": "28px",
        "padding-right": "28px !important",
        "word-break": "break-all",
        background: palette.background.sub.input,
        "&:focus": {
          "background-color": "transparent",
        },
        "&:after": {
          content: '""',
          display: "block",
          width: "10px",
          height: "6px",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "10px",
          "background-image": `url(${
            process.env.PUBLIC_URL
          }/images/icon/icon-select-arrow.svg)`,
          "background-repeat": "no-repeat",
          "background-size": "100% auto",
        },
      },
      ".MuiSelect-root[aria-expanded='true']": {
        "background-color": palette.primary.main,
        "border-color": palette.primary.main,
        color: palette.text.white,
        "&:after": {
          "background-image": `url(${
            process.env.PUBLIC_URL
          }/images/icon/icon-select-arrow-active.svg)`,
        },
      },
      ".MuiSelect-root[aria-disabled='true']": {
        "&:after": {
          "background-image": `url(${
            process.env.PUBLIC_URL
          }/images/icon/icon-select-arrow-disabled.svg)`,
        },
      },
      ".MuiMenu-paper": {
        overflow: "overlay",
        " overflow-x": "hidden",
        "border-radius": "4px",
        "max-height": "35%",

        // scrollbar 스타일
        "&::-webkit-scrollbar": {
          width: "16px",
        },
        "&::-webkit-scrollbar-thumb": {
          "border-radius": "9999px",
          "box-shadow": "inset 0 0 10px 10px rgba(0,0,0,0.1)",
          border: "solid 5px transparent",
        },
        "& .MuiMenu-list": {
          padding: "5px 0",
          "& li": {
            "font-size": "12px",
            height: "30px",
            "padding-left": "12px",
            "&:hover,:focus,:active": {
              "background-color": palette.primary.translucent,
            },
          },
          "& li.Mui-selected": {
            "background-color": palette.primary.translucent,
            color: palette.primary.main,
          },
        },
      },
      /**************************************************************************************************
      datepicker(Datepicker theming을 위해 globalStyles에 작성)
      **************************************************************************************************/

      ".datepicker-group": {
        "& >div + div": {
          "margin-left": "8px",
        },
        display: "flex",
        "flex-direction": "row",
        "justify-content": "flex-start",

        "& .DatePicker": {
          position: "relative",
          // flex: "1 1 50%",

          "& + .DatePicker": {
            "margin-left": "8px",
          },
        },

        "& +Button": {
          "margin-top": "10px",
        },
      },

      ".react-datepicker-wrapper": {
        width: "auto",

        "& .react-datepicker__input-container": {
          display: "inline-block",
          // "min-width": "190px",
          height: "100%",
          position: "relative",
          "z-index": "initial !important",
          border: "none",
          // "&:hover,active,focus": {
          //   color: "initial",
          //   border: "none",
          // },

          "& input": {
            width: "100%",
            transition: "none",
            position: "relative",
            "z-index": "1",
            padding: "0 40px 0 10px",
            height: "30px",
            cursor: "pointer",
            color: palette.text.main,
            "line-height": "30px",
            "font-size": "12px",
            border: "solid 1px",
            "border-color": palette.line.border01,
            "border-radius": "4px",
            "text-align": "left",
            "box-sizing": "border-box",
            "background-image": `url(${
              process.env.PUBLIC_URL
            }/images/icon/icon-calendar.svg)`,
            "background-repeat": "no-repeat",
            "background-size": "15px auto",
            "background-position": "center right 8px",
            "background-color": palette.background.sub.input,
            "&::placeholder": {
              color: palette.text.sub.gray01,
            },
            "&:focus-visible": {
              outline: "none !important",
              color: palette.text.white,
              "background-color": palette.primary.main,
              "background-image": `url(${
                process.env.PUBLIC_URL
              }/images/icon/icon-calendar-active.svg)`,
              "border-color": palette.primary.main,

              "&::placeholder": {
                color: palette.text.white,
              },
            },
          },
        },
      },
      ".react-datepicker__tab-loop": {
        display: "inline-block",
      },
      ".react-datepicker__triangle": {
        display: "none",
      },
      ".react-datepicker-popper": {
        "z-index": "9999",
      },
      ".react-datepicker-popper[data-placement^=top]": {
        "padding-bottom": "5px !important",
      },
      ".react-datepicker-popper[data-placement^=bottom]": {
        "padding-top": "5px !important",
      },
      ".react-datepicker__year-wrapper": {
        "max-width": "210px !important",
      },
      ".react-datepicker__year--container": {
        "font-family": "Rubik !important",
        "& .react-datepicker-year-header": {
          "font-weight": "500",
        },
      },
      ".react-datepicker__navigation--previous, .react-datepicker__navigation--next": {
        top: "7px",
      },

      ".react-datepicker__year-text": {
        "line-height": "19px",
      },
      ".react-datepicker__year-text--selected": {
        background: palette.primary.main,
        "&:hover": {
          background: palette.primary.main,
        },
      },

      ".DatePicker": {
        height: "100%",
        position: "relative",
        "z-index": "initial !important",
        "&__input": {
          width: "100%",
          position: "relative",
          "z-index": "1",
          padding: "0 40px 0 10px",
          height: "30px",
          cursor: "pointer",
          color: palette.text.main,
          "line-height": "30px",
          "font-size": "12px",
          "border-color": palette.line.border01,
          "border-radius": "4px",
          "text-align": "left",
          "box-sizing": "border-box",
          "background-image": `url(${
            process.env.PUBLIC_URL
          }/images/icon/icon-calendar.svg)`,
          "background-repeat": "no-repeat",
          "background-size": "15px auto",
          "background-position": "center right 8px",
          "background-color": palette.background.sub.input,
          "&::placeholder": {
            color: palette.text.sub.gray01,
          },
          "&:focus-visible": {
            outline: "none !important",
            color: palette.text.white,
            "background-color": palette.primary.main,
            "background-image": `url(${
              process.env.PUBLIC_URL
            }/images/icon/icon-calendar-active.svg)`,
            "border-color": palette.primary.main,

            "&::placeholder": {
              color: palette.text.white,
            },
          },
        },

        "& .DatePicker__calendarContainer": {
          "z-index": "999 !important",
          top: "35px",
        },
        "& .-top": {
          "z-index": "999 !important",
          top: "initial !important",
          bottom: "35px !important",
        },

        "& .Calendar": {
          "min-height": "inherit !important",
          height: "307px",
          "background-color": palette.background.sub.input,
          "border-radius": "16px",
          "box-shadow":
            "0px 30px 52px rgba(0, 0, 0, 0.2), 0px 9.94853px 17.4853px rgba(0, 0, 0, 0.121367), 0px 4.13211px 7.2625px rgba(0, 0, 0, 0.0831038), 0px 1.4945px 2.6267px rgba(0, 0, 0, 0.0497377)",
        },

        "& .Calendar__header": {
          position: "relative",
          "z-index": "999",
          padding: "20px 30px 30px 30px",

          "& .Calendar__monthYearContainer": {
            position: "relative",
            "z-index": "999",
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              width: "24px",
              height: "24px",
              right: "-5px",
              top: "50%",
              transform: "translateY(-50%)",
              "background-image": `url(${
                process.env.PUBLIC_URL
              }/images/icon/icon-calendar-black.svg)`,
              "background-repeat": "no-repeat",
              "background-position": "center center",
              "background-size": "13px 13px",
              "border-radius": "50%",
              "z-index": "-1",
            },
          },

          "& .Calendar__monthYear": {
            "justify-content": "center",
            width: "100%",
            "text-align": "center",
            color: palette.text.main,
          },

          "& .Calendar__monthText": {
            position: "inherit",
            margin: "0",
            padding: "0",
            "font-size": "16px",
            "font-weight": "500",
            transform: "none !important",
            color: palette.text.main,
          },

          "& .Calendar__yearText": {
            position: "absolute",
            left: "0px",
            margin: 0,
            padding: 0,
            "font-size": "12px",
            "font-weight": "500",
            transform: "none !important",
            color: palette.text.main,
          },

          "& .Calendar__monthArrowWrapper": {
            position: "absolute",
            "z-index": "9999",
            "margin-top": "0 !important",

            "&.-right": {
              left: "85px",
              transform: "none",
              "& span": {
                // display: "block",
                width: "7px",
                height: "14px",
                "background-image": `url(${
                  process.env.PUBLIC_URL
                }/images/icon/icon-arrow-left.svg)`,
              },
            },

            "&.-left": {
              right: "85px",
              transform: "none",
              "& span": {
                // display: "block",
                width: "7px",
                height: "14px",
                "background-image": `url(${
                  process.env.PUBLIC_URL
                }/images/icon/icon-arrow-right.svg)`,
              },
            },
          },

          "& .-hidden": {
            "& +.Calendar__monthYearContainer": {
              "&:before": {
                "background-image": `url(${
                  process.env.PUBLIC_URL
                }/images/icon/icon-calendar-active-sm.svg)`,
                "background-color": palette.primary.main,
              },
            },
          },
        },

        "& .Calendar__weekDays": {
          padding: "0 30px",

          "& .Calendar__weekDay": {
            padding: "0px",
            width: "20px",
            color: palette.text.main,
            "text-decoration": "none",
            "word-break": "keep-all !important",
          },

          "& abbr[title=Sunday]": {
            color: palette.primary.main,
          },

          "& abbr[title=Saturday]": {
            color: palette.secondary.main,
          },
        },

        "& .Calendar__sectionWrapper": {
          "min-height": "inherit",
          height: "100%",
        },
        "& .Calendar__section": {
          padding: "0 20px 30px 20px",
        },
        "& .Calendar__weekRow": {
          "& .Calendar__day": {
            "&[aria-label*='Sunday']": {
              color: palette.primary.main,
            },

            "&[aria-label*='Saturday']": {
              color: palette.secondary.main,
            },

            "margin-bottom": "0 !important",
            "font-size": "12px",
            color: palette.text.main,

            "&:hover": {
              position: "relative",
              background: "none !important",
              color: `${palette.primary.main} !important`,

              "&:before": {
                content: '""',
                display: "block",
                width: "24px",
                height: "24px",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                "border-radius": "50%",
                "background-color": palette.primary.translucent,
                "z-index": -1,
              },
            },

            "&.-selected": {
              position: "relative",
              background: "none !important",
              color: palette.text.white,

              "&:before": {
                content: '""',
                display: "block",
                width: "24px",
                height: "24px",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                "border-radius": "50%",
                "background-color": palette.primary.main,
                "z-index": -1,
              },
            },
          },
        },

        "& .Calendar__monthSelector ": {
          "border-radius": "16px",
          "will-change": "inherit",
          "background-color": palette.background.sub.input,
          "& .Calendar__monthSelectorItem": {
            height: "26px",

            "& .Calendar__monthSelectorItemText": {
              height: "100%",
              padding: "0 6px",
              "font-size": "14px",
              "border-radius": "4px !important",
              color: palette.text.main,
              "&:hover": {
                color: palette.primary.main,
                "background-color": palette.primary.translucent,
              },
            },

            "&.-active button": {
              "background-color": `${palette.primary.main} !important`,
              color: palette.text.white,
              "&:hover": {
                color: `${palette.text.white}`,
              },
            },
          },
        },

        "& .Calendar__yearSelectorAnimationWrapper": {
          "border-radius": "16px",
          "& .Calendar__yearSelectorWrapper:before, & .Calendar__yearSelectorWrapper:after, & .Calendar__yearSelectorWrapper.-faded:before, & .Calendar__yearSelectorWrapper.-faded:after": {
            "z-index": "1",
            height: "30px",
            background: "transparent",
          },
          "& .Calendar__yearSelector": {
            "background-color": palette.background.sub.input,
            "& .Calendar__yearSelectorItem": {
              height: "26px",
              "& .Calendar__yearSelectorText": {
                position: "relative",
                "z-index": "9999 !important",
                padding: "0 6px",
                height: "100%",
                "font-size": "14px",
                "border-radius": "4px !important",

                "&:hover": {
                  color: palette.primary.main,
                  "background-color": `${
                    palette.primary.translucent
                  } !important`,
                },
              },
            },
          },

          "& .-active button": {
            "background-color": `${palette.primary.main} !important`,
            "&:hover": {
              color: `${palette.text.white}`,
            },
          },
        },

        "&__calendarArrow": {
          display: "none !important",
        },
      },

      /**************************************************************************************************
      table
      **************************************************************************************************/
      table: {
        width: "100%",
        "margin-bottom": "16px",
      },

      ".table": {
        "border-top": `solid 1px ${palette.line.border01}`,
        "text-align": "left",
        "word-break": "break-all",
        "table-layout": "fixed",
        "& >tbody": {
          "& >tr": {
            height: "43px",
            "border-bottom": `solid 1px ${palette.line.border01}`,

            "& >th": {
              // flex: "1 0 100%",
              width: "200px",
              "min-height": "43px",
              padding: "6px !important",
              "vertical-align": "top",
              background: palette.background.sub.formtitle,
            },

            "& >td": {
              "min-height": "43px",
              "vertical-align": "top",
              padding: "6px !important",
              "& .MuiBox-root": {
                "vertical-align": "top",
              },
            },
          },
        },
      },

      ".MuiTable-root": {
        border: `1px solid ${palette.line.border01}`,
        "border-left": "none",
        "border-right": "none",
        "border-radius": "0",
        // "table-layout": "fixed",
        "& tr": {
          "&:hover": {
            background: "rgba(0, 0, 0, 0.04)",
          },
        },

        "& .MuiTableHead-root": {
          "& .MuiTableRow-root": {
            background: palette.background.sub.formtitle,
          },

          "& .MuiTableCell-root": {
            "font-weight": "400",
            "border-color": palette.line.border01,
            "word-break": "break-all",
            "&:not(:first-of-type)": {
              "border-left": `solid 1px ${palette.line.border01}`,
            },
          },
        },

        "& .MuiTableBody-root": {
          "& .MuiTableRow-root": {
            transition: "height 2.5s ease, max-height 2.5s ease",
            "& .MuiTableCell-root": {
              "word-break": "break-all",
              "border-color": palette.line.border01,
              "&:not(:first-of-type)": {
                "border-left": `solid 1px ${palette.line.border01}`,
              },
              "&:only-of-type": {
                padding: "0",
              },
              "& >* ": {
                "word-break": "break-all",
              },
            },
          },
        },

        "& .nodata-wrap": {
          position: "relative",
          height: "88px",
          "text-align": "center",
          "line-height": "88px",
          "& > div": {
            position: "absolute",
            height: "100%",
          },
        },

        "& .MuiTableRow-root": {
          "& .MuiTableCell-root": {
            padding: "0 10px",
          },
        },
        "& .MuiTableCell-root": {
          "line-height": "32px",
          "& .MuiSvgIcon-root": {
            display: "block",
          },
        },
      },

      ".MuiDataGrid-root.MuiDataGrid-root": {
        border: `1px solid ${palette.line.border01}`,
        "border-left": "none",
        "border-right": "none",
        "border-radius": "0",

        "& .MuiDataGrid-main": {
          color: palette.text.main,
        },

        "& .MuiDataGrid-columnsContainer": {
          background: palette.background.sub.formtitle,
          "border-color": `${palette.line.border01}`,
        },

        "& .MuiDataGrid-row:last-of-type": {
          "& .MuiDataGrid-cell": {
            "border-bottom": "none",
          },
        },

        "& .MuiDataGrid-cell": {
          "border-color": `${palette.line.border01}`,
          "&:focus, &:focus-within": {
            outline: "none !important",
          },
        },

        "& .MuiDataGrid-cell:focus": {
          outline: "none !important",
          "& .MuiDataGrid-columnSeparator": {
            color: `${palette.line.border01}`,
          },
        },

        "& .MuiDataGrid-iconSeparator": {
          display: "none",
        },

        "& .MuiDataGrid-footerContainer": {
          display: "none !important",
        },
        "& .MuiDataGrid-columnHeader": {
          "& div": {
            "font-weight": "400",
          },
          "&:focus, &:focus-within": {
            outline: "none !important",
          },

          "&:not(:first-of-type)": {
            "border-left": `solid 1px ${palette.line.border01}`,
          },

          "& .MuiDataGrid-columnHeaderTitleContainer": {
            padding: "0",
          },
        },
        "& .MuiDataGrid-cell[role='cell']": {
          "&:not(:first-of-type)": {
            "border-left": `solid 1px ${palette.line.border01}`,
          },
        },
      },

      ".MuiPagination-root": {
        "& .MuiPagination-ul": {
          "& .MuiPaginationItem-sizeSmall": {
            color: palette.text.main,
            "&.Mui-selected": {
              color: "#fff",
            },
          },
        },
      },
      /**************************************************************************************************
      dialog
      **************************************************************************************************/
      ".MuiDialog-paper": {
        "background-color": palette.background.main,
        color: palette.text.main,
        "& form": {
          display: "flex",
          "flex-direction": "column",
          "overflow-y": "auto",
        },

        "& .MuiDialogTitle-root": {
          display: "flex",
          "align-items": "center",
          "justify-content": "space-between",
        },

        "& .MuiIconButton-root": {
          padding: 0,
        },

        "& .MuiDialogActions-root": {
          padding: "16px 24px",
        },
        "& .MuiButton-root": {
          // color: palette.text.main,
        },
      },
      /**************************************************************************************************
      treeItem
      **************************************************************************************************/
      ".MuiTreeView-root": {
        "& .MuiTreeItem-label": {
          background: "transparent !important",
        },
      },
      /**************************************************************************************************
      tooltip
      **************************************************************************************************/
      ".MuiTooltip-popper": {
        top: "-15px !important",
        "& .MuiTooltip-tooltip": {
          "font-size": "12px",
        },
      },

      ".MuiSkeleton-root": {
        position: "relative !important",
        "z-index": "99999 !important",
      },
    },
  })(() => null);

  return <GlobalCss />;
}
export default Global;
