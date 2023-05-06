import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Box, Container } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // main: "#DBDFEA",
      main: "#9384D1",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

const Layout = () => {
  return (
    // <Box sx={{}}>
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          // backgroundColor: "orange",
          overflowX: "hidden",
          // position: "relative",
        }}
      >
        <Header />
        {/* <PageCom /> */}
        <Main />
        <Footer />
      </Box>
    </ThemeProvider>
    // <ThemeProvider theme={theme}>
    //   <Box sx={{ height: "100vh" }}>
    //     <Header />
    //     <PageCom />
    //     <Footer />
    //   </Box>
    // </ThemeProvider>
  );
};

export default Layout;
