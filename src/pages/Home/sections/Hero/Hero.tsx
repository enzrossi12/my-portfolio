import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg.jpeg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import CV from "../../../../assets/PDF/EnzoRossi_CV.pdf";
import CVPtBr from "../../../../assets/PDF/CV_EnzoRossi.pdf";
import Typewriter from "../../../../components/Typewriter/Typewriter";
import { useLanguage } from "../../../../contexts/LanguageContext/LanguageContext";

const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    PaddingTop: "100px",
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "70%",
  aspectRatio: "1 / 1",
  objectFit: "cover",
  borderRadius: "50%",
  border: `1px solid ${theme.palette.primary.contrastText}`,
}));

const handleDownload = (fileUrl: string, fileName: string) => {
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleEmail = (subject: string, body: string) => {
  const emailAddress = "enzorossi120405@gmail.com";

  const mailToLink =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  window.open(mailToLink, "_blank", "noopener,noreferrer");
};

const Hero = () => {
  const { t, language } = useLanguage();
  const isPtBr = language === "pt-BR";
  const cvFile = isPtBr ? CVPtBr : CV;
  const cvFileName = isPtBr ? "CV_EnzoRossi.pdf" : "EnzoRossi_CV.pdf";

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
              >
                Enzo Rossi
              </Typography>
              <Typewriter
                text={t("hero.role")}
                delay={120}
                variant="h2"
                color="primary.contrastText"
              />

              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                pt={3}
              >
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton onClick={() => handleDownload(cvFile, cvFileName)}>
                    <DownloadIcon />
                    <Typography>{t("hero.downloadCv")}</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton onClick={() => handleEmail(t("mail.hero.subject"), t("mail.hero.body"))}>
                    <EmailIcon />
                    <Typography>{t("hero.contactMe")}</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
