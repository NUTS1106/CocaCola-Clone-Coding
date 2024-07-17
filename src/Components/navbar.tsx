import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { NavElement } from "./nav-element";
import logo from "../assets/cocacolaLogo.png";

const NavbarWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin: auto;
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
  align-items: center;
`;

const Logo = styled.img`
  width: 125px;
  height: 20px;
`;

const BrandLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin: 0 20px;
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
            <BrandLink to="#">Brands</BrandLink>
            <NavElement
              menuString="Our Company"
              subMenuStringOne="Coca-Cola Company"
              subMenuStringTwo="Since 1886"
              subMenuUrlOne={"#"}
              subMenuUrlTwo={"#"}
            />
            <NavElement
              menuString="Discover"
              subMenuStringOne="Brand Story"
              subMenuStringTwo="Original"
              subMenuUrlOne={"#"}
              subMenuUrlTwo={"#"}
            />
            <NavElement
              menuString="Impact"
              subMenuStringOne="Sustainability"
              subMenuStringTwo="Social"
              subMenuUrlOne={"#"}
              subMenuUrlTwo={"#"}
            />
          </NavUl>
        </Nav>
      </NavbarWrapper>
      <Outlet />
    </>
  );
};
