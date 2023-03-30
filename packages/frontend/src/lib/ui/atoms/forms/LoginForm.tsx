import { useSignup } from "$/lib/hooks/react-query-hooks/mutation/useSignup";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import {
  EntryRequirements,
  ErrorMessage,
  Form,
  InputNumber,
  Requirements,
  SaveButton,
  TextBody,
  Title,
} from "./styleForm";

const LoginForm = (props: any) => {
  interface IFormInput {
    phoneNumber: string;
  }

  const signupMutation = useSignup({
    onSuccess(data: any) {
      props.setType("true");
      props.setPassword(data.signup.password);
    },
    onError() {},
  });

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    signupMutation.mutate(data.phoneNumber);
  };

  useEffect(() => {
    setFocus("phoneNumber");
  }, [setFocus]);

  return (
    <>
      <Title>ورود | ثبت نام </Title>
      <TextBody>
        ! سلام
        <br /> لطفا شماره موبایل خود را وارد کنید
      </TextBody>

      <Form
        onSubmit={handleSubmit(onSubmit)}
        className={`${errors.phoneNumber && "errorBox"}`}
      >
        <InputNumber
          type="text"
          {...register("phoneNumber", {
            required: true,
            pattern: /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/,
          })}
          className={`${errors.phoneNumber && "invalid"}`}
        />

        {errors.phoneNumber?.type === "required" && (
          <ErrorMessage>لطفا این قسمت را خالی نگذارید</ErrorMessage>
        )}

        {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
          <ErrorMessage>لطفا شماره موبایل خود را وارد کنید</ErrorMessage>
        )}

        <SaveButton type="submit" value="ورود" />
      </Form>

      <EntryRequirements>
        ورود شما به معنی پذیرش
        <Requirements href="/"> شرایط ماریت </Requirements> و
        <Requirements href="/"> قوانین حریم خصوصی </Requirements> است
      </EntryRequirements>
    </>
  );
};

export default LoginForm;
