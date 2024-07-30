import styled from "styled-components";
import { BrandComponent } from "./brand-component";
import image from "../assets/brand-logo.jpg";
import { LearnMoreButton } from "./learn-more-button";

const images = [image, image, image, image, image, image];

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-inline: -16px;
`;

const BrandWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-inline: auto;
  width: 75%;
  margin-bottom: 32px;
`;

const BrandString = styled.h1`
  margin-top: 120px;
  font-size: 38px;
  line-height: 48px;
  font-weight: bold;
`;

export const Brand = () => {
  return (
    <Wrapper>
      <BrandString>브랜드 살펴보기</BrandString>
      <BrandWrapper>
        {images.map((image, index) => (
          <BrandComponent key={index} image={image} />
        ))}
      </BrandWrapper>
      <LearnMoreButton string="모두 보기" />
    </Wrapper>
  );
};
