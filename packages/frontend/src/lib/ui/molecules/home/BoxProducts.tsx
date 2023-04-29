import { Color } from "$/lib/Design";
import { discountMockdata } from "$/lib/MockData/discountMockdata";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import CardProduct from "./CardProducts";
import { v4 } from "uuid";

interface Style {
  bg?: string;
  color?: string;
}

interface Props extends Style {
  title: string;
  image?: string;
  products: any;
  arrow: string;
}

const BoxProducts: React.FC<Props> = ({
  title,
  image,
  bg,
  color,
  products,
  arrow,
}) => {
  return (
    <>
      <Wrapper>
        <Title bg={bg} color={color}>
          <div>
            {image && <Percentage src={image} alt="" />}
            <span>{title}</span>
          </div>
          <More href="">
            <span>مشاهده همه </span>
            <ArrowLeft src={arrow} alt="" />
          </More>
        </Title>
        <WrapperProducts>
          <Carousel
            height={260}
            slideSize="260px"
            slideGap="md"
            align="start"
            slidesToScroll={1}
            containScroll="keepSnaps"
            style={{ marginTop: "10px" }}
          >
            {products.slice(0, 12).map((discountProduct: any, index: any) => (
              <Carousel.Slide>
                <CardProduct {...discountProduct} key={v4()} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </WrapperProducts>
      </Wrapper>
    </>
  );
};

export default BoxProducts;

const Wrapper = styled.div`
  width: 75rem;
  height: 20rem;

  margin: 20px auto;
`;

const Title = styled.div<Style>`
  width: 100%;
  height: 3rem;
  background: ${(props) => props.bg || Color.lightGray};
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.color || Color.grayFont};
  padding: 0 1.5rem;

  & > div:nth-child(1) {
    width: 11.5rem;
    display: flex;
    align-items: center;

    font-family: "shablon";
    font-size: 24px;
  }
`;

const WrapperProducts = styled.div`
  width: 100%;
  height: 19rem;
`;

const ArrowLeft = styled.img`
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.2rem;
`;

const More = styled(Link)`
  width: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
`;

const Percentage = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  margin-top: 0.3rem;
  margin-left: 0.5rem;
`;
