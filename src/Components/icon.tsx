import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import styled from "styled-components";
import { Link } from "react-router-dom";

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-inline: 16px;
  margin-top: 48px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconLink = styled(Link)`
  margin-left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 48px;
  height: 32px;
  width: 32px;
`;

export const Icon = () => {
  return (
    <IconsWrapper>
      <IconWrapper>
        <IconLink to="#">
          <FaYoutube style={{ marginLeft: `4px` }} size="16" color="#FFFFFF" />;
        </IconLink>
      </IconWrapper>
      <IconWrapper>
        <IconLink to="#">
          <FaXTwitter style={{ marginLeft: `4px` }} size="16" color="#FFFFFF" />
          ;
        </IconLink>
      </IconWrapper>
      <IconWrapper>
        <IconLink to="#">
          <FaInstagram
            style={{ marginLeft: `4px` }}
            size="16"
            color="#FFFFFF"
          />
          ;
        </IconLink>
      </IconWrapper>
      <IconWrapper>
        <IconLink to="#">
          <FaFacebookF
            style={{ marginLeft: `4px` }}
            size="16"
            color="#FFFFFF"
          />
          ;
        </IconLink>
      </IconWrapper>
    </IconsWrapper>
  );
};
