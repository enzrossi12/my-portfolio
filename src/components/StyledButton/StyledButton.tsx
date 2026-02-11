import { styled } from "@mui/material/styles";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void
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

const Button = ({ children, onClick }: ButtonProps) => {
  return <StyledButton onClick ={onClick}>{children}</StyledButton>;
};

export default Button;
