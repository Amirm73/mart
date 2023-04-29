import { Color } from "$/lib/Design";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { Line } from "../../atoms/Line";

const SupportFooter = () => {
  const image = ["logo1.png", "logo2.png", "logo3.png"];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ScrollTop onClick={scrollToTop}>
        بازگشت به بالا
        <img src="/top-arrow.png" alt="" />
      </ScrollTop>
      <Wrapper>
        <span>پشتیبانی</span>
        <div>
          <span>تلفنی :‌ </span>
          <span>۰۲۱-۲۲۲۲۲۲</span>{" "}
          <Line height="1rem" bgColor={Color.lineGray} />
          <span>شنبه الی پنچ شنبه ۹ الی ۲۱</span>
        </div>

        <div>
          <span>ایمیل :‌ shopmarit@gmail.com</span>
        </div>
      </Wrapper>
    </>
  );
};

export default SupportFooter;

const Wrapper = styled.div`
  width: 16rem;
  height: 5.5rem;
  font-size: 12px;

  margin-right: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  & > span:nth-of-type(1) {
    font-weight: 900;
  }
  & > div:nth-of-type(1) {
    width: 100%;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > div:nth-of-type(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

const ScrollTop = styled.button`
  width: 6rem;
  height: 2rem;
  position: absolute;
  background: ${Color.lightGray};
  font-size: 12px;
  top: -30px;
  left: 600px;
  display: flex;
  align-items: center;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & > img {
    width: 0.5rem;
    height: 0.5rem;
  }
`;

const Logo = styled(Link)`
  width: 4rem;
  height: 5.5rem;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

const SupportImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const Support = styled.div`
  width: 100%;
  height: 1.5rem;

  font-size: 13px;
  display: flex;
  justify-content: space-between;
`;
