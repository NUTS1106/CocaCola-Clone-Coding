import styled from "styled-components";
import { LocationComponent } from "./location-component";
import { SetStateAction, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const NavbarCollapseWrapper = styled.div`
  z-index: 3;
  height: 100vh;
`;

const CloseButton = styled.div``;

const Contents = styled.div``;

export const NavbarCollapse = ({
  setOnNavbarToggled,
}: {
  setOnNavbarToggled: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const onCloseCollapse = () => {
    setOnNavbarToggled(false);
  };
  return (
    <NavbarCollapseWrapper>
      <CloseButton>
        <IoClose onClick={onCloseCollapse} size={24} />
      </CloseButton>

      <Contents></Contents>
      <hr />
      <LocationComponent />
    </NavbarCollapseWrapper>
  );
};
