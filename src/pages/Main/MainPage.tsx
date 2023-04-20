import React, { useEffect } from "react";
import instance from "../../util/http";
import { Box } from "@mui/material";
import SliderBox from "../../components/Main/SliderBox";
import SliderTab from "../../components/Main/SliderTab";

const MainPage = () => {
  useEffect(() => {
    // aladin();
  }, []);
  return (
    <Box sx={{ mt: "2rem" }}>
      <SliderBox />
    </Box>
  );
};

export default MainPage;
