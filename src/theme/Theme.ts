import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#35589A66",
      light: "#CDDEFF",
      dark: "#1A374D",
    },
    secondary: {
      main: "#5AFF3D",
      light: "#A3DA8D",
      dark: "#3FA796",
    },
    error: {
      main: "#9B0000",
    },
    warning: {
      main: "#EBE645",
    },
    info: {
      main: "#FC9918",
    },
    success: {
      main: "#548CFF",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#5AFF3D",
      disabled: "#757575",
    },
  },
  components: {
    MuiCardMedia: {
      styleOverrides: {
        img: {
          cursor: "pointer",
          transition: "transform 0.15s ease-in-out",
          "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        },
      },
    },
  },
});

export default theme;
