import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

type TabPropsType = {
  tabTarget: number;
  handleTabFunc: (target: number) => void;
  tabList: TabListDetail[];
};
interface TabListDetail {
  labelName: string;
  color: string;
  path: string;
}

const NavigationTab = ({ tabTarget, handleTabFunc, tabList }: TabPropsType) => {
  const navigate = useNavigate();

  // const handlePath = useCallback(
  //   (path: string) => {
  //     navigate(path, { replace: true });
  //   },
  //   [navigate]
  // );
  const handlePath = (path: string) => {
    navigate(path, { replace: true });
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    handleTabFunc(newValue);
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
        {tabList?.map((item, idx) => {
          return (
            <Tab
              key={idx}
              label={item.labelName}
              sx={{ color: item.color }}
              onClick={() => handlePath(item.path)}
            />
          );
        })}
      </Tabs>
    </Box>
  );
};

export default NavigationTab;
