import { Box, Card, Container, Grid, Typography, styled } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const StyledCard = styled(Card)(({ theme }) => ({
  padding: "10px 10px",
  textAlign: "center",
  marginBottom: "10px",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const AboutSection: React.FC = () => {
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
            About me
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
                  Experience
                </Typography>
                <Typography textAlign="center">1 year</Typography>
                <Typography textAlign="center">
                  FullStack Development
                </Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
          <Grid size={{ xs: 9, md: 2.5 }}>
            <AnimationComponent moveDirection="left">
              <StyledCard variant="outlined">
                <SchoolIcon />
                <Typography textAlign="center" fontWeight={600}>
                  Education
                </Typography>
                <Typography textAlign="center">Bachelors Degree</Typography>
                <Typography textAlign="center">Computer Science</Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
        </Grid>
        <Box pb={1}>
          <Typography>
            Software Engineer with experience in backend and frontend
            development, systems integration and Python automation. I have
            worked with C# .NET and Angular in real-world projects, developing
            features, fixing bugs and improving existing systems. I also created
            automation scripts to process data and integrate systems through XML
            and FTP. I am currently seeking opportunities to continue growing as
            a software engineer and to contribute to practical and impactful
            projects.
          </Typography>
        </Box>
        <hr />
        <Box id="skills" pt={1} mb={3}>
          <Typography variant="h3" textAlign="center" fontWeight={300}>
            Skills
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
