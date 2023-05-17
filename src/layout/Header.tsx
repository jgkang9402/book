import React from "react";
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

export default function Header() {
  const navigate = useNavigate();
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
        {/*  */}
        <Box
          sx={{
            minWidth: "20%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
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
    </AppBar>
  );
}
