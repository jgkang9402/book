import { Box, CircularProgress } from "@mui/material";
import React from "react";

interface Spinnertype {
  height?: string;
}
const Spinner = ({ height }: Spinnertype) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        height: height ? height : "50vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <CircularProgress size={100} color="primary" />
    </Box>
  );
};

export default Spinner;
