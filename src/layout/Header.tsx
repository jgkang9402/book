// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";

// import SearchIcon from "@mui/icons-material/Search";
// import InputBase from "@mui/material/InputBase";
// import { styled, alpha } from "@mui/material/styles";
// import openbook from "../assets/logo.png";
// import NavigateLink from "../components/common/NavigateLink";

// const pages = [
//   {
//     name: "책방",
//     // name: "신간",
//     path: "/newbook",
//   },
//   // {
//   //   name: "추천",
//   //   path: "/recomendbook",
//   // },
//   // {
//   //   name: "베스트셀러",
//   //   path: "/bestseller",
//   // },
//   {
//     name: "나의책방",
//     // name: "나의책장",
//     path: "/mybook",
//   },
//   {
//     name: "모두의책방",
//     path: "/mybook",
//   },
// ];
// const settings = [
//   { text: "Profile", path: "/profile" },
//   // { text: "Join", path: "/signup" },
//   { text: "Login", path: "/signin" },
// ];

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

// function HeaderCom() {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
//     null
//   );
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
//     null
//   );

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar
//       position="sticky"
//       sx={{ backgroundColor: "#c2ae9f", height: "13%" }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <NavigateLink path={"/"}>
//             <Typography
//               variant="h6"
//               noWrap
//               sx={{
//                 cursor: "pointer",
//                 alignItems: "center",
//                 mr: 2,
//                 display: { xs: "none", md: "flex" },
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 // letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               <Avatar
//                 alt=""
//                 sx={{ borderRadius: 0, mr: ".2rem" }}
//                 src={openbook}
//               />
//               REBOOK
//             </Typography>
//           </NavigateLink>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <NavigateLink
//                   path={page.path}
//                   color={"#c2ae9f"}
//                   key={page.name}
//                 >
//                   <MenuItem onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{page.name}</Typography>
//                   </MenuItem>
//                   {/* <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem> */}
//                 </NavigateLink>
//               ))}
//             </Menu>
//           </Box>
//           {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             123123
//           </Typography> */}
//           {/* <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             // href="/"
//             sx={{
//               cursor: "pointer",
//               alignItems: "center",
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             <Avatar
//               alt=""
//               sx={{ borderRadius: 0, mr: ".2rem" }}
//               src={openbook}
//             />
//             REBOOK
//           </Typography> */}

//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <NavigateLink path={page.path} key={page.name}>
//                 <Button
//                   onClick={handleCloseNavMenu}
//                   sx={{ my: 2, color: "white", display: "block" }}
//                 >
//                   {page.name}
//                 </Button>
//               </NavigateLink>
//               // <Button
//               //   key={page}
//               //   onClick={handleCloseNavMenu}
//               //   sx={{ my: 2, color: "white", display: "block" }}
//               // >
//               //   {page}
//               // </Button>
//             ))}
//           </Box>
//           <Box>
//             <Search>
//               <SearchIconWrapper>
//                 <SearchIcon />
//               </SearchIconWrapper>
//               <StyledInputBase
//                 placeholder="Search…"
//                 inputProps={{ "aria-label": "search" }}
//               />
//             </Search>
//           </Box>
//           <Box sx={{ flexGrow: 0, ml: "2rem" }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting, idx) => (
//                 <NavigateLink key={idx} color={"#c2ae9f"} path={setting.path}>
//                   <MenuItem onClick={handleCloseUserMenu}>
//                     <Typography textAlign="center">{setting.text}</Typography>
//                   </MenuItem>
//                 </NavigateLink>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default HeaderCom;

import * as React from "react";
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
      // position="fixed"
      // position="sticky"
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
        <Box
          sx={{ minWidth: "20%", width: "20%", backgroundColor: "blue" }}
        ></Box>
        {/*  */}
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
              // sx={{ margin: "0 auto", maxHeight: "5vh" }}
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
            onClick={() => navigate("/signin")}
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
    // <AppBar position="static" sx={{ backgroundColor: "#ACB1D6", height: "7%" }}>
    //   <Toolbar sx={{ textAlign: "center" }}>
    //     <Box
    //       sx={{ minWidth: "20%", width: "20%", backgroundColor: "blue" }}
    //     ></Box>
    //     <Typography
    //       component="h1"
    //       sx={{
    //         flexGrow: 1,
    //         fontSize: ".7rem",
    //         color: "#9384D1",
    //         cursor: "pointer",
    //       }}
    //       // sx={{ flexGrow: 1, fontSize: ".7rem" }}
    //     >
    //       <Avatar
    //         onClick={() => navigate("/")}
    //         src={logo}
    //         sx={{ margin: "0 auto" }}
    //         variant="square"
    //       />
    //       REBOOK
    //     </Typography>
    //     <Box
    //       sx={{
    //         minWidth: "20%",
    //         display: "flex",
    //         justifyContent: "flex-end",
    //       }}
    //     >
    //       <Button
    //         color="inherit"
    //         onClick={() => navigate("/signin")}
    //         sx={{
    //           minWidth: 0,
    //         }}
    //       >
    //         <Search>
    //           <SearchIcon />
    //         </Search>
    //       </Button>
    //     </Box>
    //   </Toolbar>
    // </AppBar>
  );
}
