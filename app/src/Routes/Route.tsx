import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Heroes from "../Pages/Heroes/Heroes";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/herois",
    element: <Heroes />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={Route} />
  </React.StrictMode>
);

export default Route;
