import { Box, Card, Container, Grid, Typography, styled } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import { useLanguage } from "../../../../contexts/LanguageContext/LanguageContext";

const StyledCard = styled(Card)(({ theme }) => ({
  padding: "10px 10px",
  textAlign: "center",
  marginBottom: "10px",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const skillsSet = [
    "C#",
    "Angular",
    "Javascript",
    "Typescript",
    "Python",
    "HTML",
    "CSS",
    "Git",
    "SQL",
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Box id="about" pt={5} mb={3}>
          <Typography variant="h2" textAlign="center">
            {t("about.title")}
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="center"
          pb={3}
        >
          <Grid size={{ xs: 9, md: 2.5 }}>
            <AnimationComponent moveDirection="right">
              <StyledCard variant="outlined">
                <WorkspacePremiumIcon />
                <Typography textAlign="center" fontWeight={600}>
                  {t("about.experience")}
                </Typography>
                <Typography textAlign="center">{t("about.year")}</Typography>
                <Typography textAlign="center">
                  {t("about.fullstack")}
                </Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
          <Grid size={{ xs: 9, md: 2.5 }}>
            <AnimationComponent moveDirection="left">
              <StyledCard variant="outlined">
                <SchoolIcon />
                <Typography textAlign="center" fontWeight={600}>
                  {t("about.education")}
                </Typography>
                <Typography textAlign="center">{t("about.degree")}</Typography>
                <Typography textAlign="center">{t("about.course")}</Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
        </Grid>
        <Box pb={1}>
          <Typography>{t("about.description")}</Typography>
        </Box>
        <hr />
        <Box id="skills" pt={1} mb={3}>
          <Typography variant="h3" textAlign="center" fontWeight={300}>
            {t("about.skills")}
          </Typography>
        </Box>
        <Box mb={5}>
          <Grid container spacing={3} justifyContent="center">
            {skillsSet.map((skill, index) => (
              <Grid size={{ xs: 5, sm: 4, md: 2, lg: 2 }} key={index}>
                <StyledCard variant="outlined">{skill}</StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AboutSection;
