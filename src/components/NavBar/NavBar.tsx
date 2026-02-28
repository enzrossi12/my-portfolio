import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { styled } from "@mui/material";
// import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export const StyledNavLink = styled("a")(() => ({
  textDecoration: "none",
  color: "inherit",
}));

export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    justifyContent: "end",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "space-evenly",
    gap: "18px",
  },
}));


const DesktopNavItem = styled("button")(({ theme }) => ({
  all: "unset",
  cursor: "pointer",
  position: "relative",
  padding: "10px 16px",
  borderRadius: "12px",
  color: "inherit",
  fontWeight: 500,
  letterSpacing: "0.2px",
  transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, background-color 220ms ease",
  border: "2px solid transparent",

  "&::after": {
    content: '""',
    position: "absolute",
    left: "12px",
    right: "12px",
    bottom: "6px",
    height: "2px",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 220ms ease",
    backgroundColor: theme.palette.primary.main,
  },

  "&:hover": {
    transform: "translateY(-2px)",
    borderColor: theme.palette.primary.main,
    boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
    backgroundColor: "rgba(255,255,255,0.06)",
  },

  "&:hover::after": {
    transform: "scaleX(1)",
  },

  "&:active": {
    transform: "scale(0.96)",
  },

  "&:focus-visible": {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: "3px",
  },
}));


const MobileMenuItem = styled(MenuItem)(({ theme }) => ({
  borderRadius: "10px",
  margin: "4px 8px",
  transition: "transform 180ms ease, background-color 180ms ease",
  "&:hover": {
    transform: "translateX(4px)",
    backgroundColor: theme.palette.action.hover,
  },
  "&:active": {
    transform: "scale(0.98)",
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      handleClose();
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="absolute"

      >
        <StyledMobileToolbar>
          <IconButton
            size="large"
            aria-label="open navigation menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MobileMenuItem onClick={() => handleSmoothScroll("about")}>
              <StyledNavLink>About</StyledNavLink>
            </MobileMenuItem>

            <MobileMenuItem onClick={() => handleSmoothScroll("skills")}>
              <StyledNavLink>Skills</StyledNavLink>
            </MobileMenuItem>

            <MobileMenuItem onClick={() => handleSmoothScroll("projects")}>
              <StyledNavLink>Projects</StyledNavLink>
            </MobileMenuItem>
          </Menu>
        </StyledMobileToolbar>

        <StyledDesktopToolbar variant="regular">
          <DesktopNavItem onClick={() => handleSmoothScroll("about")}>
            About
          </DesktopNavItem>

          <DesktopNavItem onClick={() => handleSmoothScroll("skills")}>
            Skills
          </DesktopNavItem>

          <DesktopNavItem onClick={() => handleSmoothScroll("projects")}>
            Projects
          </DesktopNavItem>
        </StyledDesktopToolbar>
      </AppBar>
    </Box>
  );
}
