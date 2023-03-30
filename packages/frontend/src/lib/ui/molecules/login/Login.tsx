import React, { useEffect, useRef, useState } from "react";
import LoginCard from "../../atoms/cards/LoginCard";
import { useForm, SubmitHandler } from "react-hook-form";
import LoginForm from "../../atoms/forms/LoginForm";
import SignupForm from "../../atoms/forms/SignupForm";

const Login = () => {
  const [type, setType] = useState("false");

  const [password, setPassword] = useState<string>("");

  return (
    <LoginCard setType={setType} type={type}>
      {type === "false" ? (
        <LoginForm setPassword={setPassword} setType={setType} />
      ) : (
        <SignupForm password={password} />
      )}
    </LoginCard>
  );
};

{
}

export default Login;
