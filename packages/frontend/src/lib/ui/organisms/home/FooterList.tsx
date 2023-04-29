import { Color } from "$/lib/Design";
import Link from "next/link";
import * as React from "react";
import styled from "styled-components";
import Newsletters from "./Newsletters";

const FooterList = () => {
  const image = ["/instagram.png", "/linkedin.png", "/twitter.png"];
  return (
    <Wrapper>
      <div>
        <ul>
          <li>با ماریت</li>
          <Link href="">
            <li>درباره ما</li>
          </Link>
          <Link href="">
            <li>بلاگ</li>
          </Link>
          <Link href="">
            <li>قوانین حفظ حریم شخصی</li>
          </Link>
          <Link href="">
            <li>گزارش تخلف</li>
          </Link>
        </ul>
        <ul>
          <li>خدمات مشتریان</li>
          <Link href="">
            <li>پاسخ به پرسش‌های متداول</li>
          </Link>
          <Link href="">
            <li>رویه‌های بازگرداندن کالا</li>
          </Link>
          <Link href="">
            <li>شرایط استفاده</li>
          </Link>
          <Link href="">
            <li>حریم خصوصی</li>
          </Link>
          <Link href="">
            <li>گزارش باگ</li>
          </Link>
        </ul>
        <ul>
          <li>راهنمای خرید از ماریت</li>
          <Link href="">
            <li>نحوه ثبت سفارش</li>
          </Link>
          <Link href="">
            <li>رویه ارسال سفارش</li>
          </Link>
          <Link href="">
            <li>شیوه‌های پرداخت</li>
          </Link>
        </ul>
        <ul>
          <li>از آخرین تخفیف ها با خبر شوید</li>
          <li>
            <Newsletters />
          </li>
          <Socialnetwork>با ما همراه باشید : </Socialnetwork>
          <li>
            {image.map((para) => (
              <Icon src={para} alt="" />
            ))}
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default FooterList;

const Wrapper = styled.div`
  width: 100%;
  height: 12rem;
  /* background: red; */
  font-size: 13px;

  & > ul {
    display: flex;
    justify-content: space-between;
  }

  & > div {
    width: 100%;
    height: 100%;
    /* background: yellow; */

    display: flex;
    justify-content: space-between;
    & li {
      margin-top: 10px;
      color: ${Color.grayFont};
    }

    & > ul > li:nth-of-type(1) {
      font-weight: 900;
      color: black;
      font-size: 15px;
    }
  }
`;

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;

const Socialnetwork = styled.li`
  font-weight: 900;
  color: black;
  font-size: 15px;
`;
