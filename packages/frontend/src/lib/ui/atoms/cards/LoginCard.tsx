import React, { useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";

function LoginCard(props: any) {
  return (
    <Wrapper>
      <Img src="/logo.png" alt="Picture of the author" width={85} height={44} />
      {props.children}
      <Back onClick={() => props.setType("false")} type={props.type}>
        <img src="/next.png" alt="" />
      </Back>
    </Wrapper>
  );
}

export default LoginCard;

const Wrapper = styled.div<any>`
  max-width: 430px;
  min-width: 345px;

  text-align: center;

  height: 22.5rem;
  padding: 1rem 1.5rem;

  box-shadow: -2px 1px 9px rgba(0, 0, 0, 0.25);

  border-radius: 15px;

  font-size: 0.7rem;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;

  color: #3f4064;

  position: relative;

  .errorBox {
    height: 8rem;
  }
  .errorBox1 {
    height: 11rem;
  }
`;

const Img = styled(Image)`
  margin: 0 auto;
`;

const Back = styled.div<any>`
  width: 2rem;
  height: 2rem;
  top: 1.6rem;
  position: absolute;

  display: ${(props) => (props.type == "false" ? "none" : "flex")};
  cursor: pointer;
`;
