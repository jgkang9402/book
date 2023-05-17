import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import logo from "assets/logo.png";
import { useNavigate } from "react-router-dom";
import FullModalCont from "components/Modal/FullModalCont";
import SearchModal from "components/Modal/SearchModal";

export default function Header() {
  const [openMenuModal, setOpenMenuModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const getPickBookData = (bookIsbn: string, bookName: string) => {
    navigate(`/book/${bookIsbn}`);
    setOpenMenuModal(false);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#ACB1D6",
        height: "7vh",
        maxWidth: "500px",
        position: "fixed",
        margin: " 0 auto",
        left: 0,
        right: 0,
      }}
    >
      <Toolbar sx={{ textAlign: "center" }}>
        <Box sx={{ minWidth: "20%", width: "20%", backgroundColor: "blue" }} />

        <Box sx={{ minWidth: "60%" }}>
          <Typography
            component="h1"
            sx={{
              flexGrow: 1,
              fontSize: ".6rem",
              color: "#9384D1",
              cursor: "pointer",
              display: "inline-block",
            }}
          >
            <Avatar
              onClick={() => navigate("/")}
              src={logo}
              sx={{ margin: "0 auto" }}
              variant="square"
            />
            REBOOK
          </Typography>
        </Box>
        <Box
          sx={{
            minWidth: "20%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={() => setOpenMenuModal(true)}
            color="inherit"
            sx={{
              minWidth: 0,
            }}
          >
            <Search>
              <SearchIcon />
            </Search>
          </Button>
        </Box>
      </Toolbar>
      {openMenuModal ? (
        <FullModalCont
          openMenuModal={openMenuModal}
          handleClose={() => setOpenMenuModal(false)}
        >
          <SearchModal
            open={openMenuModal}
            setOpen={setOpenMenuModal}
            getPickBookData={getPickBookData}
          />
        </FullModalCont>
      ) : (
        ""
      )}
    </AppBar>
  );
}
