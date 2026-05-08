import { styled } from "@mui/material/styles";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const StyledButton = styled("button")(({ theme }) => ({
  position: "relative",
  backgroundColor: "rgba(251, 244, 230, 0.3)",
  border: `1.5px solid rgba(47, 52, 56, 0.45)`,
  color: theme.palette.primary.main,
  borderRadius: "2px 7px 3px 6px",
  padding: "9px 18px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  cursor: "pointer",
  fontFamily: theme.typography.fontFamily,
  fontWeight: 800,
  transition: "transform 180ms ease, background-color 180ms ease, border-color 180ms ease",
  boxShadow: "3px 4px 0 rgba(47, 52, 56, 0.08)",

  "&:hover": {
    borderColor: theme.palette.secondary.main,
    backgroundColor: "rgba(200, 92, 74, 0.08)",
    transform: "rotate(-1deg) translateY(-1px)",
  },

  "&:active": {
    transform: "scale(0.98)",
  },

  "&:focus-visible": {
    outline: `2px dashed ${theme.palette.secondary.main}`,
    outlineOffset: "3px",
  },
}));

const Button = ({ children, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
