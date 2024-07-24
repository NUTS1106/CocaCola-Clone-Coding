import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/navbar";
import { Footer } from "../Components/footer";
import styled from "styled-components";

const MainLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #eeeeee;
`;

export const MainLayout = () => {
  return (
    <MainLayoutWrapper>
      <Navbar />
      <Outlet />
      <Footer />
    </MainLayoutWrapper>
  );
};
