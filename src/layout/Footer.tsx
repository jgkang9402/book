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
import FullModalCont from "components/Modal/FullModalCont";
import MenuModal from "components/Modal/MenuModal";

const Footer = () => {
  const [curLoction, setCurLoction] = useState(-1);
  const [openMenuModal, setOpenMenuModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
    if (openMenuModal) {
      setOpenMenuModal(false);
    }
  };
  const handleModal = () => {
    setOpenMenuModal(!openMenuModal);
  };
  const handleLocationTarget = useCallback(() => {
    switch (true) {
      case location.pathname.includes("/bookcomunity"):
        setCurLoction(4);
        break;
      case location.pathname.includes("/book"):
        setCurLoction(1);
        break;
      case location.pathname.includes("/mybook"):
        setCurLoction(3);
        break;
      default:
        setCurLoction(-1);
        break;
    }
  }, [location.pathname]);
  useEffect(() => {
    handleLocationTarget();
  }, [handleLocationTarget, curLoction]);

  return (
    <Box
      component={"footer"}
      sx={{
        height: "7vh",
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
        <BottomNavigationAction
          label="메뉴"
          onClick={handleModal}
          icon={<MenuIcon />}
        />
        <BottomNavigationAction
          label="책방"
          onClick={() => handleNavigate("/book")}
          icon={<MenuBookIcon />}
        />
        <BottomNavigationAction
          onClick={() => handleNavigate("/")}
          icon={
            <Avatar src={logo} sx={{ margin: "0 auto" }} variant="square" />
          }
        />
        <BottomNavigationAction
          label="나의책방"
          onClick={() => handleNavigate("/mybook")}
          icon={<LocalLibraryIcon />}
        />
        <BottomNavigationAction
          label="모두의책방"
          onClick={() => handleNavigate("/bookcomunity")}
          icon={<LibraryBooksIcon />}
        />
      </BottomNavigation>
      {openMenuModal ? (
        <FullModalCont
          openMenuModal={openMenuModal}
          handleClose={() => setOpenMenuModal(false)}
        >
          <MenuModal
            handleModal={handleModal}
            handleNavigate={handleNavigate}
          />
        </FullModalCont>
      ) : (
        ""
      )}
    </Box>
  );
};

export default Footer;
