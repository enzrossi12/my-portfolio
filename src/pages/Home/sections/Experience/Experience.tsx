import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { useLanguage } from "../../../../contexts/LanguageContext/useLanguage";

const Section = styled("section")(({ theme }) => ({
  padding: "28px 0 72px",
  [theme.breakpoints.up("md")]: {
    padding: "40px 0 92px",
  },
}));

const PageLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

const SectionTitle = styled(Typography)(() => ({
  display: "inline-block",
  textDecoration: "underline",
  textDecorationColor: "rgba(47, 52, 56, 0.34)",
  textDecorationThickness: "3px",
  textUnderlineOffset: "8px",
}));

const Timeline = styled(Box)(({ theme }) => ({
  position: "relative",
  marginTop: theme.spacing(5),
  paddingLeft: theme.spacing(5),
  "&::before": {
    content: '""',
    position: "absolute",
    top: "6px",
    bottom: "8px",
    left: "10px",
    width: "2px",
    backgroundColor: "rgba(47, 52, 56, 0.34)",
  },
}));

const TimelineItem = styled(Box)(({ theme }) => ({
  position: "relative",
  marginBottom: theme.spacing(4),
  "&::before": {
    content: '""',
    position: "absolute",
    left: `calc(-${theme.spacing(5)} - 1px)`,
    top: "7px",
    width: "13px",
    height: "13px",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Company = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 800,
}));

const SideNote = styled(Typography)(({ theme }) => ({
  width: "fit-content",
  color: theme.palette.secondary.main,
  fontWeight: 800,
  transform: "rotate(-8deg)",
  marginLeft: "auto",
  marginTop: theme.spacing(7),
  "&::before": {
    content: '"↙"',
    marginRight: theme.spacing(1),
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
    marginTop: theme.spacing(3),
  },
}));

const Experience = () => {
  const { t } = useLanguage();

  const items = [
    {
      title: t("experience.atweb.title"),
      company: t("experience.atweb.company"),
      period: t("experience.atweb.period"),
      description: t("experience.atweb.description"),
    },
    {
      title: t("experience.integrativa.title"),
      company: t("experience.integrativa.company"),
      period: t("experience.integrativa.period"),
      description: t("experience.integrativa.description"),
    },
  ];

  return (
    <Section id="experience">
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <PageLabel>{t("section.experienceLabel")}</PageLabel>
            <SectionTitle variant="h2">{t("experience.title")}</SectionTitle>

            <Timeline>
              {items.map((item) => (
                <TimelineItem key={`${item.title}-${item.period}`}>
                  <Typography variant="h5">
                    {item.title} <Company>{item.company}</Company>
                  </Typography>
                  <Typography color="text.secondary">{item.period}</Typography>
                  <Typography maxWidth="680px" pt={0.5}>
                    {item.description}
                  </Typography>
                </TimelineItem>
              ))}
            </Timeline>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <SideNote>{t("experience.note")}</SideNote>
            <Typography
              aria-hidden="true"
              color="text.secondary"
              fontSize="4rem"
              textAlign={{ xs: "left", md: "center" }}
              pt={10}
            >
              {"{ </> }"}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Experience;
