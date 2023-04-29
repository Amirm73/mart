import { Color } from "$/lib/Design";
import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

// type Props = {
//     children: string | JSX.Element | JSX.Element[] | () => JSX.Element
//   }

type Props = {
  children: string;
};

const ReadMore: React.FC<Props> = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      {isReadMore ? text.slice(0, 240) + "..." : text}
      <Readmore onClick={toggleReadMore}>
        {isReadMore ? "مشاهده بیشتر" : " مشاهده کمتر"}
      </Readmore>
    </>
  );
};

export default ReadMore;

const Readmore = styled.p`
  color: blue;
  cursor: pointer;
`;
