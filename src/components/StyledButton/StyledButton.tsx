import { styled } from "@mui/material/styles";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const StyledButton = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1.5px solid ${theme.palette.primary.light}`,
  color: "#fff",
  borderRadius: "8px",
  padding: "8px 20px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  cursor: "pointer",
  fontWeight: 500,
  letterSpacing: "0.5px",
  transition: "all 220ms ease",

  "&:hover": {
    borderColor: theme.palette.primary.main,
    backgroundColor: "rgba(255,255,255,0.05)",
  },

  "&:active": {
    transform: "scale(0.97)",
  },

  "&:focus-visible": {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: "3px",
  },
}));

const Button = ({ children, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
