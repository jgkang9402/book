import { Route, Routes } from "react-router-dom";
import MainPage from "pages/Main/MainPage";
import SignInPage from "pages/SignIn/SignInPage";
import SignUpPage from "pages/SignUp/SignUpPage";
import BookPage from "pages/Book/BookPage";
import MyBookPage from "pages/MyBook/MyBookPage";
import BookComunityPage from "pages/BookComunity/BookComunityPage";
import BookDetailPage from "pages/Book/BookDetailPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/book" element={<BookPage />} />
      <Route path="/book/:id" element={<BookDetailPage />} />
      <Route path="/mybook" element={<MyBookPage />} />
      <Route path="/bookcomunity" element={<BookComunityPage />} />
    </Routes>
  );
};

export default Router;
