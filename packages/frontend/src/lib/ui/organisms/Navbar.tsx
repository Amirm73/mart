import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Line } from "../atoms/Line";

export const NavbarHome: React.FC = () => {
  return (
    <NavbarBox>
      <Navbar>
        <ul>
          <li>
            <List href="#">
              <Image src="/options.png" alt="" width={22} height={22} />
              <Products>محصولات</Products>
            </List>
          </li>
          <li>
            <Line height="1rem" bgColor="#dee2e6" />
          </li>
          <li>
            <List href="#">
              <Image src="/skincare.png" alt="" width={22} height={22} />

              <span>برندها</span>
            </List>
          </li>
          <li>
            <List href="#">
              <Image src="/fire.png" alt="" width={22} height={22} />

              <span>پرفروش ترین‌ها</span>
            </List>
          </li>
          <li>
            <List href="#">
              <Image src="/price-tag.png" alt="" width={22} height={22} />

              <span>تخفیف‌ها و پیشنهادها</span>
            </List>
          </li>
          <li>
            <Line height="1rem" bgColor="#dee2e6" />
          </li>
          <li>
            <List href="#">
              <span>سوالی دارید ؟</span>
            </List>
          </li>
        </ul>
      </Navbar>
      <Counseling></Counseling>
    </NavbarBox>
  );
};

const NavbarBox = styled.div`
  width: 78rem;
  height: 3rem;

  margin: 0 auto;
`;

const Navbar = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  & > ul > li {
    margin-left: 1rem;
    /* background: gray; */
    font-size: 13px;
    color: #5a5c78;
  }
`;

const Counseling = styled.div`
  width: 10%;
  height: 100%;
  /* background: yellow; */
  margin-left: 2rem;
`;

const List = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  & > span {
    margin-right: 3px;
  }
`;

const Products = styled.span`
  font-family: "Iran4";
`;
