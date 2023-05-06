import { Route, Routes } from "react-router-dom";
import MainPage from "pages/Main/MainPage";
import SignInPage from "pages/SignIn/SignInPage";
import SignUpPage from "pages/SignUp/SignUpPage";
import BookPage from "pages/Book/BookPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/book" element={<BookPage />} />
    </Routes>
  );
};

export default Router;
