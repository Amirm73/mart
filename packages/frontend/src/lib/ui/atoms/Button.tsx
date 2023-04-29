import { Color } from "$/lib/Design";
import React from "react";
import styled from "styled-components";

interface Style {
  width?: string;
  height?: string;
  bg?: string;
  color?: string;
  borderRadius?: string;
  title?: string;
}
const Button: React.FC<Style> = ({
  width,
  height,
  bg,
  color,
  borderRadius,
  title,
}) => {
  return (
    <Wrapper
      width={width}
      height={height}
      bg={bg}
      color={color}
      borderRadius={borderRadius}
    >
      {title}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button<Style>`
  width: ${(props) => props.width || "6rem"};
  height: ${(props) => props.height || "2rem"};
  background: ${(props) => props.bg || Color.buttonBulo};
  color: ${(props) => props.color || "white"};
  border-radius: ${(props) => props.borderRadius || "20px"};
`;
