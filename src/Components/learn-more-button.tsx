import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  width: 327px;
  border: 2px solid black;
  background-color: white;
  padding: 10px 0;

  &:hover {
    background-color: #eeeeee;
  }
`;

const ButtonLink = styled(Link)`
  line-height: 14px;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: black;
`;

export const LearnMoreButton = () => {
  return (
    <Button>
      <ButtonLink to="#">자세히 보기</ButtonLink>
    </Button>
  );
};
