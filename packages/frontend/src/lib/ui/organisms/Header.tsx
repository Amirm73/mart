import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import styled, { CSSProperties } from "styled-components";
import Image from "next/image";
import { Line } from "../atoms/Line";
import { SearchHome } from "./home";
import { LoginHome } from "../molecules/home/LoginHome";

export const HeaderHome: React.FC = () => {
  return (
    <Header>
      <LogoBox>
        <Logo
          src="/Marit.png"
          alt="Picture of the author"
          width={120}
          height={35}
        />
      </LogoBox>
      <SearchHome />
      <LoginHome />
    </Header>
  );
};

const Header = styled.div`
  width: 78rem;
  height: 4rem;
  /* background: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const LogoBox = styled.div`
  width: 10%;
  height: 100%;
  /* background: orange; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(Image)`
  margin-top: 7px;
`;
