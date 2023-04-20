import React, { useRef, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const SliderTab = () => {
  // const [value, setValue] = useRef(0);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="전체" />
        <Tab label="프로그래밍" />
        <Tab label="경제" />
        <Tab label="과학" />
      </Tabs>
    </Box>
  );
};

export default SliderTab;
