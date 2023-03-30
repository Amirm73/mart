import React from "react";
import styled from "styled-components";
import Login from "../molecules/login/Login";

function LoginP() {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
}

export default LoginP;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;
