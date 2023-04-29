import * as React from "react";
import { getStylesRef, Image, rem } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
const AdvertisingCarosel = () => {
  const images = ["/woman.jpg"];

  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} alt="" />
    </Carousel.Slide>
  ));
  return (
    <Carousel
      maw={1300}
      mx="auto"
      dir="ltr"
      height={300}
      withIndicators
      plugins={[autoplay.current]}
      controlSize={35}
      styles={{
        controls: {
          ref: getStylesRef("controls"),
          transition: "opacity 150ms ease",
          opacity: 0,

          position: "relative",
        },
        root: {
          "&:hover": {
            [`& .${getStylesRef("controls")}`]: {
              opacity: 1,
            },
          },
        },

        indicator: {
          width: rem(10),
          height: rem(5),
          transition: "width 250ms ease",
          background: "#5a5c78",

          "&[data-active]": {
            width: rem(20),
            background: "white",
          },
        },
        control: {
          position: "absolute",
          bottom: 15,
          ":first-child": {
            left: 20,
          },
          ":nth-child(2)": {
            left: 60,
          },
        },
      }}
    >
      {slides}
    </Carousel>
  );
};

export default AdvertisingCarosel;
