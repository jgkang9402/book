import { Box } from "@mui/material";
import { getCollectionDoc } from "api/FirebaseApi";
import GridCont from "components/common/GridCont";
import NavigateBtn from "components/common/NavigateBtn";
import NavigationTab from "components/common/NavigationTab";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  // const
  const [tabTarget, setTabTarget] = useState(0);
  // const [userLikeList, setUserLikeList] = useState([]);
  const [reportList, setReportList] = useState<[] | DocumentData[]>([]);
  const navigate = useNavigate();
  const handleTab = (target: number) => {
    setTabTarget(target);
  };
  const getMyReportList = async () => {
    console.log(123);

    const collectionName = "ZWZq4Ad0pfaCTJgT0x8MB0iKsfD3";
    const myReports = await getCollectionDoc("reportList", collectionName);
    console.log(myReports);
    if (myReports !== undefined) {
      const reports = Object.values(myReports);
      setReportList(reports);
    }
  };
  const getBookInfo = (bookIsbn: string, bookName: string) => {
    navigate(bookIsbn);
  };

  useEffect(() => {
    getMyReportList();
  }, []);

  return (
    <>
      <NavigationTab
        tabTarget={tabTarget}
        handleTabFunc={handleTab}
        tabList={tabList}
      />
      <Box textAlign={"end"}>
        <NavigateBtn path="/mybook/create">글쓰기</NavigateBtn>
      </Box>
      <Box>
        <GridCont itemData={reportList} clickEvent={getBookInfo} />
      </Box>
    </>
  );
};

export default MyBookPage;
