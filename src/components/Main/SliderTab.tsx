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
    <Box sx={{ position: "relative" }}>
      <Tabs
        value={tabTarget}
        onChange={handleChange}
        variant="fullWidth"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{
          backgroundColor: "#DBDFEA",
        }}
      >
        <Tab label="베스트셀러" sx={{ color: "#c2ae9f" }} />
        <Tab label="신규베스트" sx={{ color: "#c2ae9f" }} />
        <Tab label="에디터추천" sx={{ color: "#c2ae9f" }} />
        <Tab label="블로거추천" sx={{ color: "#c2ae9f" }} />
      </Tabs>
    </Box>
  );
};

export default SliderTab;
