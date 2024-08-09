import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavElement } from "./nav-element";
import logo from "../assets/cocacolaLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { NavbarCollapse } from "./navbar-collapse";

const Header = styled.header`
  background-color: white;
`;

const Wrapper = styled.div`
  @media screen and (max-width: 1200px) {
    margin: 0 24px;
  }
`;

const NavbarWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin: auto;
  background-color: white;

  @media screen and (max-width: 1200px) {
    justify-content: space-between;
    height: 72px;
    gap: 0;
  }
`;

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1200px) {
  }
`;

const NavUl = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  @media screen and (max-width: 1200px) {
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 149px;
  @media screen and (max-width: 1200px) {
    width: 125px;
  }
`;

const Logo = styled.img`
  width: 125px;
`;

const BrandLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin: 0 20px;
`;

const HamburgerButtonWrapper = styled.div``;

const HamburgerButton = styled(RxHamburgerMenu)`
  visibility: none;
  @media screen and (max-width: 1200px) {
    visibility: visible;
    cursor: pointer;
  }
`;

export const Navbar = () => {
  const [isLessThan1200, setIsLessThan1200] = useState(() => {
    if (window.innerWidth > 1200) return false;
    else return true;
  });
  const [onNavbarToggled, setOnNavbarToggled] = useState(true);
  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setIsLessThan1200(false);
    } else {
      setIsLessThan1200(true);
    }
  };
  const onClick = () => {
    setOnNavbarToggled(!onNavbarToggled);
  };

  useEffect(() => {
    if (isLessThan1200 === true) {
      setOnNavbarToggled(false);
    } else {
      setOnNavbarToggled(true);
    }
  }, [isLessThan1200]);

  useEffect(() => {
    if (isLessThan1200 && onNavbarToggled) {
      document.body.style.overflow = "hidden";
    } else {
      console.log("unset");
      document.body.style.overflow = "unset";
    }
  }, [isLessThan1200, onNavbarToggled]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Header>
      {isLessThan1200 && onNavbarToggled ? (
        <NavbarCollapse setOnNavbarToggled={setOnNavbarToggled} />
      ) : (
        <Wrapper>
          <NavbarWrapper>
            <LogoWrapper>
              <Link to="#">
                <Logo src={logo} alt="cocacola logo" />
              </Link>
            </LogoWrapper>
            {onNavbarToggled ? (
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
            ) : null}
            {isLessThan1200 ? (
              <HamburgerButtonWrapper>
                <HamburgerButton onClick={onClick} size={24} />
              </HamburgerButtonWrapper>
            ) : null}
          </NavbarWrapper>
        </Wrapper>
      )}
    </Header>
  );
};
