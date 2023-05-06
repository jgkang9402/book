import { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import logo from "assets/logo.png";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <Box
      component={"footer"}
      sx={{
        height: "7vh",
        // position: "sticky",
        position: "fixed",
        margin: " 0 auto",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#000",
        maxWidth: "500px",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        sx={{ backgroundColor: "#ACB1D6", height: "100%" }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="메뉴" icon={<MenuIcon />} />
        <BottomNavigationAction
          label="책방"
          onClick={() => navigate("/book")}
          icon={<MenuBookIcon />}
        />
        <BottomNavigationAction
          onClick={() => navigate("/")}
          icon={
            <Avatar src={logo} sx={{ margin: "0 auto" }} variant="square" />
          }
        />
        <BottomNavigationAction
          label="나의책방"
          onClick={() => navigate("/mybook")}
          icon={<LocalLibraryIcon />}
        />
        <BottomNavigationAction
          label="모두의책방"
          onClick={() => navigate("/bookcomunity")}
          icon={<LibraryBooksIcon />}
        />
      </BottomNavigation>
    </Box>
    // <Box
    //   component={"footer"}
    //   sx={{
    //     height: "7%",
    //     position: "sticky",
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    //     backgroundColor: "#000",
    //   }}
    // >
    //   <BottomNavigation
    //     showLabels
    //     value={value}
    //     sx={{ backgroundColor: "#ACB1D6", height: "100%" }}
    //     onChange={(event, newValue) => {
    //       setValue(newValue);
    //     }}
    //   >
    //     <BottomNavigationAction label="메뉴" icon={<MenuIcon />} />
    //     <BottomNavigationAction
    //       label="책방"
    //       onClick={() => navigate("/book")}
    //       icon={<MenuBookIcon />}
    //     />
    //     <BottomNavigationAction
    //       onClick={() => navigate("/")}
    //       icon={
    //         <Avatar src={logo} sx={{ margin: "0 auto" }} variant="square" />
    //       }
    //     />
    //     <BottomNavigationAction
    //       label="나의책방"
    //       onClick={() => navigate("/mybook")}
    //       icon={<LocalLibraryIcon />}
    //     />
    //     <BottomNavigationAction
    //       label="모두의책방"
    //       onClick={() => navigate("/bookcomunity")}
    //       icon={<LibraryBooksIcon />}
    //     />
    //   </BottomNavigation>
    // </Box>
  );
};

export default Footer;
