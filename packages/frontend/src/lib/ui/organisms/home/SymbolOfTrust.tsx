import React from "react";
import styled from "styled-components";

const SymbolOfTrust = () => {
  const image = ["logo1.png", "logo2.png", "logo3.png"];
  return (
    <Wrapper>
      {image.map((para) => (
        <Logo src={para} alt="" />
      ))}
    </Wrapper>
  );
};

export default SymbolOfTrust;

const Wrapper = styled.div`
  width: 17rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 4rem;
  height: 5rem;
`;
