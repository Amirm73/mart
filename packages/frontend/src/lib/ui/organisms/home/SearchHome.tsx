import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export const SearchHome: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <SearchBar>
      <form>
        <Input_elevated {...register("search")} placeholder="جستجو" />
        <S_button type="submit" value="" />
      </form>
    </SearchBar>
  );
};

const SearchBar = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  & > form {
    max-width: 536px;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;

    border-radius: 8px;
  }
`;

const S_button = styled.input`
  background: #e9ecef;
  border-radius: 0 5px 5px 0;
  width: 40px;
  height: 100%;

  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill='%23838D99' d='M13.22 14.63a8 8 0 1 1 1.41-1.41l4.29 4.29a1 1 0 1 1-1.41 1.41l-4.29-4.29zm-.66-2.07a6 6 0 1 0-8.49-8.49 6 6 0 0 0 8.49 8.49z'></path></svg>");
  background-repeat: no-repeat;
  background-position: 50% 55%;
  background-size: 16px 16px;
`;

const Input_elevated = styled.input`
  font-size: 16px;
  line-height: 1.5;
  border: none;
  background: #e9ecef;

  border-radius: 5px 0 0 5px;
  width: 496px;
  height: 100%;
  padding: 0.5em 0 0.5em 2.5em;
  text-align: right;
  color: #f1f3f5;

  font-size: 12px;

  :focus {
    outline: none;
  }
`;
