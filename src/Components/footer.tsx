import styled from "styled-components";
import { LocationComponent } from "./location-component";
import image from "../assets/cocacolaWhiteLogo.svg";
import { Link } from "react-router-dom";
import { FooterMiddleComponent } from "./footer-middle-component";
import { FaYoutube } from "react-icons/fa6";
import { Icon } from "./icon.tsx";

const Wrapper = styled.footer`
  margin-top: 120px;
  background-color: black;
`;

const FooterComponent = styled.div`
  width: 100%;
  margin-inline: auto;
  max-width: 1120px;
`;

const FooterWrapper = styled.div`
  padding: 72px 0 96px;
  margin-inline: -16px;
`;

const TopFooterComponent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 48px;
`;

const MiddleFooterComponent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 48px;
`;

const LowerFooterComponent = styled.div``;

const LogoWrapper = styled.div`
  padding: 0 16px;
`;
const FooterLogo = styled.img`
  width: 249px;
  height: 40px;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 0 75%;
`;

const StringWrapper = styled.div`
  margin-top: 48px;
  padding-inline: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Content = styled.p`
  color: white;
`;

export const Footer = () => {
  return (
    <Wrapper>
      <FooterComponent>
        <FooterWrapper>
          <TopFooterComponent>
            <LogoWrapper>
              <FooterLogo src={image} />
            </LogoWrapper>
            <LocationComponent />
          </TopFooterComponent>
          <hr style={{ margin: `0`, marginInline: `16px` }} />
          <MiddleFooterComponent>
            <ContentWrapper>
              <FooterMiddleComponent
                title="소 개"
                first="기업 소개"
                second="히스토리"
                third="채용"
              />
              <FooterMiddleComponent
                title="도움이 필요하세요?"
                first="사이트 맵"
                second="고객 안내"
              />
              <FooterMiddleComponent
                title="법적고지"
                first="이용 약관"
                second="쿠키 정책"
                third="쿠키 설정"
              />
            </ContentWrapper>
            <Icon />
          </MiddleFooterComponent>
          <hr style={{ margin: `0`, marginInline: `16px` }} />
          <LowerFooterComponent>
            <StringWrapper>
              <Content>© 2024 The Coca‑Cola Company. 판권 소유</Content>
            </StringWrapper>
          </LowerFooterComponent>
        </FooterWrapper>
      </FooterComponent>
    </Wrapper>
  );
};
