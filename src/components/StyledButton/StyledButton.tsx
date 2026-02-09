import { styled } from "@mui/material/styles";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const StyledButton = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "3px",
  padding: "5px 15px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  display: "inline-flex",
  alignItems: "center",
  justifyContent:"center",
  gap: "10px",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
