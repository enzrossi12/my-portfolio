import { Box, Container, Grid, Stack, Typography, styled } from "@mui/material";
import { useLanguage } from "../../../../contexts/LanguageContext/useLanguage";

const Section = styled("section")(({ theme }) => ({
  padding: "36px 0 72px",
  [theme.breakpoints.up("md")]: {
    padding: "48px 0 92px",
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

const SkillItem = styled(Box)(({ theme }) => ({
  position: "relative",
  paddingLeft: theme.spacing(3),
  fontSize: "1.2rem",
  fontWeight: 700,
  "&::before": {
    content: '"✓"',
    position: "absolute",
    left: 0,
    top: 0,
    color: theme.palette.secondary.main,
    fontWeight: 900,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    left: theme.spacing(3),
    right: "18%",
    bottom: 0,
    height: "2px",
    backgroundColor: "rgba(47, 52, 56, 0.22)",
    transform: "rotate(-1deg)",
  },
}));

const CodeNote = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 700,
  transform: "rotate(2deg)",
  width: "fit-content",
  marginLeft: "auto",
  whiteSpace: "pre-line",
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
    marginTop: theme.spacing(3),
  },
}));

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const skillsSet = [
    "TypeScript",
    "React",
    "C#",
    "Angular",
    "Python",
    "SQL",
    "Git",
    "AWS",
  ];

  return (
    <Section id="skills">
      <Container maxWidth="lg">
        <PageLabel>{t("section.skillsLabel")}</PageLabel>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 8 }}>
            <SectionTitle variant="h2">{t("about.skills")}</SectionTitle>

            <Grid container spacing={{ xs: 3, sm: 4 }} pt={5}>
              {skillsSet.map((skill) => (
                <Grid size={{ xs: 6, sm: 4, md: 3 }} key={skill}>
                  <SkillItem>{skill}</SkillItem>
                </Grid>
              ))}
            </Grid>

            <Typography color="text.secondary" pt={5} maxWidth="460px">
              {t("about.skillsNote")} ↘
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Stack alignItems={{ xs: "flex-start", md: "center" }}>
              <CodeNote>
                {"function improve() {\n  learn();\n  build();\n  repeat();\n}"}
              </CodeNote>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default AboutSection;
