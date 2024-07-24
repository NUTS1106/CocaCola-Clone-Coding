import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Router/Home.tsx";
import { Introduce } from "./Router/Introduce.tsx";
import ErrorPage from "./Components/router-error.tsx";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { MainLayout } from "./Router/MainLayout.tsx";
import { Navbar } from "./Components/navbar.tsx";

const router = createBrowserRouter([
  {
    path: "/CocaCola-Clone-Coding",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/CocaCola-Clone-Coding",
        element: <Home />,
      },
      {
        path: "/CocaCola-Clone-Coding/introduce",
        element: <Introduce />,
      },
    ],
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing:border-box;
  }
  body{
    font-family:700 14px / 17px Noto-regional, Noto-latin, TCCC-UnityText, sans-serif;
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);
