import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface NavigateBtnProps {
  path: string | number;
  children: ReactJSXElement | string;
}

const NavigateBtn = ({ path, children }: NavigateBtnProps) => {
  const navigate = useNavigate();
  //
  const handleNavigate = () => {
    // const handleNavigate = (path: string | number) => {
    if (typeof path === "string") {
      navigate(path);
    } else if (typeof path === "number") {
      navigate(path);
    }
  };
  return <Button onClick={handleNavigate}>{children}</Button>;
};

export default NavigateBtn;
