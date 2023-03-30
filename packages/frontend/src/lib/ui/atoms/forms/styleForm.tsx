import Link from "next/link";
import styled from "styled-components";

export const Title = styled.p`
  font-size: 1.3rem;
  color: black;
`;

export const TextBody = styled.p`
  text-align: right;
`;

export const Form = styled.form<any>`
  width: 100%;
  height: ${(props) => (props.size ? "10rem" : "7rem")};
  /* background-color: red; */
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;

  margin: 0 auto;

  .invalid {
    border: 1px solid #b2001a;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 2.7rem;

  border-radius: 5px;
`;

export const SaveButton = styled(Input)`
  background: #705cea;
  color: white;

  font-weight: 700;
`;

export const InputNumber = styled(Input)`
  border: 1px solid lightgray;
  outline: none;
  padding: 0 1rem;
  text-align: right;
`;

export const ErrorMessage = styled.p`
  color: #b2001a;
  margin: 0.3rem 0 0.7rem 0;
`;

export const EntryRequirements = styled.p`
  font-size: 10px;
  padding: 10px;
`;

export const Requirements = styled(Link)`
  color: #008eb2;
`;
