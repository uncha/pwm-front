import { createTheme } from "@material-ui/core/styles";

const lightTheme = createTheme({
  palette: {
    background: {
      gray01: "#cccccc",
      gray02: "#eeeeee",
      black: "#000",
      white: "#fff",
      main: "#fff",
      sub: {
        tab01: "#fff",
        border01: "#bac9d1",
        formtitle: "#f2f4f5",
        gray01: "#9c9c9c",
        input: "#fff",
      },
    },

    primary: {
      main: "#cf000e",
      translucent: "rgba(207, 0, 14, 0.05)",
      // contrastText: "#000", 반전컬러 ex) contained버튼의 글씨 색상
    },
    secondary: {
      main: "#333333",
    },
    info: {
      main: "#FFB930",
      containedHover: "#e2a222",
      outlinedHover: "rgba(255, 185, 48, 0.04)",
    },
    muted: {
      main: "#CCCCCC",
    },
    text: {
      main: "#000",
      black: "#000",
      white: "#fff",
      sub: {
        gray01: "#9C9C9C",
        sub01: "#000",
      },
    },
    line: {
      gray01: "#cccccc",
      gray02: "#eeeeee",
      border01: "#bac9d1",
    },
  },

  typography: {
    fontFamily: ["Rubik", "inherit"],
  },

  props: {
    MuiButtonBase: {
      disableRipple: true,
      // disableFocusRipple: true,
      disablefocusripple: "true",
    },
    MuiButton: {
      disableRipple: true,
      disableElevation: true,
    },
    MuiInput: {
      disableripple: "true",
      disableUnderline: true,
      autoComplete: "off",
    },
    MuiInputLabel: {
      shrink: true,
      focused: false,
    },
    MuiRadio: {},
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          // "font-family": "Rubik",
          "font-size": "12px",
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    background: {
      gray01: "#cccccc",
      gray02: "#eeeeee",
      black: "#000",
      white: "#fff",
      main: "#252b31",
      sub: {
        tab01: "#333942",
        border01: "#252b31",
        formtitle: "#1f252a",
        input: "#30353b",
        gray01: "#9c9c9c",
      },
    },

    primary: {
      main: "#cf000e",
      translucent: "rgba(0, 0, 0, 0.05)",
      // contrastText: "#000", 반전컬러 ex) contained버튼의 글씨 색상
    },
    secondary: {
      main: "#dcdcdc",
    },
    info: {
      main: "#FFB930",
      containedHover: "#e2a222",
      outlinedHover: "rgba(255, 185, 48, 0.04)",
    },
    muted: {
      main: "#CCCCCC",
    },
    text: {
      main: "#fff",
      black: "#000",
      white: "#fff",
      sub: {
        gray01: "#9C9C9C",
        sub01: "#999",
      },
    },
    line: {
      gray01: "#cccccc",
      gray02: "#eeeeee",
      border01: "#394148",
    },
  },

  typography: {
    fontFamily: ["Rubik", "inherit"],
  },

  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableRipple: true,
      disableElevation: true,
    },
    MuiInput: {
      disableRipple: true,
      disableUnderline: true,
      autoComplete: "off",
    },
    MuiInputLabel: {
      shrink: true,
      focused: false,
    },
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          // "font-family": "Rubik",
          "font-size": "12px",
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
