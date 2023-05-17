import React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  // return <Slide direction="right" ref={ref} {...props} />;
  // return <Slide direction="down" ref={ref} {...props} />;
  return <Slide direction="up" ref={ref} {...props} />;
});

interface FullModalContProps {
  openMenuModal: boolean;
  children: ReactJSXElement | string;
  handleClose: () => void;
}

const FullModalCont = ({
  openMenuModal,
  handleClose,
  children,
}: FullModalContProps) => {
  return (
    // <div>
    <Dialog
      fullScreen
      sx={{ maxWidth: "500px", margin: "0 auto" }}
      open={openMenuModal}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      {children}
    </Dialog>
    // </div>
  );
};

export default FullModalCont;
