import {
  benefitMockdata,
  BenefitMockdata,
} from "$/lib/MockData/benefitMockData";
import * as React from "react";
import styled from "styled-components";

const BenefitFooter: React.FC<benefitMockdata> = () => {
  return (
    <WrapperBenefit>
      {BenefitMockdata.map((para) => (
        <Benefit>
          <LogoBenefit>
            <img src={para.image} alt="" />
          </LogoBenefit>
          {para.title}
        </Benefit>
      ))}
    </WrapperBenefit>
  );
};

export default BenefitFooter;

const WrapperBenefit = styled.div`
  width: 30rem;
  height: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1rem;
`;

const Benefit = styled.div`
  width: 10rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  font-size: 11px;
`;

const LogoBenefit = styled.div`
  width: 2rem;
  height: 2rem;

  & > img {
    width: 100%;
    height: 100%;
  }
`;
