import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import Authprovider from "./providers/Authprovider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Authprovider>
    <RouterProvider router={router}></RouterProvider>
  </Authprovider>
);
