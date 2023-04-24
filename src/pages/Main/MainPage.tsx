import React from "react";
import { Box } from "@mui/material";
import SliderBox from "../../components/Main/SliderBox";
import SliderItem from "../../components/Main/SliderItem";

const MainPage = () => {
  const tabSlideSet = {
    dots: false,
    // fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // slideToShow: 2,
        },
      },
    ],
    // autoplaySpeed: 2500,
  };

  return (
    <Box sx={{ mt: "2rem" }}>
      <SliderBox />
      {/* <SliderItem tabSlideSet={tabSlideSet} apiParams={{}} /> */}
    </Box>
  );
};

export default MainPage;
