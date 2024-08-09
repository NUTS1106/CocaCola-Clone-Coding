import styled from "styled-components";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const LocationComponentWrapper = styled(Link)`
  border-radius: 50px;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 24px;
  margin-right: 16px;
`;

const Country = styled.p`
  text-decoration: none;
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 1px;
`;

export const LocationComponent = () => {
  return (
    <LocationComponentWrapper to="#">
      <CiLocationOn
        style={{ marginInlineEnd: `8px` }}
        size="24"
        color="#FFFFFF"
      />
      <Country>한국</Country>
    </LocationComponentWrapper>
  );
};
