import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { json } from "stream/consumers";
import styled from "styled-components";

import {
  ErrorMessage,
  Form,
  InputNumber,
  SaveButton,
  TextBody,
  Title,
} from "./styleForm";

interface signUp {
  password: string;
}

const SignupForm = (props: signUp) => {
  interface IFormInput {
    VerificationCode: string;
  }
  useEffect(() => {
    console.log(props.password);
  }, []);

  // localStorage.setItem("timer", timer);

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(50);

  // useEffect(() => {
  //   localStorage.setItem("Username", JSON.stringify(seconds));
  // }, [seconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  //   const signupMutation = useSignup({
  //     onSuccess() {
  //       // changeModal();
  //     },
  //     onError() {},
  //   });

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<IFormInput>();

  //   const onSubmit: SubmitHandler<IFormInput> = (data) => {
  //     signupMutation.mutate(data.phoneNumber);
  //   };

  const onSubmit = (data: IFormInput) => console.log(data);

  useEffect(() => {
    setFocus("VerificationCode");
  }, [setFocus]);

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
  };

  return (
    <>
      <Title>کد تایید را وارد کنید</Title>
      <TextBody>کد تایید برای شماره ۰۹۰۳۵۷۰۰۲۳۰ پیامک شد</TextBody>

      <Form
        onSubmit={handleSubmit(onSubmit)}
        className={`${errors.VerificationCode && "errorBox1"}`}
        size="size"
      >
        <InputNumber
          type="text"
          {...register("VerificationCode", {
            required: true,
            pattern: /^[0-9]*$/g,
            minLength: 5,
            maxLength: 5,
          })}
          className={`${errors.VerificationCode && "invalid"}`}
        />

        {errors.VerificationCode?.type === "required" && (
          <ErrorMessage>کد تایید باید ۵ رقمی باشد </ErrorMessage>
        )}
        {errors.VerificationCode?.type === "pattern" && (
          <ErrorMessage>مقدار وارد شده باید فقط شامل عدد باشد</ErrorMessage>
        )}
        {errors.VerificationCode &&
          errors.VerificationCode.type === "maxLength" && (
            <ErrorMessage>کد تایید باید ۵ رقمی باشد</ErrorMessage>
          )}
        {errors.VerificationCode &&
          errors.VerificationCode.type === "minLength" && (
            <ErrorMessage>کد تایید باید ۵ رقمی باشد</ErrorMessage>
          )}
        <V_code>
          {seconds > 0 || minutes > 0 ? (
            <Again>
              <span>مانده تا دریافت مجدد کد</span>
              <span>
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </span>
            </Again>
          ) : (
            <p>
              دریافت مجدد کد از طریق
              <CodAging onClick={resendOTP}> پیامک </CodAging>
              یا <CodAging onClick={resendOTP}>تماس</CodAging>
            </p>
          )}
        </V_code>
        <SaveButton type="submit" value="تایید" />
      </Form>
    </>
  );
};

export default SignupForm;

const V_code = styled.span`
  margin: 0 auto;
  user-select: none;
`;

const CodAging = styled.span`
  color: #19bfd3;
  margin: 0 0.3rem;
  cursor: pointer;
`;

const Again = styled.div`
  display: flex;
  justify-content: space-between;
  width: 9.4rem;
`;
