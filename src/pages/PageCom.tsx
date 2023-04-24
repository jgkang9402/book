import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import MainPage from "./Main/MainPage";
import SignInPage from "./SignIn/SignInPage";
import SignUpPage from "./SignUp/SignUpPage";

const PageCom = () => {
  return (
    <Container sx={{ minHeight: "80vh" }}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Container>
  );
};

export default PageCom;
