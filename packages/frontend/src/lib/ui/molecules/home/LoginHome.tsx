import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { Line } from "../../atoms/Line";

export const LoginHome: React.FC = () => {
  return (
    <BoxLogin>
      <Login href="/login">
        <Image
          src="/log-in.png"
          alt="Picture of the author"
          width={19}
          height={18}
        />
        <TextLogin>
          <span>ورود</span>
          <Line />
          <span>ثبت‌نام</span>
        </TextLogin>
      </Login>
      <Line height="1.3rem" bgColor="#dee2e6" />
      <Cart>
        <Image src="/cart.png" alt="" width={30} height={31} />
      </Cart>
      <Favorites>
        <Image src="/heart.png" alt="" width={20} height={21} />
      </Favorites>
    </BoxLogin>
  );
};

const BoxLogin = styled.div`
  width: 208px;
  height: 50%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Login = styled(Link)`
  width: 112px;
  height: 100%;
  /* background: yellow; */
  border: 1px solid #dee2e6;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  font-family: "Iran3";
  color: #080a38;
  padding: 18px 5px;

  cursor: pointer;
`;

const TextLogin = styled.div`
  width: 67.2px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-right: 8px;
  & > span:nth-of-type(2) {
  }
  /* background-color: brown; */
`;
const Cart = styled.div`
  width: 32px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Favorites = styled.div`
  width: 32px;
  height: 100%;
  /* background: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.3rem;
`;
