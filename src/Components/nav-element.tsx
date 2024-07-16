import { useState } from "react";
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
    transition: transform 0.3s ease-in-out;
  }

  &:not(:hover) {
    &::after {
      transform: rotate(0) translateY();
    }
  }

  &:hover {
    &::after {
      transform: rotate(90deg);
    }
  }
`;

const StringWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:after {
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
    &::after {
      transform: scale(0) translateY(-3px);
    }
  }

  &:hover {
    &::after {
      transform: scale(1) translateY(-3px);
    }
  }
`;

const String = styled.p`
  font-weight: bold;
  font-size: 15px;
`;

export const NavElement = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    console.log("Hovered");
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    console.log("Hovered");
    setIsHovered(false);
  };
  return (
    <ButtonWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StringWrapper>
        <String>Our Company</String>
      </StringWrapper>
    </ButtonWrapper>
  );
};
