import NavigationTab from "components/common/NavigationTab";
import React, { useState } from "react";

const tabList = [
  {
    labelName: "나의독후감",
    color: "#c2ae9f",
    path: "?curtab=myreport",
    pathType: "myreport",
  },
  {
    labelName: "찜한책",
    color: "#c2ae9f",
    path: "?curtab=mylike",
    pathType: "mylike",
  },
];

const MyBookPage = () => {
  const [tabTarget, setTabTarget] = useState(0);
  const handleTab = (target: number) => {
    setTabTarget(target);
  };

  return (
    <>
      <NavigationTab
        tabTarget={tabTarget}
        handleTabFunc={handleTab}
        tabList={tabList}
      />
    </>
  );
};

export default MyBookPage;
