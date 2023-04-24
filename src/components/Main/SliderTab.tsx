import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

type TabPropsType = {
  tabTarget: number;
  setTabTarget: any;
};

const SliderTab = ({ tabTarget, setTabTarget }: TabPropsType) => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabTarget(newValue);
  };
  return (
    <Box>
      {/* <Box sx={{ bgcolor: "background.paper" }}> */}
      <Tabs
        value={tabTarget}
        onChange={handleChange}
        variant="fullWidth"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="베스트셀러" sx={{ color: "#d2c8c0" }} />
        <Tab label="신규베스트" sx={{ color: "#d2c8c0" }} />
        <Tab label="에디터추천" sx={{ color: "#d2c8c0" }} />
        <Tab label="블로거추천" sx={{ color: "#d2c8c0" }} />
      </Tabs>
    </Box>
  );
};

export default SliderTab;
