import React, { CSSProperties } from "react";
import styled from "styled-components";

type Style = {
  height?: string;
  width?: string;
  bgColor?: CSSProperties & string;
};

export const Line: React.FC<Style> = ({ height, bgColor, width }) => {
  return <LineStyle height={height} bgColor={bgColor} width={width} />;
};

const LineStyle = styled.div<Style>`
  width: ${(w) => w.width || "0.1rem"};
  height: ${(h) => h.height || "0.5rem"};
  background: ${(b) => b.bgColor || "#080a38"};
`;
