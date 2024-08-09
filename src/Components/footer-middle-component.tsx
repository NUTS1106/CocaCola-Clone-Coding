import { Link } from "react-router-dom";
import styled from "styled-components";

interface Contents {
  title: string;
  first: string;
  second: string;
  third?: string;
}

const FooterMiddleComponentWrapper = styled.div`
  max-width: 33.33333%;
  min-width: 25%;
  display: flex;
  flex-direction: column;
  padding-inline: 16px;
  margin-top: 48px;
`;
const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 24px;
  font-size: 10px;
  font-weight: 700;
`;

const First = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
`;

const Second = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
`;
const Third = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
`;

export const FooterMiddleComponent = ({
  title,
  first,
  second,
  third,
}: Contents) => {
  return (
    <FooterMiddleComponentWrapper>
      <Title>{title}</Title>
      <ContentsWrapper>
        <First to="#">{first}</First>
        <Second to="#">{second}</Second>
        {third ? <Third to="#">{third}</Third> : null}
      </ContentsWrapper>
    </FooterMiddleComponentWrapper>
  );
};
