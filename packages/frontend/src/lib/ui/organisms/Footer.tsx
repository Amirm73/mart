import {
  benefitMockdata,
  BenefitMockdata,
} from "$/lib/MockData/benefitMockData";
import React from "react";
import styled from "styled-components";
import { Line } from "../atoms/Line";
import BenefitFooter from "./home/Benefit";
import SupportFooter from "./home/SupportFooter";
import Newsletters from "./home/Newsletters";
import FooterList from "./home/FooterList";
import { Color } from "$/lib/Design";
import About from "./home/About";
import SymbolOfTrust from "./home/SymbolOfTrust";

const Footer = () => {
  return (
    <Wrapper>
      {/* <BenefitFooter />
      <Newsletters />
      <Line width="95%" height="0.04rem" bgColor="white" />
      <SupportFooter />
      <FooterList /> */}
      <div>
        <SupportFooter />
        <BenefitFooter />
      </div>
      <div>
        <FooterList />
      </div>
      <Line width="95%" bgColor={Color.lineGray} height="1px" />
      <div>
        <About />
        <SymbolOfTrust />
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;

  padding-top: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background: yellow; */
  /* justify-content: space-between; */

  & > div:nth-of-type(1) {
    width: 95%;
    height: 8rem;
    background: ${Color.lightGray};
    position: relative;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > div:nth-of-type(2) {
    width: 95%;
    height: 15rem;
    /* background: pink; */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > div:nth-of-type(4) {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
