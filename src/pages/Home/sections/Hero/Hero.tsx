import { Box, Container, Grid, Stack, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar-sketch.png";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CVPtBr from "../../../../assets/PDF/EnzoRossi_CV.pdf";
import Resume from "../../../../assets/PDF/EnzoRossi_Resume.pdf";
import Typewriter from "../../../../components/Typewriter/Typewriter";
import { useLanguage } from "../../../../contexts/LanguageContext/useLanguage";
import { useCallback, useState } from "react";

const StyledHero = styled("section")(({ theme }) => ({
  position: "relative",
  padding: "56px 0 72px",
  [theme.breakpoints.up("md")]: {
    padding: "72px 0 96px",
  },
}));

const PageLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "1rem",
  marginBottom: theme.spacing(2),
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(3.7rem, 9vw, 7.2rem)",
  lineHeight: 0.98,
  maxWidth: "620px",
  textDecoration: "underline",
  textDecorationColor: "rgba(47, 52, 56, 0.36)",
  textDecorationThickness: "3px",
  textUnderlineOffset: "12px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "3.4rem",
  },
}));

const RoleLine = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isUnderlined",
})<{ isUnderlined: boolean }>(({ theme, isUnderlined }) => ({
  position: "relative",
  display: "inline-block",
  marginTop: theme.spacing(4),
  "&::after": {
    content: '""',
    position: "absolute",
    left: "42%",
    right: "6%",
    bottom: 2,
    height: "4px",
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.7,
    transform: isUnderlined ? "scaleX(1) rotate(-2deg)" : "scaleX(0) rotate(-2deg)",
    transformOrigin: "left center",
    transition: "transform 560ms cubic-bezier(0.22, 1, 0.36, 1)",
  },
}));

const PortraitFrame = styled(Box)(() => ({
  position: "relative",
  width: "min(360px, 82vw)",
  margin: "22px auto 0",
  padding: "18px 18px 12px",
  border: `2px solid rgba(47, 52, 56, 0.36)`,
  backgroundColor: "rgba(251, 244, 230, 0.54)",
  boxShadow: "6px 8px 0 rgba(47, 52, 56, 0.08)",
  transform: "rotate(1.5deg)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-14px",
    left: "50%",
    width: "112px",
    height: "28px",
    transform: "translateX(-50%) rotate(-2deg)",
    backgroundColor: "rgba(174, 154, 123, 0.42)",
  },
}));

const StyledImg = styled("img")(() => ({
  width: "100%",
  aspectRatio: "1 / 1",
  objectFit: "cover",
  filter: "grayscale(1) contrast(1.05)",
  border: "1.5px solid rgba(47, 52, 56, 0.24)",
}));

const Annotation = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  whiteSpace: "pre-line",
  fontWeight: 800,
  lineHeight: 1.25,
  transform: "rotate(-7deg)",
  marginTop: theme.spacing(4),
  marginLeft: "auto",
  width: "fit-content",
  "&::before": {
    content: '"↗"',
    display: "inline-block",
    marginRight: theme.spacing(1),
    color: theme.palette.secondary.main,
  },
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
  const cvFile = isPtBr ? CVPtBr : Resume;
  const cvFileName = isPtBr ? "EnzoRossi_CV.pdf" : "EnzoRossi_Resume.pdf";
  const roleText = t("hero.role");
  const greetingLines = t("hero.greeting").split("\n");
  const [completedRole, setCompletedRole] = useState("");
  const isUnderlined = completedRole === roleText;

  const handleRoleComplete = useCallback(() => {
    setCompletedRole(roleText);
  }, [roleText]);

  return (
    <StyledHero id="about">
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <PageLabel>
              {t("section.aboutLabel")}
            </PageLabel>

            <HeroTitle variant="h1">
              {greetingLines.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < greetingLines.length - 1 ? <br /> : null}
                </span>
              ))}
            </HeroTitle>

            <RoleLine isUnderlined={isUnderlined}>
              <Typewriter
                key={roleText}
                text={roleText}
                delay={90}
                variant="h2"
                color="text.primary"
                onComplete={handleRoleComplete}
              />
            </RoleLine>

            <Typography color="text.secondary" pt={3}>
              {t("hero.keepScrolling")} ↘
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5} pt={4}>
              <StyledButton onClick={() => handleDownload(cvFile, cvFileName)}>
                <DownloadIcon />
                <Typography>{t("hero.downloadCv")}</Typography>
              </StyledButton>

              <StyledButton onClick={() => handleEmail(t("mail.hero.subject"), t("mail.hero.body"))}>
                <EmailIcon />
                <Typography>{t("hero.contactMe")}</Typography>
              </StyledButton>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <PortraitFrame>
              <StyledImg src={Avatar} alt="Sketch portrait of Enzo Rossi" />
              <Typography textAlign="center" color="text.secondary" pt={1}>
                {t("hero.portraitLabel")}
              </Typography>
            </PortraitFrame>
            <Annotation>{t("hero.annotation")}</Annotation>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
