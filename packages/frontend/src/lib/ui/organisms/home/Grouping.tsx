import Link from "next/link";
import React from "react";
import styled from "styled-components";
const Grouping = () => {
  return (
    <Wrapper>
      <G_woman href="#">
        <WomanImage src="/woman.png" alt="" />
        <TextWoman src="/textwoman.png" alt="" />
      </G_woman>
      <G_man href="#">
        <ManImage src="/man.png" alt="" />
        <TextMan src="/textMan.png" alt="" />
      </G_man>
    </Wrapper>
  );
};

export default Grouping;

const Wrapper = styled.div`
  width: 68rem;
  height: 12rem;
  margin: 1rem auto;
  display: flex;
  position: relative;
`;

const G_woman = styled(Link)`
  width: 40rem;
  height: 100%;
  background: #fedeff;
  clip-path: polygon(28% 0, 100% 0%, 100% 100%, 0% 100%);
  position: absolute;
  border-radius: 0 10px 10px 0;
`;
const G_man = styled(Link)`
  width: 40rem;
  height: 100%;
  background: #c9eeff;
  clip-path: polygon(0 0, 100% 0, 72% 100%, 0% 100%);
  position: absolute;
  left: 0;
  border-radius: 10px 0 0 10px;
`;

const ManImage = styled.img`
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 16rem;
  height: 13rem;
`;

const WomanImage = styled.img`
  position: absolute;
  right: 0;
  bottom: -20px;
`;

const TextWoman = styled.img`
  position: absolute;
  left: 8rem;
  top: 3rem;
  width: 16rem;
  height: 6rem;
`;
const TextMan = styled.img`
  position: absolute;
  right: 11rem;
  top: 3rem;
  width: 16rem;
  height: 6rem;
`;
