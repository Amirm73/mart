import * as React from "react";
import styled from "styled-components";

interface style {
  width?: string;
  height?: string;
}

interface TypeBanner extends style {
  Img: string;
}

const CardBanner: React.FC<TypeBanner> = ({ Img, width, height }) => {
  return (
    <Wrapper width={width} height={height}>
      <Image src={Img} alt="" />
    </Wrapper>
  );
};

export default CardBanner;

const Wrapper = styled.div<style>`
  width: ${(props) => (props.width ? props.width : "680px")};
  width: ${(props) => (props.height ? props.height : "400px")};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
