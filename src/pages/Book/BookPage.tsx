import { Box, Stack } from "@mui/material";
import { getTypeListBook } from "api/AladinApi";
import GridCont from "components/common/GridCont";
import NavigationTab from "components/common/NavigationTab";
import PageNation from "components/common/PageNation";
import Spinner from "components/common/Spinner";
// import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { handleCurPage } from "store/slices/bookSlice";
// import { RootState } from "store/store";
// import { alaDum } from "util/aladinDummy";
import { isEmpty, querystringToObject } from "util/commonUtil";

const tabList = [
  {
    labelName: "베스트셀러",
    color: "#c2ae9f",
    path: "?curtab=bestseller",
    pathType: "bestseller",
  },
  {
    labelName: "신규베스트",
    color: "#c2ae9f",
    path: "?curtab=itemnewspecial",
    pathType: "itemnewspecial",
  },
  {
    labelName: "블로거추천",
    color: "#c2ae9f",
    path: "?curtab=blogbest",
    pathType: "blogbest",
  },
  {
    labelName: "개발도서",
    color: "#c2ae9f",
    path: "?curtab=itemeditorchoice",
    pathType: "itemeditorchoice",
  },
];
const BookPage = () => {
  const [curTab, setCurTabTarget] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [bookList, setBookList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleTab = (target: number) => {
    setCurTabTarget(target);
    setCurPage(1);
  };
  const handlePagenation = (value: number) => {
    setCurPage(value);
    navigate(tabList[curTab].path + `&curpage=${value}`, { replace: true });
  };
  const getBookInfo = (bookIsbn: string, bookName: string) => {
    // console.log(bookIsbn, "@@@", bookName);
    navigate(bookIsbn);
  };

  const getBookList = async (queryType: string, page: number) => {
    if (isLoading) return;
    const params = {
      ttbkey: process.env.REACT_APP_ALADIN_KEY,
      QueryType: queryType,
      MaxResults: 20,
      start: page,
      // sort: "Title",
      SearchTarget: "Book",
      output: "js",
      Version: 20131101,
      CategoryId: 0,
    };
    if (params.QueryType === "itemeditorchoice") {
      params.CategoryId = 7396;
    }
    setIsLoading(true);
    const response = await getTypeListBook(params);
    console.log(response);
    setIsLoading(false);
    if (response.status === 200) {
      setBookList(response.data.item);
      setTotalPage(Math.ceil(response.data.totalResults / 20));
    }
  };
  const resetFunc = () => {
    const findIdx = tabList.findIndex(
      (item) => item.pathType === querystringToObject(location.search).curtab
    );
    setCurTabTarget(findIdx);
    if (!isEmpty(querystringToObject(location.search).curpage)) {
      setCurPage(Number(querystringToObject(location.search).curpage));
    }
  };

  useEffect(() => {
    if (isEmpty(location.search)) {
      navigate(tabList[0].path, { replace: true });
      getBookList(tabList[0].pathType, 1);
      return;
    } else {
      if (isEmpty(bookList)) {
        resetFunc();
        getBookList(
          querystringToObject(location.search).curtab,
          Number(querystringToObject(location.search).curpage)
        );
      } else {
        getBookList(querystringToObject(location.search).curtab, curPage);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curPage, curTab]);
  return (
    <>
      <NavigationTab
        tabTarget={curTab}
        handleTabFunc={(target) => handleTab(target)}
        tabList={tabList}
      />
      <Box sx={{ margin: "3% 0" }}>
        {!isLoading ? (
          <GridCont itemData={bookList} clickEvent={getBookInfo} />
        ) : (
          <Spinner height="75vh" />
        )}
      </Box>
      <Stack spacing={2} sx={{ mb: "15%" }}>
        <PageNation
          page={curPage}
          // totalPage={20}
          totalPage={totalPage}
          handlePageChangeFunc={handlePagenation}
        />
      </Stack>
    </>
  );
};

export default BookPage;
