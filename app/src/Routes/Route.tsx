import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "../Pages/Home/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const theme = createTheme({
  typography: {
    fontFamily: "'Sofia Sans Condensed', 'sans-serif'",
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <RouterProvider router={Route} />
    </React.StrictMode>
  </ThemeProvider>
);

export default Route;
