import { Box, Container, IconButton, Stack, Typography, styled } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import { useLanguage } from "../../contexts/LanguageContext/useLanguage";

const FooterShell = styled("footer")(({ theme }) => ({
  borderTop: `1.5px solid rgba(47, 52, 56, 0.22)`,
  padding: "20px 0 28px",
  color: theme.palette.text.secondary,
}));

const ContactButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  border: `1px solid rgba(47, 52, 56, 0.18)`,
  borderRadius: "50%",
  transition: "transform 180ms ease, color 180ms ease",
  "&:hover": {
    color: theme.palette.secondary.main,
    transform: "rotate(-8deg) translateY(-2px)",
    backgroundColor: "rgba(200, 92, 74, 0.08)",
  },
}));

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const emailAddress = "enzorossi120405@gmail.com";
  const subject = t("mail.footer.subject");
  const body = t("mail.footer.body");

  const handleEmailClick = () => {
    const mailToLink =
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(mailToLink, "_blank", "noopener,noreferrer");
  };

  return (
    <FooterShell id="contact">
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <ContactButton
              aria-label="Open GitHub profile"
              onClick={() =>
                window.open("https://github.com/enzrossi12", "_blank", "noopener,noreferrer")
              }
            >
              <GitHubIcon />
            </ContactButton>

            <ContactButton
              aria-label="Open LinkedIn profile"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/rossidev/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <LinkedInIcon />
            </ContactButton>

            <ContactButton aria-label="Send email" onClick={handleEmailClick}>
              <EmailIcon />
            </ContactButton>
          </Stack>

          <Typography textAlign="center">github.com/enzrossi12</Typography>
          <Typography textAlign="center">linkedin.com/in/rossidev</Typography>

          <Box display="flex" alignItems="center" gap={0.75}>
            <PlaceIcon fontSize="small" />
            <Typography>Remote / Worldwide</Typography>
          </Box>
        </Stack>

        <Typography textAlign="center" pt={2} fontSize="0.85rem">
          © 2026 Enzo Rossi - {t("footer.rights")}
        </Typography>
      </Container>
    </FooterShell>
  );
};

export default Footer;
