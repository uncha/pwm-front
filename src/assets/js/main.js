import { Cookies } from "react-cookie";
import { darkTheme, lightTheme } from "Theme";

function Main() {
  let cookies = new Cookies();

  // const palette =
  //   cookies.get("isLight") && cookies.get("isLight") === "true"
  //     ? lightTheme.palette
  //     : darkTheme.palette;

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

  return {
    "@global": {
      ".text-primary": {
        color: "#cf000e !important",
      },

      ".short-text": {
        overflow: "hidden",
        "white-space": "nowrap",
        "text-overflow": "ellipsis",
        "line-height": "initial",
      },

      /**************************************************************************************************
    layout
    **************************************************************************************************/
      ".App-header": {
        "& #sidebar": {
          "& .menu-wrapper": {
            "border-top": `solid 1px ${palette.line.border01}`,
            "border-bottom": `solid 1px ${palette.line.border01}`,
          },

          "& .top": {
            margin: "0 auto",
            padding: "10px 30px",
          },
          "& .depth-01": {
            padding: "0 30px",
            "& a": {
              color: palette.text.main,
              "text-decoration": "none",
            },

            "& >ul": {
              margin: "0 auto",
              display: "flex",
              "flex-direction": "row",
              "justify-content": "space-between",
              "font-size": "14px",

              "& >li": {
                padding: "10px 0",
                position: "relative",

                "& >a": {
                  display: "block",
                  position: "relative",
                  "& .MuiSvgIcon-root": {
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                  },
                },
              },
              "&:first-child": {
                padding: 0,
              },
            },
            "& .active-menu": {
              color: `${palette.primary.main} !important`,
            },
          },

          "& .depth-02": {
            "min-width": "180px",
            position: "absolute",
            "z-index": "999",
            top: "40px",
            left: "0px",
            background: palette.background.sub.tab01,
            "border-radius": "2px",
            "box-shadow": "2px 2px 5px rgb(0 0 0 / 20%)",

            "& ul": {
              padding: "4px 0",
              "& >li": {
                padding: "7px 10px",
              },
            },
          },
          "& .depth-02-right": {
            left: "initial",
            right: "0px",
          },
        },
      },

      ".App-contents": {},

      /**************************************************************************************************
    form
    **************************************************************************************************/
      ".inline-form": {
        width: "100%",
        "justify-content": "space-between",
      },

      ".total-count-wrap": {
        "& span+span": {
          "padding-left": "5px",
        },
      },

      ".inner-form-wrap": {
        "& .MuiFormLabel-root": {
          "padding-right": "8px",
        },
        "&>div": {
          "&:not(:first-of-type)": {
            "margin-left": "5px",
          },
        },
      },
      // input

      ".custom-input-form": {
        "font-size": fontsize,

        "& h2": {
          "font-size": "18px",
        },

        "& table": {
          "margin-bottom": "0",
        },
        "& .MuiDialogContent-root": {
          "& h3": {
            "font-size": "14px !important",
            "font-weight": "bold",
            "padding-bottom": "10px",
          },
        },
      },

      ".input-form": {
        "& +.input-form": {
          "margin-top": "10px",
        },
      },
      ".upload-file-wrap+.upload-file-wrap": {
        "margin-top": "10px",
      },

      ".upload-file": {
        display: "inline-flex",

        "& .upload-file-input": {
          position: "relative",

          "& .MuiInputBase-input": {
            "padding-right": "28px !important",
          },
        },

        "& .upload-file-input + div": {
          "margin-left": "16px",
        },

        "& .btn-file-remove": {
          height: "100%",
          position: "absolute",
          right: "8px",
          top: "0",
          "z-index": "10",

          "& .MuiSvgIcon-root": {
            height: "100%",
            "line-height": "30px",
          },
        },
      },

      //checkbox
      ".custom-checkbox-group": {
        "& .MuiFormControlLabel-root": {
          margin: "0 !important",
          padding: "5px",
        },

        "& .MuiButtonBase-root": {
          display: "none",
        },

        "& .MuiTypography-root": {
          width: "70px",
          height: "30px",
          padding: "0 10px",
          background: palette.muted.main,
          "text-align": "center",
          "line-height": "30px",
          "border-radius": "4px",
          color: "white !important",
          transition: "0.2s ease",
        },
        "& .Mui-checked": {
          "& +.MuiTypography-root": {
            background: palette.primary.main,
          },
        },
      },

      ".disabled-datepicker": {
        "& input": {
          position: "relative",
          padding: "0 40px 0 10px",
          height: "30px",
          color: palette.text.main,
          "line-height": "30px",
          "font-size": "12px",
          "letter-spacing": "0px",
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

      ".custom-datepicker + span": {
        padding: "0 4px",
      },

      ".year-picker + span": {
        padding: "0 4px",
      },

      ".disabled-datepicker + span": {
        padding: "0 4px",
      },

      ".custom-autocomplete": {
        // display: "flex",
        // "flex-direction": "row",
        // "align-items": "center",
        // position: "relative",
        // "padding-right": "28px",
        // border: `solid 1px ${palette.line.border01}`,
        // "border-radius": "4px",
        // background: palette.background.sub.input,
        "&:after": {
          display: "none !important",
        },
      },
      /**************************************************************************************************
      table
    **************************************************************************************************/
      ".table": {
        "& th": {
          "& .MuiFormLabel-root.MuiInputLabel-root": {
            "margin-top": "10px",
          },
        },
      },

      ".MuiDataGrid-root.MuiDataGrid-root": {
        "& .nodata-wrap": {
          position: "relative",
          top: "64px",
          "text-align": "center",
        },

        "& .MuiDataGrid-main": {
          "& .nodata-wrap +div +div": {
            height: "100px !important",
            "& .MuiDataGrid-windowContainer": {
              height: "100% !important",
            },
          },
        },
        "& .MuiCheckbox-root": {
          padding: "0 !important",
        },
      },

      ".nocolumns-wrap": {
        height: "64px",
        "line-height": "64px",
        "font-size": "14px",
        "text-align": "center",
      },

      ".bordered-lr": {
        "border-left": `1px solid ${palette.line.border01} !important`,
        "border-right": `1px solid ${palette.line.border01} !important`,
      },

      ".bottom-area": {
        display: "flex",
        "align-items": "center",
        "justify-content": "flex-end",

        "& .MuiBox-root": {
          width: "100%",
          flex: 1,
        },
      },

      ".flex-area": {
        display: "flex",
        "align-items": "center",
        "justify-content": "flex-start",
        "&:not:(:first-child)": {
          "margin-left": "8px",
        },

        // "& .MuiBox-root": {
        //   width: "100%",
        //   flex: 1,
        // },
      },

      /**************************************************************************************************
    alert dialog
    **************************************************************************************************/
      ".alert-dialog": {
        textAlign: "center",

        "& .MuiPaper-root": {
          width: "400px",
        },

        "& .MuiDialogTitle-root": {},

        "& .MuiDialogContent-root": {
          border: "none",
          fontSize: "14px",
        },

        "& .MuiDialogActions-root": {
          justifyContent: "center",
          paddingBottom: "20px",
        },
      },

      ".title": {
        "margin-bottom": "10px",
      },
      /**************************************************************************************************
    table
    **************************************************************************************************/
      ".custom-popper": {
        // width: "400px",
        "border-radius": "4px",
        background: palette.background.main,
        "box-shadow":
          "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        "& .popper-header": {
          padding: "16px 24px",
          display: "flex",
          "align-items": "center",
          "justify-content": "space-between",

          "& .MuiIconButton-root": {
            padding: 0,
          },
        },
        "& .popper-contents": {
          "border-top": `solid 1px ${palette.line.gray01}`,
          "border-bottom": `solid 1px ${palette.line.gray01}`,
          padding: "16px 24px",
        },
        "& .popper-footer": {
          padding: "16px 24px",
          "text-align": "right",
        },
      },

      ".selected": {
        "background-color": "rgba(207, 0, 14, 0.08) !important",
      },

      ".selectable": {
        "& .MuiDataGrid-row, .MuiTableRow-root": {
          cursor: "pointer",
        },
      },

      ".table-sort-btn": {
        "min-width": "initial !important",
        "padding-right": "20px !important",
        "font-size": "14px !important",
        position: "relative",
        "z-index": "999",
        "&:before": {
          content: "''",
          position: "absolute",
          top: "50%",
          right: "6px",
          width: 0,
          height: 0,
          transform: "translateY(-7px)",
          "border-left": "3px solid transparent",
          "border-right": "3px solid transparent",
          "border-bottom": "4px solid rgba(0, 0, 0, 0.4)",
        },

        "&:after": {
          content: "''",
          position: "absolute",
          top: "50%",
          right: "6px",
          width: 0,
          height: 0,
          transform: "translateY(1px)",
          "border-left": "3px solid transparent",
          "border-right": "3px solid transparent",
          "border-top": "4px solid rgba(0, 0, 0, 0.4)",
        },
      },
      ".sort-up": {
        "&:before": {
          "border-bottom": `4px solid ${palette.text.main}`,
        },
      },
      ".sort-down": {
        "&:after": {
          "border-top": `4px solid ${palette.text.main}`,
        },
      },
      ".organization-modal": {
        "& .MuiDialog-paperScrollPaper": {
          "min-height": "calc(100% - 64px)",
        },

        "& .MuiDialogTitle-root + .MuiBox-root": {
          "border-bottom": "solid 1px rgba(0, 0, 0, 0.12)",
        },

        "& .MuiDialogContent-root": {
          "overflow-y": "hidden",
          "& .MuiGrid-root": {
            height: "calc(100vh - 220px)",
          },

          "& .MuiGrid-item": {
            "&:first-of-type": {
              position: "relative",
            },

            "overflow-y": "auto",
            "& +.MuiGrid-item": {
              "padding-left": "20px",
            },

            "& .nodata": {
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              "font-size": "14px",
            },
          },
          "& .MuiGrid-item + .MuiGrid-item": {
            "& .close-category": {
              position: "absolute",
              right: "70px",
              "z-index": "999",
            },
          },
        },
      },
    },
  };
}

export default Main;
