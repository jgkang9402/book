import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import MainPage from "./Main/MainPage";

const PageCom = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Container>
  );
};

export default PageCom;
