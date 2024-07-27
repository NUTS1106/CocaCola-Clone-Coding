import styled from "styled-components";
import { TeaserCompnent } from "./teaser-component";

const TeaserWrapper = styled.section`
  margin-bottom: 200px;
`;

export const Teaser = () => {
  return (
    <TeaserWrapper>
      <TeaserCompnent
        onRight={true}
        url="https://cdn.pixabay.com/photo/2017/07/31/17/12/water-2559064_640.jpg"
        title="지속 가능한 지구를 위한 노력"
        description="코카-콜라는 지속 가능하고 더 나은 미래를 추구합니다. 모두가 더불어
        사는 세상을 만들기 위해 전 세계 수많은 사람들의 삶, 지역사회, ​더
        나아가 우리가 살고 있는 지구 전체에 긍정적인 변화를 만들기 위해
        노력하고 있습니다. ​"
      />
      <TeaserCompnent
        onRight={false}
        url="https://cdn.pixabay.com/photo/2017/07/31/17/12/water-2559064_640.jpg"
        title="코카-콜라의 짜릿한 여정"
        description="1886년에 탄생한 코카-콜라의 비하인드 히스토리, 마케팅 비법 등 130여 년 역사 속 흥미로운 이야기 ​"
      />
    </TeaserWrapper>
  );
};
