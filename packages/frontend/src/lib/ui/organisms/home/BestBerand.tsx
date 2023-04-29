import { Carousel } from "@mantine/carousel";
import * as React from "react";
import styled from "styled-components";

const BestBerand = () => {
  const image = [
    "/NIVEA_logo_2021 1.png",
    "LOGO_LOREAL_GROUPE_BLANC.jpg.png",
    "NIVEA_logo_2021 1.png",
    "LOGO_LOREAL_GROUPE_BLANC.jpg.png",
    "download.png",
  ];

  return (
    <Wrapper>
      <Title>
        <Image src="/bestberand.png" alt="" />
        <span>محبوب‌ترین برندها</span>
      </Title>
      <WrapperCarosel>
        <Carousel
          height={100}
          slideSize="100px"
          slideGap="md"
          align="start"
          slidesToScroll={1}
          containScroll="keepSnaps"
          style={{ marginTop: "10px" }}
        >
          {image.map((img) => (
            <Carousel.Slide>
              <Berand>
                <Logo src={img} alt="" />
              </Berand>
            </Carousel.Slide>
          ))}
        </Carousel>
      </WrapperCarosel>
    </Wrapper>
  );
};

export default BestBerand;

const Wrapper = styled.div`
  width: 75rem;
  height: 10rem;
  margin: 0 auto;
`;

const Title = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    margin-right: 0.2rem;
  }
`;

const WrapperCarosel = styled.div`
  width: 100%;
  height: 7rem;
`;

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const Berand = styled.div`
  width: 6rem;
  height: 6rem;
  background: gray;
  border-radius: 50%;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
