import { Color } from "$/lib/Design";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../atoms/Button";
import { Line } from "../../atoms/Line";

const Newsletters = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            placeholder="example@gmail.com"
            {...register("email", {
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              required: true,
            })}
            dir="ltr"
          />
          {errors.email?.type === "pattern" && (
            <Error>پست الکترونیک وارد شده صحیح نیست</Error>
          )}
          {errors.email?.type === "required" && (
            <Error>پست الکترونیک وارد شده صحیح نیست</Error>
          )}
        </div>
        <Button title="دریافت خبرنامه" />
      </form>
    </Wrapper>
  );
};

export default Newsletters;

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  & > form:nth-of-type(1) {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    & > div {
      width: 15rem;
      font-size: 10px;
      color: red;
      position: relative;
      & > input {
        width: 80%;
        border-radius: 20px;
        padding: 5px 10px;
        margin: 0 10px;
        background: ${Color.lightGray};
      }
    }
  }
`;

const Error = styled.span`
  position: absolute;

  top: 35px;
  right: 10px;
  width: 12rem;
`;
