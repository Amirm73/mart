import { color } from "$/assets";
import { Color } from "$/lib/Design";
import { discount } from "$/lib/MockData/discountMockdata";
import React from "react";
import styled from "styled-components";

const CardProduct: React.FC<discount> = ({
  image,
  originalPrice,
  price,
  titel,
  discountPercent,
}) => {
  return (
    <Wrapper>
      <ImageBox>
        {discountPercent && <DiscountMargin>{discountPercent}%</DiscountMargin>}

        <img src={image} alt="" />
      </ImageBox>
      <Description>
        <p>{titel}</p>
        <div>
          <p>{price}</p>
          <p>
            <span>{originalPrice}</span>
            <span>تومان</span>
          </p>
        </div>
      </Description>
    </Wrapper>
  );
};

export default CardProduct;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-family: "san";
`;

const ImageBox = styled.div`
  width: 100%;
  height: 70%;
  background: ${Color.lightGray};
  position: relative;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 200px;
    height: 200px;
  }
`;

const DiscountMargin = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  clip-path: polygon(100% 0, 0 0, 100% 100%);
  width: 3.5rem;
  height: 3.5rem;
  background: ${Color.red};
  border-radius: 0 0.625rem 0 0;
  padding: 0.7rem 0.2rem 0 0;
  color: ${Color.White};
  font-weight: bold;
  font-size: 20px;
  font-family: "san1";
`;

const Description = styled.div`
  width: 100%;
  height: 40%;

  padding: 0.5rem;

  & > p:nth-child(1) {
    width: 100%;
    height: 50%;

    flex-wrap: wrap;
  }

  & > div {
    width: 100%;
    height: 20%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* background: red; */

    margin-top: 0.5rem;
    font-family: "san1";

    & > p:nth-of-type(2) {
      font-weight: bold;
      font-size: 20px;

      & > span:nth-of-type(1) {
        margin-left: 5px;
      }
    }

    & > p:nth-of-type(1) {
      margin-left: 10px;
      text-decoration: line-through;
      text-decoration-color: lightgray;
      color: gray;
      font-size: 17px;
    }
  }
`;
