import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { NavElement } from "./nav-element";
import logo from "../assets/cocacolaLogo.png";

const NavbarWrapper = styled.div`
  width: 1280px;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const Nav = styled.nav`
  width: 100%;
  height: 100%;
`;

const NavUl = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
`;

const Logo = styled.img`
  width: 125px;
  height: 20px;
`;

const BrandLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

export const Navbar = () => {
  return (
    <>
      <NavbarWrapper>
        <Link to="#">
          <Logo src={logo} alt="cocacola logo" />
        </Link>
        <Nav>
          <NavUl>
            <Brand>
              <BrandLink to="/">Brands</BrandLink>
            </Brand>
            <NavElement />
            <NavElement />
            <NavElement />
          </NavUl>
        </Nav>
      </NavbarWrapper>
      <Outlet />
    </>
  );
};
