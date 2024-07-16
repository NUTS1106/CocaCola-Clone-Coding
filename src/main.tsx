import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Router/Home.tsx";
import { Introduce } from "./Router/Introduce.tsx";
import ErrorPage from "./Components/router-error.tsx";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Navbar } from "./Components/navbar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/introduce",
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

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Wrapper>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Wrapper>
  </React.StrictMode>
);
