import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff",
      contrastText: "#424242",
    },
    secondary: {
      main: "#616161",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#424242",
      secondary: "#6d6d6d",
    },
    background: {
      default: "#ffffff",
      paper: "#fafafa",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
