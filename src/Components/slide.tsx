import { useState } from "react";
import styled from "styled-components";

const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(100vw - 17px, 1440px);
  overflow: hidden;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageUL = styled.ul`
  position: relative;
  display: flex;
  flex-direction: row;
  transition: transform 0.3s ease-in-out;
`;

const ImageLI = styled.li`
  list-style: none;
  margin-right: 24px;
`;

const Image = styled.img`
  width: 1306.91px;
  height: 616.69px;
  border-radius: 20px;
`;

const ImageButtonWrapper = styled.div`
  position: relative;
  margin-top: 32px;
`;

const Content = styled.div`
  margin-bottom: 16px;
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  text-align: start;
  position: absolute;
  top: 0;
  margin: 0 calc(50% - 560px);
`;

const ContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-bottom: 24px;
  width: 280px;
  height: 40px;
  background-color: white;
`;

const Button = styled.a`
  text-decoration: none;
  color: black;
`;

const ContentH3 = styled.h3`
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 24px;
  color: white;
`;

const ContentP = styled.p`
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 14px;
  color: white;
`;

const Input = styled.input`
  margin-top: 32px;
  margin-inline: 4px;
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1px solid #8b8b8b;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:checked {
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
      height: 10px;
      width: 10px;
      background-color: black;
      border-radius: 10px;
      content: "";
    }
  }
`;

const images = [
  {
    id: 0,
    url: "https://cdn.pixabay.com/photo/2024/06/04/09/23/sea-8808190_640.jpg",
  },
  {
    id: 1,
    url: "https://cdn.pixabay.com/photo/2024/03/07/16/15/iceberg-8618870_640.jpg",
  },
  {
    id: 2,
    url: "https://cdn.pixabay.com/photo/2024/02/16/19/22/green-parrot-8578207_640.jpg",
  },
  {
    id: 3,
    url: "https://cdn.pixabay.com/photo/2023/11/16/22/35/church-8393259_640.jpg",
  },
  {
    id: 4,
    url: "https://cdn.pixabay.com/photo/2017/08/01/11/38/sea-2564601_640.jpg",
  },
  {
    id: 5,
    url: "https://cdn.pixabay.com/photo/2024/06/04/09/23/sea-8808190_640.jpg",
  },
  {
    id: 6,
    url: "https://cdn.pixabay.com/photo/2024/03/07/16/15/iceberg-8618870_640.jpg",
  },
];

export const Slide = () => {
  const [photos, setPhotos] = useState(images);
  const [current, setCurrent] = useState(0);

  const onClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setCurrent(Number(e.target.value));
  };

  return (
    <SlideWrapper>
      <ImageWrapper>
        <ImageUL
          style={{
            transform: `translateX(${
              (current - 2) * -1306.91 + (60 - 24 * current)
            }px)`,
          }}
        >
          {photos.map((photo) => (
            <ImageLI key={photo.id}>
              <ImageButtonWrapper>
                <Image width="1306.91" height="616.69" src={photo.url} />
                <ContentWrapper>
                  <Content>
                    <ContentH3>
                      진천 국가대표 선수촌에<br></br>등장한 파워에이드!
                    </ContentH3>
                    <ContentP>
                      2024 파리올림픽 국가대표<br></br>선수들을 응원하다
                    </ContentP>
                  </Content>
                  <ContentButton>
                    <Button href="">자세히 알아보기</Button>
                  </ContentButton>
                </ContentWrapper>
              </ImageButtonWrapper>
            </ImageLI>
          ))}
        </ImageUL>
      </ImageWrapper>
      <ButtonWrapper>
        <Input
          defaultChecked
          onChange={onClick}
          type="radio"
          value={0}
          name="sliderButton"
        />
        <Input onChange={onClick} type="radio" value={1} name="sliderButton" />
        <Input onChange={onClick} type="radio" value={2} name="sliderButton" />
        <Input onChange={onClick} type="radio" value={3} name="sliderButton" />
        <Input onChange={onClick} type="radio" value={4} name="sliderButton" />
      </ButtonWrapper>
    </SlideWrapper>
  );
};
