import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Stack, styled } from "@mui/material";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useLanguage } from "../../contexts/LanguageContext/useLanguage";

export const StyledNavLink = styled("a")(() => ({
  textDecoration: "none",
  color: "inherit",
}));

export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: "72px",
  color: theme.palette.primary.main,
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    justifyContent: "space-between",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: "84px",
  color: theme.palette.primary.main,
  borderBottom: `1.5px solid rgba(47, 52, 56, 0.22)`,
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "space-between",
    gap: "18px",
  },
}));


const DesktopNavItem = styled("button")(({ theme }) => ({
  all: "unset",
  cursor: "pointer",
  position: "relative",
  padding: "8px 10px",
  color: "inherit",
  fontSize: "0.95rem",
  fontWeight: 700,
  transition: "transform 180ms ease, color 180ms ease",

  "&::after": {
    content: '""',
    position: "absolute",
    left: "8px",
    right: "8px",
    bottom: "2px",
    height: "3px",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 180ms ease",
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.72,
  },

  "&:hover": {
    color: theme.palette.secondary.main,
    transform: "rotate(-1deg) translateY(-1px)",
  },

  "&:hover::after": {
    transform: "scaleX(1)",
  },

  "&:active": {
    transform: "scale(0.98)",
  },

  "&:focus-visible": {
    outline: `2px dashed ${theme.palette.secondary.main}`,
    outlineOffset: "3px",
  },
}));


const MobileMenuItem = styled(MenuItem)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.primary.main,
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

const LogoMark = styled("button")(({ theme }) => ({
  all: "unset",
  cursor: "pointer",
  fontSize: "2rem",
  fontWeight: 800,
  letterSpacing: 0,
  color: theme.palette.primary.main,
  transform: "rotate(-2deg)",
  "&:focus-visible": {
    outline: `2px dashed ${theme.palette.secondary.main}`,
    outlineOffset: "4px",
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { t } = useLanguage();

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
        elevation={0}
        position="static"
        color="transparent"
        sx={{ backgroundImage: "none", boxShadow: "none", px: { xs: 1, md: 4 } }}
      >
        <StyledMobileToolbar>
          <LogoMark onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            &lt;/&gt;
          </LogoMark>
          <Stack direction="row" spacing={1} alignItems="center">
            <LanguageSwitcher />
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
          </Stack>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MobileMenuItem onClick={() => handleSmoothScroll("about")}>
              <StyledNavLink>{t("nav.about")}</StyledNavLink>
            </MobileMenuItem>

            <MobileMenuItem onClick={() => handleSmoothScroll("skills")}>
              <StyledNavLink>{t("nav.skills")}</StyledNavLink>
            </MobileMenuItem>

            <MobileMenuItem onClick={() => handleSmoothScroll("experience")}>
              <StyledNavLink>{t("nav.experience")}</StyledNavLink>
            </MobileMenuItem>

            <MobileMenuItem onClick={() => handleSmoothScroll("projects")}>
              <StyledNavLink>{t("nav.projects")}</StyledNavLink>
            </MobileMenuItem>

            <MobileMenuItem onClick={() => handleSmoothScroll("contact")}>
              <StyledNavLink>{t("nav.contact")}</StyledNavLink>
            </MobileMenuItem>
          </Menu>
        </StyledMobileToolbar>

        <StyledDesktopToolbar variant="regular">
          <LogoMark onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            &lt;/&gt;
          </LogoMark>

          <Stack direction="row" spacing={2.5} alignItems="center">
            <DesktopNavItem onClick={() => handleSmoothScroll("about")}>
              {t("nav.about")}
            </DesktopNavItem>

            <DesktopNavItem onClick={() => handleSmoothScroll("skills")}>
              {t("nav.skills")}
            </DesktopNavItem>

            <DesktopNavItem onClick={() => handleSmoothScroll("experience")}>
              {t("nav.experience")}
            </DesktopNavItem>

            <DesktopNavItem onClick={() => handleSmoothScroll("projects")}>
              {t("nav.projects")}
            </DesktopNavItem>

            <DesktopNavItem onClick={() => handleSmoothScroll("contact")}>
              {t("nav.contact")}
            </DesktopNavItem>

            <LanguageSwitcher />
          </Stack>
        </StyledDesktopToolbar>
      </AppBar>
    </Box>
  );
}
