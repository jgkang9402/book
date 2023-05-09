import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { getSearchBook } from "../../api/AladinApi";
import GridCont from "../common/GridCont";
import { enterInput } from "../../util/commonUtil";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  minHeight: "50vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface PagenationBtnType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // clickEvent: (data: string) => void;
  clickEvent: (bookIsbn: string, bookName: string) => void;
}
interface itemDataPropsType {
  adult: boolean;
  author: string;
  categoryId: number;
  categoryName: string;
  cover: string;
  customerReviewRank: number;
  description: string;
  fixedPrice: boolean;
  isbn: string;
  isbn13: string;
  itemId: number;
  link: string;
  mallType: string;
  mileage: number;
  priceSales: number;
  priceStandard: number;
  pubDate: string;
  publisher: string;
  salesPoint: number;
  stockStatus: string;
  subInfo: object;
  title: string;
}

const SearchModal = ({ open, setOpen, clickEvent }: PagenationBtnType) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const handleClose = () => setOpen(false);
  const [searchList, setSearchList] = useState<itemDataPropsType[] | null>(
    null
  );

  const handleSearchBook = async () => {
    if (!searchInputRef.current?.value) return;
    const params = {
      ttbkey: process.env.REACT_APP_ALADIN_KEY,
      Query: searchInputRef.current.value,
      QueryType: "Title",
      MaxResults: 20,
      start: 1,
      // sort: "Title",
      SearchTarget: "Book",
      output: "js",
      Version: 20131101,
    };
    const response = await getSearchBook(params);
    if (response.status === 200) setSearchList(response.data.item);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel htmlFor="input-with-icon-adornment">
              가장 감명깊게 본 책이 무엇인가요?
            </InputLabel>
            <Input
              autoFocus
              inputRef={searchInputRef}
              onKeyUp={(e) => enterInput(e, handleSearchBook)}
              endAdornment={
                <InputAdornment position="start">
                  <SearchIcon
                    onClick={handleSearchBook}
                    sx={{ cursor: "pointer" }}
                  />
                </InputAdornment>
              }
            />
          </FormControl>
          {searchList === null || searchList.length === 0 ? (
            <Typography
              sx={{
                height: "30vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
              id="modal-modal-title"
              variant="h6"
              component="h6"
            >
              가장 감명깊게 본 책을 선택해주세요.
            </Typography>
          ) : (
            <GridCont itemData={searchList} clickEvent={clickEvent} />
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default SearchModal;
