import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#CF2D39",
    },
    secondary: {
      main: "#000",
    },
    secondary_2: {
      main: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
});

// theme = createTheme(theme, {
//     palette: {
//       info: {
//         main: theme.palette.secondary.main,
//       },
//     },
//   });

export default theme;
