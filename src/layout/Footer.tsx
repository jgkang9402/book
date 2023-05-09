import { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import logo from "assets/logo.png";
import { Avatar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const [curLoction, setCurLoction] = useState(-1);
  const navigate = useNavigate();
  const location = useLocation();
  // const handleLocationTarget = () => {
  //   switch (location.pathname) {
  //     case "/book":
  //       setCurLoction(1);
  //       break;
  //     case "/mybook":
  //       setCurLoction(3);
  //       break;
  //     case "/bookcomunity":
  //       setCurLoction(4);
  //       break;
  //     default:
  //       setCurLoction(-1);
  //       break;
  //   }
  // };
  // useEffect(() => {
  //   handleLocationTarget();
  // }, [location]);
  const handleLocationTarget = useCallback(() => {
    switch (location.pathname) {
      case "/book":
        setCurLoction(1);
        break;
      case "/mybook":
        setCurLoction(3);
        break;
      case "/bookcomunity":
        setCurLoction(4);
        break;
      default:
        setCurLoction(-1);
        break;
    }
  }, [location]);
  useEffect(() => {
    handleLocationTarget();
  }, [handleLocationTarget, location]);

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
        value={curLoction}
        sx={{ backgroundColor: "#ACB1D6", height: "100%" }}
        onChange={(event, newValue) => {
          setCurLoction(newValue);
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
  );
};

export default Footer;
