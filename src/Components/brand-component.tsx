import { Link } from "react-router-dom";
import styled from "styled-components";
import { LearnMoreButton } from "./learn-more-button";

const Wrapper = styled.div`
  margin-top: 32px;
  padding-inline: 16px;
`;

const BrandComponentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 255.98px;
  height: 255.98px;

  &:before {
    display: block;
    background-color: white;
    border-radius: 16px;
    content: "";
    box-shadow: 0 14px 24px rgba(0, 0, 0, 0.06);
    position: absolute;
    inset: 0;
    z-index: 0;
    transition: transform 0.2s ease-out;
  }
  &:hover {
    &::before {
      transform: scale(1.1);
    }
  }
`;

const ImgWrapper = styled.div``;

const ImgLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 32px;
  z-index: 1;
`;

const Image = styled.img`
  width: 191.984px;
  height: 69.109px;
`;

export const BrandComponent = ({ image }: { image: string }) => {
  return (
    <Wrapper>
      <BrandComponentWrapper>
        <ImgLink>
          <ImgWrapper>
            <Image src={image} />
          </ImgWrapper>
        </ImgLink>
      </BrandComponentWrapper>
    </Wrapper>
  );
};
