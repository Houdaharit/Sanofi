import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import CommuniqueDePresse from "./pages/CommuniqueDePresse.tsx";
import NotreEntreprise from "./pages/NotreEntreprise.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "media/communique de presse",
    element: <CommuniqueDePresse />,
  },
  {
    path: "notre entreprise",
    element: <NotreEntreprise />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
