import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Spinner = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        height: "50vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <CircularProgress size={100} color="inherit" />
    </Box>
  );
};

export default Spinner;
