import React from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

interface MenuModalProps {
  handleModal: () => void;
  handleNavigate: (path: string) => void;
}

const MenuModal = ({ handleModal, handleNavigate }: MenuModalProps) => {
  return (
    <>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleModal}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem button>
          <ListItemText
            primary="로그인"
            onClick={() => handleNavigate("/signin")}
          />
          {/* <ListItemText primary="내정보" secondary="Titania" /> */}
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="나의정보" />
          {/* <ListItemText primary="내정보" secondary="Titania" /> */}
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="나의책방" />
        </ListItem>
        <Divider />
      </List>
    </>
  );
};

export default MenuModal;
