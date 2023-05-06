import { Box } from "@mui/material";
import Router from "router/Router";

const Main = () => {
  return (
    <Box
      component={"main"}
      sx={{
        minHeight: "86vh",
        position: "relative",
        mt: "7vh",
        mb: "7vh",
      }}
    >
      <Router />
    </Box>
  );
};

export default Main;
