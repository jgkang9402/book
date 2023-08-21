import { Box } from "@mui/material";
import React from "react";

type Props = {};

const AppInfo = (props: Props) => {
  return (
    <Box component={"h3"} sx={{ mt: 50, textAlign: "center" }}>
      도서 DB 제공 : 알라딘 인터넷서점( www.aladin.co.kr)
    </Box>
  );
};

export default AppInfo;
