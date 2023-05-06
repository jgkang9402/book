import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

type NavigateLinkProps = {
  path: string;
  color?: string;
  children: ReactJSXElement | string;
};
interface StyledLinkProps {
  color?: string;
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : "#fff")};
`;

const NavigateLink = ({ path, color, children }: NavigateLinkProps) => {
  return (
    <StyledLink color={color ? color : ""} to={path}>
      {children}
    </StyledLink>
  );
};

export default NavigateLink;
