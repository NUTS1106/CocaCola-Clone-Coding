import { styled } from "styled-components";
import { Slide } from "../Components/slide";
import { Teaser } from "../Components/teaser";
import { Brand } from "../Components/brand";

const MainWrapper = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1120px;
  margin-inline: auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Home = () => {
  return (
    <MainWrapper>
      <Wrapper>
        <Slide />
        <Teaser />
        <Brand />
      </Wrapper>
    </MainWrapper>
  );
};
