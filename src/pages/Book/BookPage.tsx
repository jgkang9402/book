import { Pagination, Stack } from "@mui/material";
import { getTypeListBook } from "api/AladinApi";
import GridCont from "components/common/GridCont";
import NavigationTab from "components/common/NavigationTab";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { alaDum } from "util/aladinDummy";
import { isEmpty, querystringToObject } from "util/commonUtil";

const BookPage = () => {
  const tabList = [
    {
      labelName: "베스트셀러",
      color: "#c2ae9f",
      path: "?curtab=bestseller",
    },
    {
      labelName: "신규베스트",
      color: "#c2ae9f",
      path: "?curtab=itemnewspecial",
      // path: "?curtab=newbest",
    },
    {
      labelName: "블로거추천",
      color: "#c2ae9f",
      // path: "?curtab=blogpick",
      path: "?curtab=blogbest",
    },
    {
      labelName: "개발도서",
      color: "#c2ae9f",
      path: "?curtab=itemeditorchoice",
    },
  ];
  const [tabTarget, setTabTarget] = useState(0);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  // const [curTab, setCurTab] = useState("");
  const [bookList, setBookList] = useState([]);
  const location = useLocation();
  const handleTab = (target: number) => {
    setPage(1);
    setTabTarget(target);
  };
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const testFunc = (bookIsbn: string, bookName: string) => {
    console.log(bookIsbn, bookName);
  };
  const getBookList = async () => {
    const params = {
      ttbkey: process.env.REACT_APP_ALADIN_KEY,
      QueryType: isEmpty(location.search)
        ? "bestseller"
        : querystringToObject(location.search).curtab,
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
    const response = await getTypeListBook(params);
    console.log(response);

    if (response.status === 200) {
      setBookList(response.data.item);
      setTotalPage(Math.floor(response.data.totalResults / 20));
    }
  };

  useEffect(() => {
    if (isEmpty(location.search)) {
      navigate(tabList[0].path, { replace: true });
    }
    getBookList();
  }, [tabTarget, page]);
  // }, [getBookList, location.search, page, tabTarget]);

  return (
    <>
      <NavigationTab
        tabTarget={tabTarget}
        handleTabFunc={(target) => handleTab(target)}
        tabList={tabList}
      />
      <GridCont itemData={bookList} clickEvent={testFunc} />
      {/* <GridCont itemData={alaDum} clickEvent={testFunc} /> */}
      <Stack spacing={2}>
        <Pagination
          count={totalPage}
          // defaultPage={page}
          page={page}
          sx={{ margin: "0 auto" }}
          color="primary"
          onChange={handleChange}
        />
      </Stack>
    </>
  );
};

export default BookPage;
