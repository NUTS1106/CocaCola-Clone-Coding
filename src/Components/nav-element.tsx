import { act, useState } from "react";
import { Link, To } from "react-router-dom";
import styled from "styled-components";

const ButtonWrapper = styled.li`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0px 20px;
  gap: 8px;

  &:after {
    content: ">";
    font-size: 24px;
    margin-bottom: 5px;
    transition: transform 0.3s ease-in-out;
  }

  &:not(:hover) {
    &::after {
      transform: rotate(0);
    }
  }

  &:hover {
    &::after {
      transform: rotate(90deg) translateX(5px);
    }
  }

  &:before {
    position: absolute;
    content: "";
    left: 0;
    top: 100%;
    width: 100%;
    height: 3px;
    background-color: black;
    transition: transform 0.3s;
  }

  &:not(:hover) {
    &::before {
      transform: scale(0) translateY(-3px);
    }
  }

  &:hover {
    &::before {
      transform: scale(1) translateY(-3px);
    }
  }
`;

const StringWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const String = styled.p`
  font-weight: bold;
  font-size: 15px;
`;

const SubMenu = styled.ul`
  width: max-content;
  height: auto;
  background-color: white;
  position: absolute;
  top: 100%;
  left: -20px;
  padding: 32px;
  :first-child {
    margin-bottom: 8px;
  }
`;

const MenuElement = styled.li`
  position: relative;
  z-index: 1;
  font-size: 12px;
  font-weight: 700px;
  letter-spacing: 1px;
`;

const SubMenuLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:after {
    visibility: hidden;
    content: ">";
    font-size: 20px;
    margin-left: 5px;
  }

  &:hover {
    font-weight: bold;
    &::after {
      visibility: visible;
    }
  }
`;

export const NavElement = ({
  menuString,
  subMenuStringOne,
  subMenuStringTwo,
  subMenuUrlOne,
  subMenuUrlTwo,
}: {
  menuString: String;
  subMenuStringOne: String;
  subMenuStringTwo: String;
  subMenuUrlOne: To;
  subMenuUrlTwo: To;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <ButtonWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StringWrapper>
        <String>{menuString}</String>
      </StringWrapper>
      {isHovered ? (
        <SubMenu>
          <MenuElement>
            <SubMenuLink to={subMenuUrlOne} title="a">
              {subMenuStringOne}
            </SubMenuLink>
          </MenuElement>
          <MenuElement>
            <SubMenuLink to={subMenuUrlTwo} title="a">
              {subMenuStringTwo}
            </SubMenuLink>
          </MenuElement>
        </SubMenu>
      ) : null}
    </ButtonWrapper>
  );
};
