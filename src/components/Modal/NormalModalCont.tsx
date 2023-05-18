import React, { JSXElementConstructor } from "react";
import { Modal } from "@mui/material";

interface PagenationBtnType {
  open: boolean;
  handleClose: () => void;
  // children: ReactJSXElement | string;
  // children: React.ReactNode;
  children: React.ReactElement<any, string | JSXElementConstructor<any>>;
}
const ModalForwardRef = React.forwardRef((props: any, ref: any) => (
  <div {...props} ref={ref}>
    {props.children}
  </div>
));

const NormalModalCont = ({
  open,
  handleClose,
  children,
}: PagenationBtnType) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <ModalForwardRef>{children}</ModalForwardRef>
    </Modal>
  );
};

export default NormalModalCont;
