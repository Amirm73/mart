import { CategoryMockData } from "$/lib/MockData/categoryMockData";
import * as React from "react";
import styled from "styled-components";

const Category = () => {
  return (
    <Wrapper>
      {CategoryMockData.map((para) => (
        <SlidPropduct>
          <RadiusBanner>
            <BannerImage src={para.image} alt="" />
          </RadiusBanner>
          <TextBanner>{para.title}</TextBanner>
        </SlidPropduct>
      ))}
    </Wrapper>
  );
};

export default Category;

const Wrapper = styled.div`
  width: 70rem;
  height: 7rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 1rem;
`;

const SlidPropduct = styled.div`
  width: 8rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const RadiusBanner = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #ededed;
`;

const TextBanner = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  padding: 10px;
`;
