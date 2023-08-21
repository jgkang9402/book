import {
  Box,
  Button,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import TextBox from "components/common/TextBox";
import NavigateBtn from "components/common/NavigateBtn";
import { createDocInReport } from "api/FirebaseApi";
import SearchModal from "components/Modal/SearchModal";
import NormalModalCont from "components/Modal/NormalModalCont";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const CreateReportPage = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [searchData, setSearchData] = useState<null | {
    bookName: string;
    bookIsbn: string;
    bookImg: string;
  }>(null);
  const navigate = useNavigate();

  // const properties = {
  //   name: "title",
  //   // helperText: "text",
  //   type: "text",
  //   xs: 12,
  // };
  const searchInputProps = {
    name: "favoBook",
    // helperText: "Favorite Book",
    type: "text",
    placeholder: "어떤 책을 읽으셨나요?",
    xs: 12,
    sm: 6,
    inputProps: {
      endAdornment: (
        <InputAdornment position="start">
          <SearchIcon
            sx={{ cursor: "pointer" }}
            onClick={() => clickBookSearchBox()}
          />
        </InputAdornment>
      ),
      inputProps: {
        onFocus: (e: React.FocusEvent<HTMLInputElement>) =>
          (e.target.placeholder = "돋보기를 클릭해주세요."),
        onBlur: (e: React.FocusEvent<HTMLInputElement>) =>
          (e.target.placeholder = "어떤 책을 읽으셨나요?"),
      },
    },
    value: searchData?.bookName,
    isUncontrolInput: true,
  };
  const clickBookSearchBox = () => setOpen(true);

  const handleClose = () => setOpen(false);
  const getPickBookData = (
    bookIsbn: string,
    bookName: string,
    bookImg: string
  ) => {
    console.log("@@@@@@@", bookIsbn, bookName, bookImg);
    setSearchData({ bookName, bookIsbn, bookImg });
    setOpen(false);
  };

  const getForm = async () => {
    console.log(title);
    console.log(content);
    if (searchData === null) return;
    const uid = "ZWZq4Ad0pfaCTJgT0x8MB0iKsfD3";
    const params = {
      title: title,
      content: content,
      // ...searchData,
      bookName: searchData.bookName,
      isbn: searchData.bookIsbn,
      cover: searchData.bookImg,
      // bookName: searchData.bookName,
      // bookIsbn: searchData.bookIsbn,
      // bookImg: searchData.bookImg,
    };
    console.log(params);
    await createDocInReport(uid, params);
    navigate("/mybook");
  };
  const test = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
    setTitle(e.target.value);

  return (
    <Box sx={{ width: "95%", height: "70vh", margin: "0 auto" }}>
      <NavigateBtn path={-1}>돌아가기</NavigateBtn>
      <Button onClick={getForm}>완료</Button>
      <Box>
        <NormalModalCont open={open} handleClose={handleClose}>
          <SearchModal
            open={open}
            setOpen={setOpen}
            getPickBookData={getPickBookData}
          />
        </NormalModalCont>
        <TextBox properties={searchInputProps} />
        <FormControl sx={{ width: "100%" }} variant="standard">
          {/* <TextBox properties={properties} /> */}
          {/* <Input fullWidth  onChange={test} /> */}
          <TextField label="제목" variant="outlined" onChange={test} />
        </FormControl>
      </Box>
      <ReactQuill
        style={{ height: "70%" }}
        theme="snow"
        value={content}
        placeholder="내용을 입력해주세요."
        onChange={setContent}
      />
    </Box>
  );
};

export default CreateReportPage;
