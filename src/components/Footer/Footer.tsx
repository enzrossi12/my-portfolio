import { Box, Container, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer: React.FC = () => {
  const emailAddress = "enzorossi120405@gmail.com";
  const subject = "Contact from your portfolio";
  const body = "Hi Enzo,";

  const handleEmailClick = () => {
    const mailToLink =
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(mailToLink, "_blank", "noopener,noreferrer");
  };

  return (
    <Box pt={2} pb={2}>
      <Container maxWidth="sm">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          pb={1}
        >
          <IconButton
            onClick={() =>
              window.open("https://github.com/enzrossi12", "_blank")
            }
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/enzo-rossi-ribeiro-da-silva/",
                "_blank",
              )
            }
          >
            <LinkedInIcon />
          </IconButton>


          <IconButton onClick={handleEmailClick}>
            <EmailIcon />
          </IconButton>
        </Box>

        <Typography textAlign="center">
          © 2026 Enzo Rossi - All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
