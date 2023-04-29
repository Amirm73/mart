import React from "react";
import styled from "styled-components";

const ProductCategory = () => {
  const image = ["./woman-hair.jpg", "./remelWoman.jpg", "sun.jpg", ""];

  return (
    <Wrapper>
      {image.map((img) => (
        <div>
          <img src={img} alt="" />
        </div>
      ))}
    </Wrapper>
  );
};

export default ProductCategory;

const Wrapper = styled.div`
  width: 1200px;
  height: 240px;

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    width: 18rem;
    height: 100%;

    & > img {
      width: 100%;
      height: 100%;
      border-radius: 15px;
    }
  }
`;
