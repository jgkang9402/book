import { Pagination } from "@mui/material";
import React from "react";

interface PageNationProps {
  page: number;
  totalPage: number;
  handlePageChangeFunc: (value: number) => void;
}
const PageNation = ({
  page,
  totalPage,
  handlePageChangeFunc,
}: PageNationProps) => {
  return (
    <Pagination
      page={page}
      // defaultPage={page}
      count={totalPage}
      sx={{ margin: "0 auto" }}
      color="primary"
      onChange={(e, value) => handlePageChangeFunc(value)}
    />
  );
};

export default PageNation;
